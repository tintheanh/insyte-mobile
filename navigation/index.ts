export enum Navigators {
  AuthBottomTabNavigator = 'AuthBottomTabNavigator',
  UserDrawerNavigator = 'UserDrawerNavigator',
}

export enum Stacks {
  HomeStack = 'HomeStack',
  UserStack = 'UserStack',
  NotificationStack = 'NotificationStack',
  MapStack = 'MapStack',
  SettingStack = 'SettingStack',
}

export enum Screens {
  HomeScreen = 'HomeScreen',
  SignInScreen = 'SignInScreen',
  SignUpScreen = 'SignUpScreen',
  CreatePostScreen = 'CreatePostScreen',
  UserScreen = 'UserScreen',
  OtherUserScreen = 'OtherUserScreen',
  PostScreen = 'PostScreen',
  NotificationScreen = 'NotificationScreen',
  MapScreen = 'MapScreen',
  SettingScreen = 'SettingScreen',
  PrivacyScreen = 'PrivacyScreen',
  BlockListScreen = 'BlockListScreen',
  ForgotPasswordScreen = 'ForgotPasswordScreen',
  AccountScreen = 'AccountScreen',
  ChangeEmailScreen = 'ChangeEmailScreen',
  ChangePasswordScreen = 'ChangePasswordScreen',
}

// {
//   "AuthStack": {
//     "AuthBottomTabNavigator": {
//       "HomeStack": ["HomeScreen", "PostScreen", "OtherUserScreen"],
//       "UserDrawerNavigator": {
//         "UserStack": ["UserScreen", "PostScreen"]
//       },
//       "NotificationStack": ["PostScreen", "OtherUserScreen"]
//     },
//     "CreatePostScreen"
//   },
//   "UnauthStack": ["SignUpScreen", "SignInScreen", "ForgotPasswordScreen"]
// }
