import { UserType } from '../types';
const API_BASE_URL = 'https://api.github.com';

export const getDataUser = (name: string): Promise<UserType> => {
	return fetch(`${API_BASE_URL}/users/${name}`).then((res) => res.json());
}

export const getRepos = (url: string) => {
	return fetch(url).then((res) => res.json());
}

export const getLanguages = (url: string) => {
	return fetch(url).then((res) => res.json());
}