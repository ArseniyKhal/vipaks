import { createContext, useContext } from "react";
import { observable, action, makeObservable, makeAutoObservable, runInAction } from "mobx";
import { Profile, UserType } from "./types.d";
import { dataTeam2 } from "./data";
import { getTeamMember } from "./services/servicesApi"

// class ProfileStore {
// 	profile: UserType | null = null;

// 	constructor() {
// 		makeObservable(this, {
// 			profile: observable,
// 			fetchUserProfile: action,
// 		});
// 	}
// 	fetchUserProfile(username: string) {
// 		fetch(`https://api.github.com/users/${username}`)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				this.profile = data;
// 			});
// 	}
// }
interface TeamMemberType {
	id: number;
	login: string;
	avatar_url: string;
	html_url: string;
	[key: string]: any;
}

class TeamStore {
	team: TeamMemberType[] = [];
	// users = dataTeam2
	users: TeamMemberType[] = []
	isLoading = false

	constructor() {
		makeAutoObservable(this);
	}

	getUserAction = async () => {
		try {
			this.isLoading = true
			const res = await getTeamMember();
			runInAction(() => {
				this.users = res;
				this.isLoading = false
			})
		} catch {
			this.isLoading = false
		}
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