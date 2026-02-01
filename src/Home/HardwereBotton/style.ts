import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({

    // center

    centerContainer: {
        width: width * .96,
        height: height * .15,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#010101',
        borderColor: '#5F4B2F',
        borderWidth: width * .0025,
        borderRadius: width * .003,
        alignSelf:'center'
    },
    bottomBotton: {
        width: width * .96,
        height: height * .1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    bottonStartOrMore:{
        width: width * .2,
        height: height * .08,
        backgroundColor: '#98cbca',
        borderWidth: width * .001,
        borderColor: '#009C99',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:width * .005
    },
    startOrMoreText:{ 
        fontSize: width * .025, 
        color: 'black', 
        fontFamily: Fonts.VarelaRoundRegular 
    }

    

});