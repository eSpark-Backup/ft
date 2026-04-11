import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({

    header13: {
        width: width * .45,
        height: height * .26,
        borderRadius: width * .005,
        borderWidth:height * .004,
        borderColor:'#5F4B2F',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    header1Inner: {
        width: width * .47,
        height: height * .12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
        fontSize: height * .06,
        color: "#FF6100",
        fontFamily: Fonts.VarelaRoundRegular,
    },
    contDownZero: {
        height: height * .11,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: width * .01,
        elevation: width * .005,
    },
    contDownZaroText: {
        fontSize: height * .13,
        color: "#FF6100",
        fontFamily: Fonts.VarelaRoundRegular,

    },

});