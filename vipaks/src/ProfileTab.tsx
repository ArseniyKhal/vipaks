import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "./store";
import { useParams } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";

const ProfileTab: React.FC = (() => {
  const { username = "defaultUsername" } = useParams<{ username: string }>();
  const { profileStore } = useStore();

  useEffect(() => {
    profileStore.fetchUserProfile(username);
  }, [profileStore, username]);

  return <ProfileInfo />;
});

export default ProfileTab;