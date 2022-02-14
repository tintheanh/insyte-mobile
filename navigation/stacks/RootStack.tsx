import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';

import UnAuthStack from './UnAuthStack/UnAuthStack';
import { AppState } from '../../redux/store';
import { alertErrorToast, authRepo } from '../../utils';
import { setUser } from '../../redux/auth/actions';
import { User } from '../../models';

function RootStack({ user }: any) {
	console.log(user);
	const dispatch = useDispatch();

	const onSetUser = (user: User | null) => dispatch(setUser(user));

	useEffect(() => {
		authRepo
			.checkAuth()
			.then((userData) => onSetUser(userData))
			.catch((_) => {
				onSetUser(null);
			});
	}, []);

	return (
		<NavigationContainer>
			<UnAuthStack />
		</NavigationContainer>
	);
}

const mapStateToProps = (state: AppState) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps)(RootStack);
