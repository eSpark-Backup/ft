import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../utils/fonts';

//Packages
const {width, height} = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
  // header
  container: {
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  header2: {
    width: height * 0.24,
    height: height * 0.24,
    backgroundColor: 'white',
    borderRadius: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barView: {
    width: height * 0.215,
    height: height * 0.215,
    elevation: width * 0.01,
    backgroundColor: 'black',
    borderRadius: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barText: {
    textAlign: 'center',
    color: '#EDB0A6',
    fontSize: height * 0.032,
    fontFamily: Fonts.VarelaRoundRegular,
  },
  header3Inner: {
    width: width * 0.1,
    height: height * 0.235,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  sliderPrContainer: {
    // borderColor: '#FF6100',
    height: height * 0.114,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.048,
  },
  noteText: {
    color: 'white',
    fontSize: height * 0.04,
    fontFamily: Fonts.BalsamiqSansRegular,
    // height:height *.15,
    // width:width * .085,
  },
  modalContainer: {
    maxHeight: height * 1,
    maxWidth: width * 0.4,
    left: width * 0.25,
    // top:height * .02
  },
  modalInner: {
    width: width * 0.37,
    height: height * 0.9,
    borderWidth: height * 0.005,
    borderColor: '#5F4B2F',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // center
  lowerContainer: {
    width: width * 1,
    height: height * 0.28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010101',
  },
  lowerInner: {
    width: width * 0.957,
    height: height * 0.26,
    borderRadius: width * 0.004,
    borderWidth: height * 0.005,
    borderColor: '#5F4B2F',
  },
  mainSettingListContainer: {
    borderColor: 'white',
    borderWidth: height * 0.002,
    borderRadius: width * 0.005,
    borderColor: '#EDB0A6',
    paddingHorizontal: width * 0.04,
    marginVertical: height * 0.03,
    alignItems: 'center',
  },
  settingListText: {
    color: 'white',
    fontSize: width * 0.018,
    fontFamily: Fonts.VarelaRoundRegular,
  },
  innerSettingListContainer: {
    borderWidth: height * 0.002,
    borderRadius: width * 0.005,
    borderColor: '#EDB0A6',
    width: width * 0.23,
    paddingHorizontal: width * 0.01,
    marginVertical: height * 0.02,
  },
  innerTextContainer: {
    flex: 1,
    height: height * 0.15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btListContainer: {
    borderBottomWidth: height * 0.002,
    borderColor: '#EDB0A6',
    width: width * 0.32,
    paddingHorizontal: width * 0.01,
    paddingVertical: height * 0.015,
  },
  connectedBtListContainer: {
    borderBottomWidth: height * 0.002,
    borderColor: '#EDB0A6',
    width: width * 0.32,
    paddingHorizontal: width * 0.01,
    paddingVertical: height * 0.015,
  },
  innerContainer: {
    width: width * 0.957,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countDownTimerContainer: {
    width: width * 0.28,
    height: height * 0.26,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: width * 0.005,
    borderWidth: height * 0.004,
    borderColor: '#5F4B2F',
  },
  BtModalContainer: {
    width: width * 0.35,
    height: height * 0.58,
    borderWidth: height * 0.005,
    borderRadius: width * 0.005,
    borderColor: '#5F4B2F',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  btModalInnerCotainer: {
    width: width * 0.35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: height * 0.02,
    borderBottomWidth: width * 0.001,
    borderBottomColor: 'grey',
  },
  noBtDevicesText: {
    flex: 1,
    marginVertical: height * 0.02,
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.012,
    fontFamily: Fonts.VarelaRoundRegular,
  },
  btScanBtnContainer: {
    borderColor: 'white',
    borderTopWidth: height * 0.002,
    borderColor: '#EDB0A6',
    width: width * 0.345,
    paddingVertical: height * 0.015,
  },
});
