import React, { useState } from "react";
import { observer } from "mobx-react";
// import { useStore } from "./store";
import TeamStore from "./store";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, TextField, Button, Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { dataTeam2 } from "./data";


const UserList: React.FC = observer(() => {
	// const { teamStore } = useStore();
	const [searchQuery, setSearchQuery] = useState("");
	const { addMember } = TeamStore;

	const handleAddMember = (id: number) => addMember(id);

	// const filteredUsers = teamStore.users.filter((user) =>
	// 	user.username.toLowerCase().includes(searchQuery.toLowerCase())
	// );

	return (
		<>
			<Box sx={{ backgroundColor: 'coral', flex: "0 1 50%", p: 2, borderRadius: 2 }}>
				<Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }} >Users</Typography>
				<TextField
					label="Search"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					sx={{ width: '100%' }}
				/>
				<List>
					{dataTeam2.map((user) => (
						<ListItem key={user.id} sx={{ p: 1, display: 'flex', alignItems: 'center', gap: 2 }} >
							<Avatar src={user.avatar_url} alt={user.login} variant="rounded" />
							<ListItemText
								primary={user.login}
								secondary={
									<Link to={user.html_url} target="_blank">
										{user.html_url}
									</Link>
								}
							/>
							<Button onClick={() => handleAddMember(user.id)} variant="contained" sx={{ width: '130px' }}>
								Add to Team
							</Button>
						</ListItem>
					))}
				</List>


			</Box>
		</>
	);
});

export default UserList;
