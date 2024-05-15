import { Link } from "react-router-dom";
import { Typography, Container, AppBar, Toolbar, Button } from '@mui/material';

export default function Header({ url, text }: { url: string, text: string }) {
	return (
		<AppBar position='fixed'>
			<Container maxWidth="xl">
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography variant="h6">Vipaks</Typography>
					<Link to={url} style={{ color: 'white' }}>
						<Button color="inherit" variant='outlined'>{text}</Button>
					</Link>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
