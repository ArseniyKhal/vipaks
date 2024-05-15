import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "./store";
import { Avatar, List, ListItem, ListItemText, Typography, Box, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { ThemeProvider, createTheme, Box } from '@mui/system';
import { dataUser, dataRepos2 } from "./data";
import { Link } from "react-router-dom";
import { getDataUser, getRepos } from "./services/servicesApi";
import { UserType, Repository } from "./types";
import Repo from "./Repo";

const MY_NICKNAME = 'ArseniyKhal';

const ProfileInfo: React.FC = (() => {
	const [profile, setProfile] = React.useState<UserType | null>(null);
	const [dataRepos, setDataRepos] = React.useState<Repository[]>([]);
	const [textErr, setTextErr] = React.useState<string | null>(null);

	// const { profileStore } = useStore();
	// const { profile }: any = profileStore;
	// if (!profile) return null;

	const fetchReposData = async (url: string) => {
		try {
			const reposData = await getRepos(url);
			reposData && setDataRepos(reposData);
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
				fetchReposData(userData.repos_url);
			}
		} catch (error) {
			setTextErr("Error: " + error);
			console.error(error);
		}
	}


	useEffect(() => {
		// fetchUserData();
		setProfile(dataUser)
	}, []);



	return (
		<>
			{profile ? <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mt: 5 }}>
				<Avatar src={profile.avatar_url} alt={profile.login} sx={{ width: 400, height: 400, mb: 3 }} />
				<Link to={profile.html_url} style={{ color: 'black' }}>
					<Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, }} >{profile.login}</Typography>
				</Link>
				<Typography variant="body1"   >
					Дата создания аккаунта: {new Date(profile.created_at).toLocaleDateString()}
				</Typography>

				{dataRepos &&
					<>
						<Typography variant="body1">Список репозиториев:</Typography>
						<Stack spacing={2} width={900}>
							{dataRepos.map((repo) => (
								<Repo key={repo.id} repo={{ ...repo }} />
							))}
						</Stack>
					</>}


				<Typography variant="body1">Список подписок пользователя (following_url)</Typography>
				{/* <List>
						{dataUser?.following.map((user: any) => (
							<ListItem key={user.id}>
								<Avatar src={user.avatar_url} />
								<ListItemText primary={user.login} />
							</ListItem>
						))}
					</List> */}
			</Box> :
				// <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }} >Пользователь не найден</Typography>}
				<Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }} >{textErr}</Typography>}
		</>
	);
});

export default ProfileInfo;
