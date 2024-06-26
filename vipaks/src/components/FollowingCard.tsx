import { Typography, Box, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { TeamMemberType } from "../types";

const Item = styled(Box)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1.5),
	textAlign: 'left',
	color: theme.palette.text.secondary,
	backgroundColor: '#f5f5f5',
	borderRadius: 10,
}));

export default function Following({ following }: { following: TeamMemberType }) {
	return (
		<Grid item xs={6} sm={4} md={2} >
			<Item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
				<Avatar variant="rounded" src={following.avatar_url} alt={following.login} sx={{ width: "100%", height: 'auto' }} />
				<Link to={following.html_url} style={{ color: 'black' }}>
					<Typography variant="body2" sx={{ mb: 1, textAlign: 'center' }}>{following.login}</Typography>
				</Link>
			</Item>
		</Grid>
	);
};
