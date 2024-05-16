export interface TeamMemberType {
	id: number;
	login: string;
	avatar_url: string;
	html_url: string;
	[key: string]: any;
}
export interface UserType extends TeamMemberType {
	created_at: string,
	repos_url: string,
	following_url: string,
	message?: string
}

export interface RepositoryType {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	languages_url: string;
	created_at: string;
	clone_url: string;
	[key: string]: any;
}
