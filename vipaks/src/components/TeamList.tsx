import React, { useState } from "react";
import { observer } from "mobx-react";
import TeamStore from "../store/store";
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
			<Box sx={{ backgroundColor: '#cccccc', flex: "0 1 50%", p: 2, borderRadius: 2 }}>
				<Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }} >Команда</Typography>
				<Button onClick={() => sortTeam()} variant="contained" sx={{ mb: 1, mt: 2, width: '100%', '@media (min-width: 400px)': { width: '320px' } }}>
					сортировать по {ascending ? "убыванию" : "возрастанию"}
				</Button>
				<List>
					{team.map((member) => (
						<ListItem key={member.id} sx={{
							p: 1, display: 'flex', alignItems: 'center', gap: 2, backgroundColor: '#f1eeee',
							borderRadius: 1,
							"&:not(:last-child)": { mb: 1 }
						}}>
							<ListItemText
								primary={
									<Typography variant="body1" sx={{ fontWeight: 'bold', wordBreak: 'break-all' }} >{member.login}</Typography>
								} />
							<Button onClick={() => handleRemoveMember(member.id)} variant="contained" sx={{ minWidth: '30px' }}>
								<Box sx={{ width: '130px', '@media (max-width: 600px)': { display: 'none' } }} >Remove</Box>
								<Box sx={{ fontSize: '18px', '@media (min-width: 601px)': { display: 'none' } }} >-</Box>
							</Button>
						</ListItem>
					))}
				</List>
			</Box>
		</>
	);
});

export default TeamList;
