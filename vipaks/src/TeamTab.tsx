import React from "react";
import { observer } from "mobx-react";
// import { useStore } from "./store";
import TeamList from "./TeamList";
import UserList from "./UserList";
import Header from "./components/Header";
import { Avatar, Typography, Box, Stack, Grid, Container, AppBar, Toolbar, Button } from '@mui/material';

const TeamTab: React.FC = observer(() => {
	// const { teamStore } = useStore();

	return (
		<>
			<Header url='/' text='На главную' />
			{/* {profile ? */}
			<Box sx={{ display: 'flex', mt: 10, p: 1, flex: "0 1 50%", borderRadius: 2, backgroundColor: 'yellow', gap: 2 }}>

				<TeamList />
				<UserList />
			</Box>
			{/* :				<Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }} >Загружаю</Typography>} */}
		</>
	);
});

export default TeamTab;