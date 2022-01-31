import axios from 'axios';
import Constants from 'expo-constants';

import { AuthResponse } from '../../models';
import validateEmail from '../validations/validate_email';
import validatePassword from '../validations/validate_password';

const authUrl: string | null = Constants.manifest?.extra?.authUrl;

async function signIn(email: string, password: string): Promise<AuthResponse> {
	if (!authUrl) {
		throw new Error('Unknown error occurred');
	}

	try {
    // Client-side validation
		validateEmail(email);
		validatePassword(password);

		const res = await axios.post<AuthResponse>(`${authUrl}/login`, { email, password });
		const data = res.data;

		return data;
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
};
