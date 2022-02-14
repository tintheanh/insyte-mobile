import { User } from '../../../models';
import { AuthAction, DispatchTypes } from '../types';

const setUser = (user: User | null): AuthAction => ({
	type: DispatchTypes.SET_USER,
	payload: user,
});

export default setUser;
