import React from "react";
import { observer } from "mobx-react";
import { useStore } from "./store";
import TeamList from "./TeamList";
import UserList from "./UserList";

const TeamTab: React.FC = observer(() => {
  const { teamStore } = useStore();

  return (
    <div>
      <TeamList />
      <UserList />
    </div>
  );
});

export default TeamTab;