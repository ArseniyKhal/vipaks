import React, { useEffect } from "react";
import { observer } from "mobx-react";
import TeamList from "../components/TeamList";
import UserList from "../components/UserList";
import Header from "../components/Header";
import TeamStore from "../store/store";
import { Typography, Box } from '@mui/material';

const TeamTab: React.FC = observer(() => {
	const { getUserAction, isLoading, users } = TeamStore;

	useEffect(() => {
		!users.length && getUserAction();
	}, []);

	return (
		<>
			<Header url='/' text='На главную' />
			{!isLoading ?
				<Box sx={{
					display: 'flex', mt: 10, pb: 10, flex: "0 1 50%", borderRadius: 2, gap: 2,
					'@media (max-width: 1000px)': { flexDirection: 'column' }
				}}>
					<TeamList />
					<UserList />
				</Box>
				: <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 10 }} >Загружаю...</Typography>}
		</>
	);
});

export default TeamTab;