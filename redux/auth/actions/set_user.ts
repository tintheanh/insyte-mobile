import { User } from '../../../models';
import { AuthAction, DispatchTypes } from '../types';

const setUser = (user: User): AuthAction => ({
	type: DispatchTypes.SET_USER,
	payload: user,
});

export default setUser;
