import { createContext, useContext } from "react";
import { observable, action, makeObservable } from "mobx";
import { Profile, UserType } from "./types.d";

class ProfileStore {
	profile: UserType | null = null;

	constructor() {
		makeObservable(this, {
			profile: observable,
			fetchUserProfile: action,
		});
	}
	fetchUserProfile(username: string) {
		fetch(`https://api.github.com/users/${username}`)
			.then((response) => response.json())
			.then((data) => {
				this.profile = data;
			});
	}
}
interface TeamMember {
	username: string;
}

class TeamStore {
	team: TeamMember[] = [];

	users = [
		{
			username: "user1",
			avatar_url: "https://via.placeholder.com/150",
			profile_url: "https://github.com/user1",
		},
		{
			username: "user2",
			avatar_url: "https://via.placeholder.com/150",
			profile_url: "https://github.com/user2",
		},
	];

	constructor() {
		makeObservable(this, {
			team: observable,
			users: observable,
			addMember: action,
			removeMember: action,
		});
	}

	addMember(username: string) {
		// Add member to team
		this.team.push({ username } as TeamMember);
	}

	removeMember(username: string) {
		// Remove member from team
		this.team = this.team.filter((member) => member.username !== username);
	}
}

class RootStore {
	profileStore: ProfileStore;
	teamStore: TeamStore;

	constructor() {
		this.profileStore = new ProfileStore();
		this.teamStore = new TeamStore();
	}
}

const rootStore = new RootStore();
const StoreContext = createContext(rootStore);

export const useStore = () => useContext(StoreContext);

export default StoreContext;