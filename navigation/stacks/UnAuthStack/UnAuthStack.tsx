import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screens } from '../../index';
import { SignInScreen, SignUpScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export default function UnAuthStack() {
	return (
		<Stack.Navigator
			initialRouteName={Screens.SignInScreen}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name={Screens.SignInScreen}
				component={SignInScreen}
				options={{ headerTitle: SignInScreen.headerTitle }}
			/>
			<Stack.Screen
				name={Screens.SignUpScreen}
				component={SignUpScreen}
				options={{ headerTitle: SignUpScreen.headerTitle }}
			/>
		</Stack.Navigator>
	);
}
