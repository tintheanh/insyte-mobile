import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';

import UnAuthStack from './UnAuthStack/UnAuthStack';
import { AppState } from '../../redux/store';

function RootStack({ user }: any) {
	console.log(user)
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