import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

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
        width: height * .24,
        height: height * .24,
        backgroundColor: 'white',
        borderRadius: width * .1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    barView: {
        width: height * .215,
        height: height * .215,
        elevation: width * .01,
        backgroundColor: 'black',
        borderRadius: width * .1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    barText: {
        textAlign: 'center',
        color: '#EDB0A6',
        fontSize: height * .032,
        fontFamily: Fonts.VarelaRoundRegular,
    },
    header3Inner: {
        width: width * .1,
        height: height * .235,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red',

    },
    sliderPrContainer: {
        // borderColor: '#FF6100',
        height: height * .114,
        justifyContent: 'center',
        alignItems: 'center',
        width:width * .048

    },
    noteText: {
        color: 'white',
        fontSize: height * .04,
        fontFamily: Fonts.BalsamiqSansRegular,
        // height:height *.15,
        // width:width * .085,
    },
    modalContainer: {
        maxHeight: height * 1,
        maxWidth: width * .4,
        left: width * .25,
        // top:height * .02
    },
    modalInner: {
        width: width * .37,
        height: height * .9,
        borderWidth: height * .005,
        borderColor: '#5F4B2F',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // center
    lowerContainer: {
        width: width * 1,
        height: height * .28,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#010101',
    },
    lowerInner: {
        width: width * .957,
        height: height * .26,
        borderRadius: width * .004,
        borderWidth: height * .005,
        borderColor: '#5F4B2F'
    },
});