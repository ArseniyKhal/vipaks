import React from 'react';
import './App.css';
// import { AppBar, Button, Toolbar, Typography } from '@mui/material';
// import { makeStyles, Theme } from '@mui/material/styles';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import TeamTab from "./TeamTab";
// import {   ThemeProvider, createTheme } from '@mui/system';
import { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { minHeight } from '@mui/system';


// const useStyles: Theme = makeStyles(() => ({
// 	root: {
// 		textAlign: "center",
// 		padding: "20px",
// 	},
// }));

// const theme = createTheme({
// 	palette: {
// 		background: {
// 			paper: '#fff',
// 		},
// 		text: {
// 			primary: '#173A5E',
// 			secondary: '#46505A',
// 		},
// 		action: {
// 			active: '#001E3C',
// 		},
// 		success: {
// 			dark: '#009688',
// 		},
// 	},
// });

const App: React.FC = () => {
	return (
		<>
			<AppBar position='fixed'>
				<Container maxWidth="lg">
					<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Typography variant="h6">Vipaks</Typography>
						<Box>
							<Button color="inherit" variant='outlined' >Команда</Button>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<main style={{ backgroundColor: '#f1f1f1', minHeight: '100dvh' }}>
				<Container maxWidth="lg" sx={{ backgroundColor: '#f1eeee', pt: 10 }}  >
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<ProfileTab />} />
							<Route path="/team" element={<TeamTab />} />
						</Routes>
					</BrowserRouter>
				</Container>
			</main>
		</>
	);
};

export default App;
