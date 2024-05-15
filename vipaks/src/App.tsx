import React from 'react';
import './App.css';
// import { AppBar, Button, Toolbar, Typography } from '@mui/material';
// import { makeStyles, Theme } from '@mui/material/styles';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import TeamTab from "./TeamTab";
// import {   ThemeProvider, createTheme } from '@mui/system';
import { Box, Container, AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import { padding } from '@mui/system';

const App: React.FC = () => {
	return (
		<>
			<AppBar position='fixed'>
				<Container maxWidth="xl">
					<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Typography variant="h6">Vipaks</Typography>
						<Box>
							<Button color="inherit" variant='outlined' >Команда</Button>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box style={{ width: '100%', backgroundColor: '#f1f1f1' }}>
				<Container maxWidth="xl" sx={{ 
					// backgroundColor: 'green',
					backgroundColor: '#f1eeee',
					 pt: 1 }} style={{ minHeight: '100dvh' }} >
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<ProfileTab />} />
							<Route path="/team" element={<TeamTab />} />
						</Routes>
					</BrowserRouter>
				</Container>
			</Box >

		</>
	);
};

export default App;
