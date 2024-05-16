import { createContext, useContext } from "react";
import { observable, action, makeObservable, makeAutoObservable } from "mobx";
import { Profile, UserType } from "./types.d";
import { dataTeam2 } from "./data";

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
interface TeamMemberType {
	id: number;
	login: string;
	avatar_url: string;
	html_url: string;
	[key: string]: any;
}

class TeamStore {
	team: TeamMemberType[] = [];

	users = dataTeam2

	constructor() {
		makeAutoObservable(this);
	}

	addMember = (id: number) => {
		const user = this.users.find((user) => user.id === id);
		if (this.team.find((user) => user.id === id)) {
			return console.log("уже есть");
		} else {
			this.team.push(user as TeamMemberType);
		}
	}

	removeMember = (id: number) => {
		this.team = this.team.filter((user) => user.id !== id)
	}
}

// this.team = this.team.filter((member) => member.username !== username);




// class RootStore {
// 	profileStore: ProfileStore;
// 	teamStore: TeamStore;

// 	constructor() {
// 		this.profileStore = new ProfileStore();
// 		this.teamStore = new TeamStore();
// 	}
// }

// const rootStore = new RootStore();
// const StoreContext = createContext(rootStore);

// export const useStore = () => useContext(StoreContext);

// export default StoreContext;

export default new TeamStore();