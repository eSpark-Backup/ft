import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({

    // header
   
    header3Inner: {
        width: width * .2,
        height: height * .18,
        justifyContent: 'center',
        alignItems: 'center',

    },
    chooseProgramView: {
        width: width * .2,
        height: height * .18,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: width * .003,
        borderWidth:width * .002,
        borderColor:'#EDB0A6',
        
    },
    programHeading: {
        fontSize: width * .01,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
        borderRadius: width * .003,
        borderWidth:width * .002,
        borderColor:'#5F4B2F',
        padding:width * .002,
        paddingHorizontal:width * .004,
        textAlign:'center'
    },
    chooseProgram: {
        fontSize: width * .02,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
        borderRadius: width * .003,
        borderWidth:width * .002,
        borderColor:'#5F4B2F',
        padding:width * .002,
        paddingHorizontal:width * .004,
        textAlign:'center'
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
    boxConatainer:{
        width: width * .75,
        height: height * .71,
        // justifyContent: "center",
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
    modalHeading: {
        fontSize: height * .06,
        color: "#FF6100",
        fontFamily: Fonts.VarelaRoundRegular,
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