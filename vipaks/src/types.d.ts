export interface UserType {
	login: string,
	id: number,
	avatar_url: string,
	html_url: string,
	created_at: string,
	repos_url: string,
	following_url: string,
	[key: string]: any;
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

export interface FollowingType {
	id: number;
	login: string;
	avatar_url: string;
	html_url: string;
	[key: string]: any;
}

export interface Profile {
	avatar_url: string;
	login: string;
	created_at: string;
	repos: Repository[];
	following: Following[];
}

export interface TeamMemberType {
	id: number;
	login: string;
	avatar_url: string;
	html_url: string;
	[key: string]: any;
}