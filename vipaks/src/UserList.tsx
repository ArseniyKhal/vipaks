import React, { useState } from "react";
import { observer } from "mobx-react";
import TeamStore from "./store";
import { Avatar, List, ListItem, ListItemText, TextField, Button, Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { TeamMemberType } from "./types";

const UserList: React.FC = observer(() => {
	const [searchQuery, setSearchQuery] = useState("");
	const { users, addMember } = TeamStore;

	const handleAddMember = (id: number) => addMember(id);

	// поиск по логину
	let filteredUsers: TeamMemberType[] = []
	if (searchQuery) {
		filteredUsers = users.filter((user) =>
			user.login.toLowerCase().startsWith(searchQuery.toLowerCase())
		);
	}

	return (
		<>
			<Box sx={{ backgroundColor: '#cccccc', flex: "0 1 50%", p: 2, borderRadius: 2 }}>
				<Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }} >Пользователи</Typography>
				<TextField
					label="Search"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					sx={{ width: '100%' }}
				/>
				<List>
					{(searchQuery ? filteredUsers : users).map((user) => (
						<ListItem key={user.id} sx={{
							pt: 0, pb: 0, pl: 1, pr: 1,
							display: 'flex',
							alignItems: 'center',
							gap: 2,
							backgroundColor: '#f1eeee',
							borderRadius: 1,
							"&:not(:last-child)": { mb: 1 }
						}} >
							<Avatar src={user.avatar_url} alt={user.login} variant="rounded" />
							<ListItemText
								primary={user.login}
								secondary={
									<Link to={user.html_url} target="_blank" style={{ wordBreak: 'break-all' }}>
										{user.html_url}
									</Link>
								}
							/>
							<Button onClick={() => handleAddMember(user.id)} variant="contained" sx={{ minWidth: '30px', p: 0 }} >
								<Box sx={{ width: '130px', '@media (max-width: 600px)': { display: 'none' } }} >Add to Team</Box>
								<Box sx={{ fontSize: '18px', '@media (min-width: 601px)': { display: 'none' } }} >+</Box>
							</Button>
						</ListItem>
					))}
				</List>
			</Box>
		</>
	);
});

export default UserList;
