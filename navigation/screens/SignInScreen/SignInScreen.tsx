import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Animated, View, Text, TouchableOpacity, Keyboard } from "react-native";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { Layout } from "../../../constants";
import { EmailInput, PasswordInput, BigButton } from "../../../components";
import { Screens } from "../../index";
import { SignInScreenProps } from "./props";
import styles from "./styles";
// import { alertErrorToast } from '../../../utils';
import SignUpScreen from "../SignUpScreen/SignUpScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const screenHeight = Layout.window.height;

function SignInScreen({ loading, error }: SignInScreenProps) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const moveUpValue = useMemo(() => new Animated.Value(0), []);
  //   const dispatch = useDispatch();
  //   const [keyboardHeight] = useKeyboard();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //   const onClearSignInError = () => dispatch(clearSignInError());
  //   const onSignIn = (email: string, password: string) =>
  //     dispatch(signIn(email, password));

  //   useEffect(() => {
  //     if (error) {
  //       alertErrorToast('Sign in failed', error.message, onClearSignInError);
  //     }
  //   }, [error]);

  //   useEffect(() => {
  //     if (keyboardHeight) {
  //       move(-(keyboardHeight - screenHeight / 4.5));
  //     } else {
  //       move(0);
  //     }
  //   }, [keyboardHeight]);

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

  //   const goToSignUpScreen = useCallback(() => {
  //     navigation.navigate(Screens.SignUpScreen);
  //   }, []);

  //   const goToForgotPasswordScreen = useCallback(() => {
  //     navigation.navigate(Screens.ForgotPasswordScreen);
  //   }, []);

  //   const performSignIn = () => {
  //     Keyboard.dismiss();
  //     onSignIn(email, password);
  //   };

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
        {/* <BigButton label="Sign in" loading={loading} onPress={performSignIn} /> */}
        <View style={styles.signUpView}>
          <Text style={styles.questionText}>First time here? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.navText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgetView}>
          <Text style={styles.questionText}>
            Don't remember your password?{" "}
          </Text>
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

SignInScreen.headerTitle = "Sign In";

//export default connect(mapStateToProps)(SignInScreen);
export default SignInScreen;
