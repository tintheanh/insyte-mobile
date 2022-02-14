import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Animated, View, Text, TouchableOpacity, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Layout } from '../../../constants';
import { EmailInput, PasswordInput, BigButton } from '../../../components';
import { alertErrorToast, authRepo, useKeyboard } from '../../../utils';
import { setUser } from '../../../redux/auth/actions';
import { User } from '../../../models';
import { Screens } from '../../index';
import styles from './styles';

const screenHeight = Layout.window.height;

function SignInScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	const moveUpValue = useMemo(() => new Animated.Value(0), []);

	const [keyboardHeight] = useKeyboard();

	const dispatch = useDispatch();

	const [email, setEmail] = useState<string>('');

	const [password, setPassword] = useState<string>('');

	const [loading, setLoading] = useState<boolean>(false);

	const onSetUser = (user: User) => dispatch(setUser(user));

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

	const goToSignUpScreen = useCallback(() => {
		navigation.navigate(Screens.SignUpScreen);
	}, []);

	//   const goToForgotPasswordScreen = useCallback(() => {
	//     navigation.navigate(Screens.ForgotPasswordScreen);
	//   }, []);

	const performSignIn = async () => {
		Keyboard.dismiss();
		setLoading(true);

		try {
			const userData = await authRepo.signIn(email, password);

			onSetUser(userData);
		} catch (err: unknown) {
			const { message } = err as Error;
			alertErrorToast('Sign in failed', message);
		}
		setLoading(false);
	};

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
				<Text style={styles.title}>sign in to Insyte</Text>
				<EmailInput value={email} setEmail={setEmail} />
				<PasswordInput value={password} setPassword={setPassword} />
				<BigButton label='Sign in' loading={loading} onPress={performSignIn} />
				<View style={styles.signUpView}>
					<Text style={styles.questionText}>First time here? </Text>
					<TouchableOpacity onPress={goToSignUpScreen}>
						<Text style={styles.navText}>Sign up</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.forgetView}>
					<Text style={styles.questionText}>Don't remember your password? </Text>
					<TouchableOpacity>
						<Text style={styles.navText}>Forgot password</Text>
					</TouchableOpacity>
				</View>
			</Animated.View>
		</View>
	);
}

// const mapStateToProps = (state: AppState) => ({
//   loading: state.auth.loadings.signInLoading,
//   error: state.auth.errors.signInError,
// });

SignInScreen.headerTitle = 'Sign In';

//export default connect(mapStateToProps)(SignInScreen);
export default SignInScreen;
