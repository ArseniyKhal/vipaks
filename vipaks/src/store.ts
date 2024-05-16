import { createContext, useContext } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import {
	// Profile,
	UserType
} from "./types.d";
import { dataTeam2 } from "./data";
import { getTeamMember } from "./services/servicesApi"
import { TeamMemberType } from "./types";

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

class TeamStore {
	team: TeamMemberType[] = [];
	users: TeamMemberType[] = []
	isLoading = false

	constructor() {
		makeAutoObservable(this);
	}

	getUserAction = async () => {
		try {
			console.log("запрос данных");
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

	sortTeamAction = (ascending: boolean) => {
		this.team = this.team.sort((a, b) =>
			ascending ? a.login.localeCompare(b.login) : b.login.localeCompare(a.login)
		);
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