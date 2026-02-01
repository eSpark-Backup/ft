import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({

    // header
    header13: {
        width: width * .2,
        height: height * .18,
    },
    header3Inner: {
        width: width * .2,
        height: height * .07,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateLog: {
        width: width * .097,
        height: height * .07,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: width * .003,
        marginVertical:width * .003,
        borderWidth:width * .002,
        borderColor:'#EDB0A6'
    },
    dateLogText: {
        fontSize: width * .011,
        fontFamily: Fonts.VarelaRoundRegular,
        color: "white",
    },
    modalContainer: {
        elevation: width * .005,
        borderRadius:width * .02,
        backgroundColor: 'white',
        maxHeight: height * .8,
        maxWidth: width * .8,
        left:width * .05,
        top:height * .02
    },
    modalInner: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxConatainer:{
        width: width * .75,
        height: height * .7,
        // justifyContent: "center",
    },
    boxInner:{
        flex: 1,
        backgroundColor: 'white',
        borderRadius:width * .02,
        elevation: width * .015,
    },
    boxHeader:{
        width: width * .47,
        height: height * .1
    },
    boxHeaderInner:{
        flex: 1,
    
        justifyContent: 'space-around',
        // paddingHorizontal: width * .02,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: width * .002,

    },
    headerHeading:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .03,
        color: "white",
        marginHorizontal:width * .05
        // marginLeft: width * .09,

    },
    headerbotton:{
        height:height * .083,
        width:width * .05,
        borderRadius:width * 1,
        backgroundColor:'white',
        elevation:width * .005,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    bottonText:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .015,
        color: "gray",
        // marginLeft: width * .09,

    },
    boxBody:{
        flexDirection:"column",
        width: width * .47,
        height: height * .2,
        padding: width * .006,
        // justifyContent: "flex-end" ,
        // alignItems: "center"
       },
    boxBodyInner:{
        // flex: 4,
        padding: width * .002,
        paddingLeft: width * .04,
        paddingRight: width * .04,
        flexDirection: "row" ,
        // backgroundColor:'red',
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
});