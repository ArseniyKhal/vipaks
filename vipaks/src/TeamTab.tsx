import React, { useEffect } from "react";
import { observer } from "mobx-react";
import TeamList from "./TeamList";
import UserList from "./UserList";
import Header from "./components/Header";
import TeamStore from "./store";
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
				<Box sx={{ display: 'flex', mt: 10, flex: "0 1 50%", borderRadius: 2, backgroundColor: 'yellow', gap: 2 }}>
					<TeamList />
					<UserList />
				</Box>
				: <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 10 }} >Загружаю...</Typography>}
		</>
	);
});

export default TeamTab;