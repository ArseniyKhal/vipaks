import { makeAutoObservable, runInAction } from "mobx";
import { getTeamMember } from "../services/servicesApi"
import { TeamMemberType } from "../types";
class TeamStore {
	team: TeamMemberType[] = [];
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

	sortTeamAction = (ascending: boolean) => {
		this.team = this.team.sort((a, b) =>
			ascending ? a.login.localeCompare(b.login) : b.login.localeCompare(a.login)
		);
	}
}

export default new TeamStore();