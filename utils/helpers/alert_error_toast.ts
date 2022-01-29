import Toast from 'react-native-toast-message';

export default function alertErrorToast(
  text1 = 'Error',
  text2 = 'Unknown error occurred',
  callBack?: () => void,
) {
  Toast.show({
    type: 'error',
    text1,
    text2,
    position: 'bottom',
    autoHide: true,
    onHide: callBack,
    // onPress: callBack,
  });
}
