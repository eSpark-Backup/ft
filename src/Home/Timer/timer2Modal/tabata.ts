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
            selectTabata: false,
            isModalVisible: false,
        }
    }
    changeLayoutTabata = () => {
        this.props.selectTabata(!this.state.selectTabata)
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
                        TABATA
                            </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: height * .03,
                    width: width * .29,
                }}>
                    <Text style={[style.limit]} >
                        Set your Tabata Timer
                                    </Text>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: height * .03,
                        // width: width * .29,
                    }}>
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
                            }}>8</Text>
                        </View>
                        <Text style={[style.timeSelect]} >
                            Rounds
                                    </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: height * .01,
                        // width: width * .29,
                    }}>
                        <View style={{}} >
                            <Text style={{
                                borderWidth: width * .001,
                                borderColor: '#E39E5E',
                                borderRadius: width * .02,
                                fontSize: height * .05,
                                color: "white",
                                padding: width * .02,
                                fontFamily: Fonts.VarelaRoundRegular,
                                textAlign: 'center'
                            }}>00:20</Text>
                        </View>
                        <Text style={[style.timeSelect]} >
                            Work
                                    </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: height * .01,
                        // width: width * .29,
                    }}>
                        <View style={{}} >
                            <Text style={{
                                borderWidth: width * .001,
                                borderColor: '#E39E5E',
                                borderRadius: width * .02,
                                fontSize: height * .05,
                                color: "white",
                                padding: width * .02,
                                fontFamily: Fonts.VarelaRoundRegular,
                                textAlign: 'center'
                            }}>00:10</Text>
                        </View>
                        <Text style={[style.timeSelect]} >
                            Rest
                                    </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: height * .02,
                    width: width * .29,
                }}>
                    <Plus name='plus-circle' size={width * .03} style={{
                        color: 'white',
                        right: width * .02
                    }} />
                    <Text style={[style.addTime]}>
                        Add Sets(Optional)
                                    </Text>
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                }}></View>
                <TouchableOpacity onPress={this.changeLayoutTabata}>
                    <View style={[style.timeSelectBtn]} >
                        <Text style={[style.modalHeading, { color: 'black', fontSize: height * .04 }]}>SELECT TIMER</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

};