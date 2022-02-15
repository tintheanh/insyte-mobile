import axios from 'axios';
import Constants from 'expo-constants';

import { AuthResponse, User } from '../../models';
import getDataFromStorage from '../helpers/get_data_from_storage';
import removeDataFromStorage from '../helpers/remove_data_from_storage';
import saveDataInStorage from '../helpers/save_data_in_storage';
import toError from '../helpers/to_error';
import validateEmail from '../validations/validate_email';
import validatePassword from '../validations/validate_password';

const authUrl: string | null = Constants.manifest?.extra?.authUrl;

async function signIn(email: string, password: string): Promise<User> {
	if (!authUrl) {
		throw new Error('Unknown error occurred');
	}

	try {
		// Client-side validation
		validateEmail(email);
		validatePassword(password);

		const res = await axios.post<AuthResponse>(`${authUrl}/login`, { email, password });
		const { data } = res;

		await saveDataInStorage('jwt', data.token);

		return data.userData;
	} catch (ex: unknown) {
		throw toError(ex);
	}
}

async function checkAuth(): Promise<User> {
	if (!authUrl) {
		throw new Error('Unknown error occurred');
	}

	try {
		const token = await getDataFromStorage('jwt');

		if (!token) {
			throw new Error('Token is missing');
		}

		const res = await axios.post<AuthResponse>(`${authUrl}/check-auth`, { token });
		const { data } = res;

		return data.userData;
	} catch (ex: unknown) {
		throw toError(ex);
	}
}

async function logOut(): Promise<void> {
	try {
		await removeDataFromStorage('jwt');
	} catch (ex: unknown) {
		throw toError(ex);
	}
}

export default {
	signIn,
	checkAuth,
	logOut,
};
