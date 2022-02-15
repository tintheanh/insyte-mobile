import { cloneDeep } from 'lodash';

import { AuthAction, AuthState, DispatchTypes } from './types';

const initialState: AuthState = {
	user: null,
};

export default function authReducer(state = initialState, action: AuthAction): AuthState {
	switch (action.type) {
		case DispatchTypes.SET_USER: {
			const newState = cloneDeep(state);
			newState.user = action.payload;
			return newState;
		}
		default:
			return state;
	}
}
