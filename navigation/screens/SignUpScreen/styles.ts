import { StyleSheet } from 'react-native';

import { Colors } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  title: {
    color: Colors.normalText,
    fontWeight: 'bold',
    fontSize: 22,
  },
  textBoxWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  goBackText: {
    color: 'white',
  },
  signInText: {
    color: Colors.insyte,
    fontWeight: 'bold',
  },
});

export default styles;
