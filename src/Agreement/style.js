import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
    innerAgreement: {
        marginTop: height * .015,
        marginBottom: height * .015,
        marginLeft: width * .01,
        marginRight: width * .01,
        height: height * .745,
        backgroundColor: 'black'
    },
    heading: {
        fontSize: height * .032,
        color: '#fff',
        alignSelf: 'center',
        margin: width * .01,
        fontWeight: 'bold'
    },
    agreeText: {
        color: 'white',
        fontSize: height * .020,
    },
    agreeBoldText: {
        color: 'white',
        fontSize: height * .020,
        fontWeight: "bold",
    },

});