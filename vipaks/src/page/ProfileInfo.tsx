import React, { useEffect } from "react";
import { Avatar, Typography, Box, Stack, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { getDataUser, getRepos, getFollowing } from "../services/servicesApi";
import { UserType, RepositoryType, TeamMemberType } from "../types";
import Repo from "../components/Repo";
import Following from "../components/FollowingCard";
import Header from "../components/Header";

const MY_NICKNAME = 'ArseniyKhal';

const ProfileInfo: React.FC = (() => {
	const [profile, setProfile] = React.useState<UserType | null>(null);
	const [dataRepos, setDataRepos] = React.useState<RepositoryType[]>([]);
	const [dataFollowing, setDataFollowing] = React.useState<TeamMemberType[]>([]);
	const [textErr, setTextErr] = React.useState<string | null>(null);

	const fetchReposData = async (url: string) => {
		try {
			const reposData = await getRepos(url);
			reposData && setDataRepos(reposData);
		} catch (error) {
			console.error(error);
		}
	}

	const fetchFollowingData = async (url: string) => {
		try {
			const followingData = await getFollowing(url);
			followingData && setDataFollowing(followingData);
		} catch (error) {
			console.error(error);
		}
	}

	let userData: UserType | null = null;
	const fetchUserData = async () => {
		try {
			setTextErr("Загрузка данных...");
			userData = await getDataUser(MY_NICKNAME);
			if (userData.message) {
				setTextErr("Пользователь не найден");
				return
			} else {
				setTextErr(null);
				setProfile(userData)
				userData.repos_url && fetchReposData(userData.repos_url);
				userData.following_url && fetchFollowingData(userData.following_url.replace(/\{.*?\}/g, ''));
			}
		} catch (error) {
			setTextErr("Error: " + error);
			console.error(error);
		}
	}

	useEffect(() => {
		fetchUserData();
	}, []);

	return (
		<>
			<Header url='/team' text='Команда' />

			{profile ? <Box sx={{
				display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mt: 10, p: 1,
				'@media (min-width: 600px)': { p: 5 }
			}}>

				<Avatar src={profile.avatar_url} alt={profile.login}
					sx={{
						mb: 3, width: 400, height: 'auto',
						'@media (max-width: 768px)': { width: '50vw', mb: 2 }
					}} />

				<Link to={profile.html_url} style={{ color: 'black', textDecoration: 'none' }} >
					<Typography variant="h5" sx={{
						fontWeight: 'bold', mb: 1,
						'@media (max-width: 500px)': { fontSize: '1.2rem' },
						'&:hover': {
							textShadow: '0 2px 4px rgba(0,0,0,0.2)'
						}
					}}>{profile.login}</Typography>
				</Link>

				<Typography variant="body1" sx={{
					mb: 3,
					'@media (max-width: 500px)': { fontSize: '0.9rem' }
				}}>
					Дата создания аккаунта: {new Date(profile.created_at).toLocaleDateString()}
				</Typography>

				{dataRepos &&
					<>
						<Typography variant="body1">Список репозиториев:</Typography>
						<Stack spacing={2}
							sx={{ mb: 3, '@media (max-width: 500px)': { width: '100%' } }}>
							{dataRepos.map((repo) => (
								<Repo key={repo.id} repo={{ ...repo }} />
							))}
						</Stack>
					</>}

				{dataFollowing &&
					<>
						<Typography variant="body1">Список подписок:</Typography>
						<Grid container spacing={2}>
							{dataFollowing.map((following) => (
								<Following key={following.id} following={{ ...following }} />
							))}
						</Grid>
					</>}

			</Box> :
				<Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }} >{textErr}</Typography>}
		</>
	);
});

export default ProfileInfo;
