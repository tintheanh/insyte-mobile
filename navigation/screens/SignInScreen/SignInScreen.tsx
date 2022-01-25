import React from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function SignInScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>sign in Screen</Text>
			<TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
				<Text>Go</Text>
			</TouchableOpacity>
		</View>
	);
}

SignInScreen.headerTitle = 'Sign In';

export default SignInScreen;
