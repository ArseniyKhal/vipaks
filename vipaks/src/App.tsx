import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import TeamTab from "./TeamTab";
// import {   ThemeProvider, createTheme } from '@mui/system';
import { Box, Container } from '@mui/material';
import { NotFound } from "./NotFound";

const App: React.FC = () => {
	return (
		<Box style={{ width: '100%', backgroundColor: '#f1f1f1' }}>
			<Container maxWidth="xl" sx={{ backgroundColor: '#f1eeee', pt: 1 }} style={{ minHeight: '100dvh' }} >
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<ProfileInfo />} />
						<Route path="/team" element={<TeamTab />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</Box >
	);
};

export default App;
