import React from "react";
import { Typography } from '@mui/material';
import Header from "./components/Header";

export const NotFound: React.FC = (() => {
	return (
		<>
			<Header url='/' text='На главную' />
			<Typography variant="h5" sx={{ mt: 10 }}>
				404. Страница не найдена
			</Typography>
		</>
	)
});

