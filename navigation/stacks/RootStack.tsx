import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';

import UnAuthStack from './UnAuthStack/UnAuthStack';
import { AppState } from '../../redux/store';
import { authRepo } from '../../utils';
import { setUser } from '../../redux/auth/actions';
import { User } from '../../models';
import { Loading } from '../../components';
import { HomeScreen } from '../screens';

function RootStack({ isAuth }: { isAuth: boolean }) {
	const [loading, setLoading] = useState<boolean>(false);

	const dispatch = useDispatch();

	const onSetUser = (user: User | null) => dispatch(setUser(user));

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const userData = await authRepo.checkAuth();
				onSetUser(userData);
			} catch (_) {
				onSetUser(null);
			}
			setLoading(false);
		})();
	}, []);

	const renderStack = () => {
		if (isAuth) {
			return <HomeScreen />;
		}
		return <UnAuthStack />;
	};

	if (loading) {
		return <Loading />;
	}

	return <NavigationContainer>{renderStack()}</NavigationContainer>;
}

const mapStateToProps = (state: AppState) => ({
	isAuth: state.auth.user !== null,
});

export default connect(mapStateToProps)(RootStack);
