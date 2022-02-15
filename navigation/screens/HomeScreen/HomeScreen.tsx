import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { User } from '../../../models';
import { setUser } from '../../../redux/auth/actions';
import { alertErrorToast, authRepo } from '../../../utils';

export default function HomeScreen() {
	const dispatch = useDispatch();

	const onSetUser = (user: User | null) => dispatch(setUser(user));

	const logOut = () =>
		authRepo
			.logOut()
			.then(() => onSetUser(null))
			.catch(() => alertErrorToast('Error', 'Logging out failed'));

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home</Text>
			<TouchableOpacity onPress={logOut}>
				<Text>Log out</Text>
			</TouchableOpacity>
		</View>
	);
}
