import axios from 'axios';
import Constants from 'expo-constants';

import { AuthResponse } from '../../models';

const authUrl: string | null = Constants.manifest?.extra?.authUrl;

async function signIn(email: string, password: string): Promise<AuthResponse | null> {
	if (!authUrl) {
		return null;
	}

	try {
		const res = await axios.post<AuthResponse>(`${authUrl}/login`, { email, password });
		const data = res.data;

		return data;
	} catch (ex) {
		if (axios.isAxiosError(ex)) {
			throw ex.response!.data;
		}

		throw ex;
	}
}

export default {
	signIn,
};
