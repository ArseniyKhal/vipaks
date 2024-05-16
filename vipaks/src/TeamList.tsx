import React, { useState } from "react";
import { observer } from "mobx-react";
import TeamStore from "./store";
import { Button, List, ListItem, ListItemText, Box, Typography } from '@mui/material';

const TeamList: React.FC = observer(() => {
	const [ascending, setAscending] = useState(true);
	const { team, removeMember, sortTeamAction } = TeamStore;

	const handleRemoveMember = (id: number) => removeMember(id);

	// Сортировки по имени
	const sortTeam = () => {
		sortTeamAction(ascending);
		setAscending(!ascending);
	};
	
	return (
		<>
			<Box sx={{ backgroundColor: 'green', flex: "0 1 50%", p: 2, borderRadius: 2 }}>
				<Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }} >Команда</Typography>
				<Button onClick={() => sortTeam()} variant="contained" sx={{ width: '280px', mb: 1, mt: 2 }}>
					сортировать по {ascending ? "убыванию" : "возрастанию"}
				</Button>
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
