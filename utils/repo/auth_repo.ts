import axios from 'axios';
import Constants from 'expo-constants';

import { AuthResponse, User } from '../../models';
import getData from '../helpers/get_data';
import saveData from '../helpers/save_data';
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

		await saveData('jwt', data.token);

		return data.userData;
	} catch (ex) {
		if (axios.isAxiosError(ex)) {
			throw new Error(ex.response!.data.message[0]);
		}
		if (ex instanceof Error) {
			throw new Error(ex.message);
		}
		throw new Error('Unknown error occurred');
	}
}

async function checkAuth(): Promise<User> {
	if (!authUrl) {
		throw new Error('Unknown error occurred');
	}

	try {
		const token = await getData('jwt');
		const res = await axios.post<AuthResponse>(`${authUrl}/check-auth`, { token });
		const { data } = res;

		return data.userData;
	} catch (ex) {
		if (axios.isAxiosError(ex)) {
			throw new Error(ex.response!.data.message[0]);
		}
		if (ex instanceof Error) {
			throw new Error(ex.message);
		}
		throw new Error('Unknown error occurred');
	}
}

export default {
	signIn,
	checkAuth,
};
