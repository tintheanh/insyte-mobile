import { combineReducers, createStore } from 'redux';

import { AuthState } from './auth/types';
import authReducer from './auth/reducer';

export type AppState = {
	auth: AuthState;
};

const appReducer = combineReducers({
	auth: authReducer,
});

export default createStore(appReducer);
