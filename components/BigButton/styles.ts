import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const styles = StyleSheet.create({
  btn: {
    width: '40%',
    height: 58,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3.65,
    marginTop: 38,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.insyte,
  },
  btnText: {
    color: Colors.darkColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
