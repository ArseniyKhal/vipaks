import React from "react";
import { observer } from "mobx-react";
import { useStore } from "./store";
import { Button, List, ListItem, ListItemText } from '@mui/material';

const TeamList: React.FC = observer(() => {
  const { teamStore } = useStore();
// console.log(teamStore);
  const handleRemoveMember = (username: string) => {
    teamStore.removeMember(username);
  };

  return (
    <List>
      {teamStore.team.map((member: { username: string }) => (
        <ListItem key={member.username}>
          <ListItemText primary={member.username} />
          <Button onClick={() => handleRemoveMember(member.username)}>
            Remove
          </Button>
        </ListItem>
      ))}
    </List>
  );
});

export default TeamList;
