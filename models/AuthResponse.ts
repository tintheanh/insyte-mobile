import { User } from './User';

export type AuthResponse = {
	token: string;
	userData: User;
};
