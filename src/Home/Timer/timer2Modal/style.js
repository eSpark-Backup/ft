import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({

    // header
   
    header3Inner: {
        width: width * .27,
        height: height * .08,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chooseProgramView: {
        width: width * .25,
        height: height * .07,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: width * .003,
        elevation: width * .005,
        borderWidth:height * .006,
        borderColor:'#EDB0A6'
    },
    chooseProgram: {
        fontSize: height * .04,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular
    },
    

    // Modal
    modalContainer: {
        backgroundColor: 'black',
        maxHeight: height * 1,
        maxWidth: width * .6,
        left:width * .15,
        
    },
    modalInner: {
        // flex: 1,
        height:height * .95,
        width:width * .6,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'#5F4B2F',
        borderRadius:width * .02,
        borderWidth:height * .005,

    },
    boxConatainer:{
        justifyContent: "center",
        alignItems: "center",
        borderWidth:height * .005,
        borderColor:'#5F4B2F',
        borderRadius:width * .02,

    },
    boxInner:{
        flex: 1,
        backgroundColor: 'black',
        borderRadius:width * .015,
        elevation: width * .015,
        justifyContent: 'center',
        alignItems: "center"
    },
    boxHeaderInner:{
        width: width * .5,
        height: height * .07,
        margin: height * .015, 
        backgroundColor: "#555555",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width *.005,
        borderWidth:height * .005,
        borderColor:'#EDB0A6',
    },
    headerHeading:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .02,
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
    mainHeading:{
        fontSize: height * .08,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
    },
    backBotton:{
        position:'absolute',
        right: width * 0.02
        
    },
    modalHeading: {
        fontSize: height * .04,
        color: "white",
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
    header1Inner: {
        width: width * .44,
        height: height * .12,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    timeText: {
        fontSize: width * .035,
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
        flexDirection:'row'
    },
    contDownZaroText: {
        fontSize: width * .075,
        color: "#FF6100",
        fontFamily: Fonts.VarelaRoundRegular,

    },
        timeSelectScreen: {
        height: height * .71,
        flex: 1,
        borderWidth: height * .005,
        backgroundColor: '#565656',
        borderColor: '#5F4B2F',
        alignItems: 'center',
        borderRadius: width * .02,
        paddingBottom:height * .02,
    },
    timeSelect: {
        width: width * .12 ,
        fontSize: height * .04,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
        textAlign:'center',
        
    },
    addTime: {
        fontSize: height * .03,
        color: "white",
        fontFamily: Fonts.VarelaRoundRegular,
    },
    timeSelectBtn:{
        width: width * .3,
        height: height * .08,
        margin: height * .015, 
        justifyContent: 'center',
        paddingHorizontal: width * .02,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: width *.05,
        backgroundColor: '#FF6100'
    },
    
});