import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({

    // center

    centerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#010101',
        // backgroundColor: 'red',
    },
    centerInner: {
        // height: height * .28, //.44
    },
    centerInnerText: {
        height: height * .28, //.44
        borderWidth: height * .005,
        backgroundColor: '#565656',
        borderColor: '#EDB0A6',
        marginLeft: width * .01,
        alignItems: 'center',
        borderRadius: width * .003,
        paddingBottom: height * .02,
    },
    sliderContainer: {
        width: width * .1,
        height: height * .08,
        backgroundColor: 'black',
        borderColor: '#FF6100',
        borderRadius: width * .003,
        borderWidth: width * .002,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderPrContainer: {
        width: width * .1,
        height: height * .08,
        backgroundColor: 'black',
        elevation: width * .01,
        borderColor: '#FF6100',
        borderRadius: width * .003,
        borderWidth: width * .002,
        justifyContent: 'center',
        alignItems: 'center',

    },
    noteText: {
        color: 'white',
        fontSize: height * .04,
        fontFamily: Fonts.BalsamiqSansRegular,
    },
    notePad: {
        fontSize: height * .05,
        color: "#FF6100",
        fontFamily: Fonts.VarelaRoundRegular,
        textAlign: 'center'
    },
    noteTextInput: {
        width: width * .2,
        height: height * .19, //.35
        color: 'white',
        justifyContent: 'flex-start',
        fontSize: height * .03,
        fontFamily: Fonts.BalsamiqSansRegular,
        marginBottom: height * .02
    },
    headerMenuBotton: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: width * .005,
        bottom: height * .01,
        borderColor: '#89CCFE',
        height: height * .06,
        width: height * .06,
        elevation: width * .003,
        backgroundColor: '#FF6100',
        borderRadius: width * .2,
    },
    dateLog: {
        width: width * 0.098,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: width * 0.003,
        elevation: width * 0.005,
        marginHorizontal: width * 0.001,
        borderWidth: width * 0.002,
        borderColor: '#EDB0A6',
    },
    dateLogText: {
        fontSize: width * 0.01,
        fontFamily: Fonts.VarelaRoundRegular,
        color: 'white',
    },

    // Tabata Style

    tabataContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    tabataInner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    progressWhite: {
        width: height * .255,
        height: height * .255,
        backgroundColor: 'white',
        borderRadius: width * .3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressBlack: {
        width: height * .23,
        height: height * .23,
        backgroundColor: 'black',
        borderRadius: width * .3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressAnimatedText: {
        fontSize: width * 0.025,
        color: '#fff',
        fontFamily: Fonts.VarelaRoundRegular,
        textAlign: 'center',
    },
    progressTitleText: {
        fontSize: height * 0.03,
        color: '#fff',
        fontFamily: Fonts.VarelaRoundRegular,
        marginBottom: width * .02,
        textAlign: 'center',

    },
    progressRoundsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: height * .02,
    },
    progressRoundsText: {
        fontSize: height * 0.05,
        color: '#fff',
        fontFamily: Fonts.VarelaRoundRegular,
        // marginBottom: width * .02,
    },


});