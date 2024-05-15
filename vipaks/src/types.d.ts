export interface UserType {
	login: string,
	id: number,
	node_id: string,
	avatar_url: string,
	gravatar_id: string,
	url: string,
	html_url: string,
	followers_url: string,
	following_url: string,
	gists_url: string,
	starred_url: string,
	subscriptions_url: string,
	organizations_url: string,
	repos_url: string,
	events_url: string,
	received_events_url: string,
	type: string,
	site_admin: false,
	name: string | null,
	company: string | null,
	blog: string,
	location: string | null,
	email: string | null,
	hireable: string | null,
	bio: string | null,
	twitter_username: string | null,
	public_repos: number,
	public_gists: number,
	followers: number,
	following: number,
	created_at: string,
	updated_at: string,
	message?: string
}


export interface Repository {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	languages_url: string;
	created_at: string;
	clone_url: string;
	[key: string]: any;
}
interface Following {
	id: number;
	login: string;
	avatar_url: string;
}
export interface Profile {
  avatar_url: string;
  login: string;
  created_at: string;
  repos: Repository[];
  following: Following[];
}

