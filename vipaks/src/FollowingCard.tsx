import { useEffect, useState } from "react";
import { Typography, Box, Grid, Avatar, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { FollowingType } from "./types";

const Item = styled(Box)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1.5),
	textAlign: 'left',
	color: theme.palette.text.secondary,
	backgroundColor: '#f5f5f5',
	borderRadius: 10,
}));


export default function Following({ following }: { following: FollowingType }) {

	return (
		<Grid item xs={2}>
			<Item sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', gap: 2 }}>
				<Avatar src={following.avatar_url} alt={following.login} sx={{ width: 60, height: 60 }} />
				<Link to={following.html_url} style={{ color: 'black' }}>
					<Typography variant="body2" sx={{ mb: 1, textAlign: 'center' }}>{following.login}</Typography>
				</Link>
			</Item>
		</Grid>
	);
};
