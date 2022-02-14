import { User } from '../../models';

export enum DispatchTypes {
	SET_USER = 'SET_USER',
}

export type AuthAction = {
	type: string;
	payload: User | null;
};

export type AuthState = {
	user: User | null;
};
