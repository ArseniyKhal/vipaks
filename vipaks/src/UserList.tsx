import React, { useState } from "react";
import { observer } from "mobx-react";
import { useStore } from "./store";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
	Button
} from '@mui/material';

const UserList: React.FC = observer(() => {
  const { teamStore } = useStore();
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddMember = (username: string) => {
    teamStore.addMember(username);
  };

  const filteredUsers = teamStore.users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <List>
        {filteredUsers.map((user) => (
          <ListItem key={user.username}>
            <ListItemAvatar>
              <Avatar src={user.avatar_url} />
            </ListItemAvatar>
            <ListItemText
              primary={user.username}
              secondary={
                <a href={user.profile_url} target="_blank" rel="noreferrer">
                  {user.profile_url}
                </a>
              }
            />
            <Button onClick={() => handleAddMember(user.username)}>
              Add to Team
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
});

export default UserList;
