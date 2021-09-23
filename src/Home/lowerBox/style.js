import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
    // center
    lowerContainer: {
        width: width * 1,
        height: height * .28,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    lowerInner: {
        width: width * .957,
        height: height * .26,
        borderRadius: width * .004,
        borderWidth: height * .005,
        borderColor: '#5F4B2F'
    },
    // Modal
    modalContainer: {
        elevation: width * .005,
        borderRadius:width * .02,
        backgroundColor: 'black',
        maxHeight: height * .8,
        maxWidth: width * .8,
        left:width * .05,
        borderWidth:height * .005,
        borderColor:'#5F4B2F',
        top:height * .02
    },
    modalInner: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxInner:{
        flex: 1,
        backgroundColor: 'black',
        borderRadius:width * .02,
        elevation: width * .015,
        borderWidth:height * .005,
        borderColor:'#5F4B2F'
    },
    boxHeader:{
        width: width * .746,
        height: height * .1
    },
    boxHeaderInner:{
        flex: 1,
        // backgroundColor: 'white',
        // borderBottomWidth:height * .005,
        // borderColor:'#5F4B2F',
        justifyContent: 'space-between',
        paddingHorizontal: width * .02,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: width * .002,

    },
    modalHeading: {
        fontSize: width * .035,
        color: "#FF6100",
        fontFamily: Fonts.VarelaRoundRegular,
    },
});