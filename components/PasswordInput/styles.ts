import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const styles = StyleSheet.create({
  textBoxWrapper: {
    width: '100%',
    flexDirection: 'column',
  },
  textBox: {
    width: '100%',
    height: 40,
    paddingLeft: 42,
    color: Colors.normalText,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  icon: {
    position: 'relative',
    top: 30,
  },
});

export default styles;
