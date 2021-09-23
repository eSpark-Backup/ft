import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    LayoutAnimation,
} from 'react-native';
import style from './style';
import Plus from 'react-native-vector-icons/Feather';
import { Fonts } from '../../../utils/fonts';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 80,
            meter: false,
            selectEmom: false,
            isModalVisible: false,
        }
    }
    changeLayoutEmom = () => {
        this.props.selectEmom(!this.state.selectEmom)
    };
    render() {
        return (
            <View style={[style.timeSelectScreen, { backgroundColor: "black" }]}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: height * .01,
                    alignItems: 'center',
                    width: width * .29,
                }}>
                    <Text style={style.countHeading} >
                        EMOM
                            </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: height * .05,
                    width: width * .47,
                }}>
                    <Text style={[style.limit]} >
                        Every minute on a minute for 10 minutes
                                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: height * .05,
                    // width: width * .29,
                }}>
                    <Text style={[style.timeSelect]} >
                        Every
                    </Text>
                    <View style={{}} >
                        <Text style={{
                            width: width * .08,
                            borderWidth: width * .001,
                            borderColor: '#E39E5E',
                            borderRadius: width * .02,
                            fontSize: height * .05,
                            color: "white",
                            padding: width * .02,
                            fontFamily: Fonts.VarelaRoundRegular,
                            textAlign: 'center'
                        }}>1</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: height * .02,
                    // backgroundColor:'red'
                    // width: width * .29,
                }}>
                    <Text style={[style.timeSelect]} >
                        for
                    </Text>
                    <View style={{}} >
                        <Text style={{
                            width: width * .08,
                            borderWidth: width * .001,
                            borderColor: '#E39E5E',
                            borderRadius: width * .02,
                            fontSize: height * .05,
                            color: "white",
                            padding: width * .02,
                            fontFamily: Fonts.VarelaRoundRegular,
                            textAlign: 'center'
                        }}>10</Text>
                    </View>
                </View>
                <View style={{
                    flex:1,
                    justifyContent: 'flex-end',
                }}>
                <TouchableOpacity onPress={this.changeLayoutEmom}>
                    <View style={[style.timeSelectBtn]} >
                        <Text style={[style.modalHeading, { color: 'white', fontSize: height * .04 }]}>SELECT TIMER</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>

        );
    }

};