import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../utils/fonts';

//Packages
const {width, height} = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
  // center
  centerContainer: {
    width: width * 0.96,
    height: height * 0.15,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010101',
    borderColor: '#5F4B2F',
    borderWidth: width * 0.0025,
    borderRadius: width * 0.003,
    alignSelf: 'center',
  },
  bottomBotton: {
    width: width * 0.96,
    height: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottonStartOrMore: {
    width: width * 0.2,
    height: height * 0.08,
    backgroundColor: '#98cbca',
    borderWidth: width * 0.001,
    borderColor: '#009C99',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.005,
  },
  startOrMoreText: {
    fontSize: height * 0.025,
    color: 'black',
    // fontFamily: Fonts.VarelaRoundRegular,
  },
  hardwareBtn: {
    width: height * 0.13,
    height: height * 0.13,
    backgroundColor: '#A6A6A6',
    borderRadius: width * 0.1,
    borderWidth: width * 0.003,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: height * 0.001,
  },
});
