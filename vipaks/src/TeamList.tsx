import React, { useState } from "react";
import { observer } from "mobx-react";
// import { useStore } from "./store";
import TeamStore from "./store";
import { Button, List, ListItem, ListItemText, Box, Typography } from '@mui/material';

const TeamList: React.FC = observer(() => {
	const [ascending, setAscending] = useState(true);
	// const { teamStore } = useStore();
	const { team, removeMember } = TeamStore;

	const handleRemoveMember = (id: number) => removeMember(id);

	// // Функция сортировки по имени пользователя
	// const sortTeam = () => {
	// 	const sortedTeam = [...teamStore.team].sort((a, b) =>
	// 		ascending ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username)
	// 	);
	// 	setAscending(!ascending);
	// 	return sortedTeam;
	// };

	return (
		<>
			<Box sx={{ backgroundColor: 'green', flex: "0 1 50%", p: 2, borderRadius: 2 }}>
				<Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }} >Team</Typography>
				{/* <Button onClick={() => sortTeam()} variant="contained" sx={{ width: '180px', mb: 1, mt: 2 }}>
					Sort {ascending ? "Descending" : "Ascending"}
				</Button> */}
				<List>
					{team.map((member) => (
						<ListItem key={member.id} sx={{ p: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
							<ListItemText
								primary={
									<Typography variant="body1" sx={{ fontWeight: 'bold' }} >{member.login}</Typography>
								} />
							<Button onClick={() => handleRemoveMember(member.id)} variant="contained" sx={{ width: '130px' }}>
								Remove
							</Button>
						</ListItem>
					))}
				</List>
			</Box>
		</>
	);
});

export default TeamList;
