import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProfileInfo from "./page/ProfileInfo";
import TeamTab from "./page/TeamTab";
import { Box, Container } from '@mui/material';
import { NotFound } from "./page/NotFound";

const App: React.FC = () => {
	return (
		<Box style={{ width: '100%', backgroundColor: '#f1f1f1' }}>
			<Container maxWidth="xl" sx={{ backgroundColor: '#f1eeee', pt: 1, minHeight: '100dvh', '@media (max-width: 400px)': { p: 0 } }}  >
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