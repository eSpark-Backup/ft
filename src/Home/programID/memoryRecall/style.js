import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../utils/fonts';

//Packages
const {width, height} = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
  // header

  header3Inner: {
    width: width * 0.2,
    height: height * 0.08,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  // dateLog: ,
  dateLogText: {
    fontSize: width * 0.01,
    fontFamily: Fonts.VarelaRoundRegular,
    color: 'white',
  },

  // Modal
  // modalContainer: {
  //     width: width * 1,
  //     height: height * 1,
  //     elevation: width * .005,
  //     borderRadius:width * .02,
  //     backgroundColor: 'black',
  //     right:width * .05,
  //     borderWidth:height * .005,
  //     borderColor:'#5F4B2F',
  //     // top:height * .02
  // },
  modalInner: {
    // flex: 1,
    width: width * 1,
    height: height * 1,
    right: width * 0.05,
    backgroundColor: 'black',
    borderRadius: width * 0.02,
    elevation: width * 0.015,
    borderWidth: height * 0.005,
    borderColor: '#5F4B2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxConatainer: {
    width: width * 0.95,
    height: height * 0.91,
    // justifyContent: "center",
  },
  boxInner: {
    flex: 1,
    backgroundColor: 'black',
    borderRadius: width * 0.02,
    elevation: width * 0.015,
    borderWidth: height * 0.005,
    borderColor: '#5F4B2F',
  },
  boxHeader: {
    // width: width * .746,
    height: height * 0.1,
    borderBottomWidth: width * 0.002,
    borderBottomColor: '#5F4B2F',
  },
  boxHeaderInner: {
    flex: 1,
    // backgroundColor: 'white',
    // borderBottomWidth:height * .005,
    // borderColor:'#5F4B2F',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.02,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: width * 0.002,
  },
  headerHeading: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.03,
    color: 'white',
    marginHorizontal: width * 0.05,
    // marginLeft: width * .09,
  },
  headerbotton: {
    height: height * 0.083,
    width: width * 0.05,
    borderRadius: width * 1,
    backgroundColor: 'white',
    elevation: width * 0.005,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: height * 0.06,
    color: '#FF6100',
    fontFamily: Fonts.VarelaRoundRegular,
  },
  bottonText: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.015,
    color: 'gray',
    // marginLeft: width * .09,
  },
  boxBody: {
    flexDirection: 'column',
    width: width * 0.47,
    height: height * 0.2,
    padding: width * 0.006,
    // justifyContent: "flex-end" ,
    // alignItems: "center"
  },
  boxBodyInner: {
    // flex: 4,
    padding: width * 0.002,
    paddingLeft: width * 0.04,
    paddingRight: width * 0.04,
    flexDirection: 'row',
    // backgroundColor:'red',
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
