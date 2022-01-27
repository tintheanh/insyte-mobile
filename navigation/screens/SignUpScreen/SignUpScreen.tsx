import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { useKeyboard } from '../../../utils';
import { Layout } from '../../../constants';
import styles from './styles';
import { UsernameInput } from './components';
import { BigButton, EmailInput, PasswordInput } from '../../../components';

const screenHeight = Layout.window.height;

function SignUpScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	const moveUpValue = useMemo(() => new Animated.Value(0), []);

	const [keyboardHeight] = useKeyboard();

	const [email, setEmail] = useState<string>('');

	const [username, setUsername] = useState<string>('');

	const [password, setPassword] = useState<string>('');

	useEffect(() => {
		if (keyboardHeight) {
			move(-(keyboardHeight - screenHeight / 4.5));
		} else {
			move(0);
		}
	}, [keyboardHeight]);

	const move = useCallback(
		(value: number, duration = 100) => {
			Animated.timing(moveUpValue, {
				toValue: value,
				duration,
				useNativeDriver: true,
			}).start();
		},
		[moveUpValue]
	);

	const transformStyle = useMemo(
		() => ({
			transform: [
				{
					translateY: moveUpValue,
				},
			],
		}),
		[moveUpValue]
	);

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.textBoxWrapper, transformStyle]}>
				<Text style={styles.title}>sign up to Insyte</Text>
				<UsernameInput value={username} setUsername={setUsername} />
				<EmailInput value={email} setEmail={setEmail} />
				<PasswordInput value={password} setPassword={setPassword} />
				<BigButton label='Sign up' loading={false} onPress={() => console.log('signing up')} />
				<View style={styles.signUpView}>
					<Text style={styles.goBackText}>Go back to </Text>
					<TouchableOpacity onPress={navigation.goBack}>
						<Text style={styles.signInText}>Sign in</Text>
					</TouchableOpacity>
				</View>
			</Animated.View>
		</View>
	);
}

SignUpScreen.headerTitle = 'Sign Up';

export default SignUpScreen;
