import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({

    // header
    headerContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width * .45,
        height: height * .15,
        // backgroundColor:'red'
    },
    bottonAndHeadingView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * .5
    },
    backBotton: {
        position: 'absolute',
        left: width * 0.02

    },
    countHeading: {
        fontSize: height * .07,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
        textAlign: 'center',
    },
    limit: {
        fontSize: height * .04,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
        textAlign:'center',

    },
    centerContainer: {

        width: width * .45,
        height: height * .4,
        // backgroundColor: 'blue',
        justifyContent:'center'
    },

    additionalTimerContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width * .45,
        height: height * .1,
    },
    additionalTimerBotton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * .3,
        borderRadius: height * .1,
    },
    selectTimeBotton: {
        width: width * .2,
        height: height * .08,
        margin: height * .015,
        justifyContent: 'center',
        paddingHorizontal: width * .02,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: width * .05,
        // backgroundColor: '#e44f3bd5'
    },
    modalHeading: {
        fontSize: height * .04,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
    },
    addTime: {
        fontSize: height * .03,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
    },

    // Modal 
    modailContainer: {
        backgroundColor: 'black',
        maxHeight: height * .4,
        maxWidth: width * .5,
        left: width * .2,
        top: height * .2
    },
    modalInner: {
        borderRadius: width * .02,
        backgroundColor: 'black',
        height: height * .4,
        width: width * .5,
        borderWidth: height * .002,
        borderColor: '#EDB0A6',
        borderRadius: width * .02,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    inserTextinputView: {
        width: width * .1,
        height: height * .075,
        borderWidth: height * .002,
        borderRadius: width * .003,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E39E5E'
    },
    inserTextinput: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .02,
        color: "white",
        textAlign: 'center'
    },
    rnPicker: {
        fontSize: height * .03,
        fontFamily: Fonts.ComfortaaRegular,
        width: width * .2,
        height: height * .07,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#2627296f',
        borderRadius: width * .005,
        elevation: width * .01,
        borderWidth: height * .002,
        borderColor: '#E39E5E',
    },

    // render Flat list

    flatContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: height * .01,
    },
    absoluteBox: {
        width: width * .3,
        height: height * .35,
        borderWidth: width * .001,
        borderColor: 'white',
        position: 'absolute',
        borderRadius: width * .005,
    },
    flatInner: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: width * .01,
        borderWidth: width * .001,
        borderColor: 'white',
        borderRadius: width * .005,
        flexDirection: 'row',

    },
    crossBotton: {
        justifyContent: 'center',
        alignItems: 'center',
        right: width * .01,
        position:'absolute',
        top: height * -.005
    },
    timerBox: {
        borderWidth: width * .001,
        borderColor: '#E39E5E',
        borderRadius: width * .01,
        padding:width * .01,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    crossText: {
        color: 'white',
        fontSize: width * .025,
        fontFamily: Fonts.BalooChettan2,
        textAlign: 'center',
        
    },
    restContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * .005,
    },

    timerText: {
        fontSize: height * .05,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
    },
    timeSelect: {
        // width: width * .12,
        fontSize: height * .04,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
        textAlign: 'center',
        marginHorizontal:width * .01

    },

});