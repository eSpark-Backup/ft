/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
    TouchableOpacity,
    LayoutAnimation,
    Pressable
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import style from './style';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import Timer1Modal from './timer1Modal/index';
import Timer2Modal from './timer2Modal/index';
import { Icon } from 'react-native-material-ui';
import { Fonts } from '../../utils/fonts';

const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clearDataTimer: false,
            points: 80,
            meter: false,
            minutes: [],
            rest: [],
            time: 0,
        }
    }
    componentDidMount() {
        // console.log(this.props)
    }
    changeLayoutMeter = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState({ meter: !this.state.meter });
    }
    handleMainTime = (child) => {
        this.setState({ time: child })
    }
    handleMinutes = (child) => {
        this.setState({ minutes: child })
    }
    handleRest = (child) => {
        this.setState({ rest: child })
    }
    handleMinutesTotal = (child) => {
        this.props.minutesTotal(child)
    }
    handleTimeLap = (child) => {
        this.props.timeLap(child)
    }
    handleRoundLap = (child) => {
        this.props.roundLap(child)
        console.log(child, 'total time check')
    }
    handleTotalTimeArr = (child) => {
        // this.props.roundLap(child)
        this.props.totalTimeArr(child);
    }
    render() {
        if (this.props.clearData == true && this.state.clearDataTimer == false) {
            this.setState({
                meter: false,
                clearDataTimer: true,
            })
        }
        // console.log(this.state.rest, 'rest')
        // console.log(this.state.time, 'time')
        return (
            <View>
                <View style={style.header13}>
                    <View style={{
                        height: height * .12,
                    }}>
                        <Timer1Modal
                            passingRest={this.handleRest}
                            mainTime={this.handleMainTime}
                            minutesTotal={this.handleMinutesTotal}
                            playOnOrOff={this.props.playOnOrOff}
                            amrap={this.props.amrap}
                            actCondition={this.props.actCondition}
                            timeLap={this.handleTimeLap}
                            roundLap={this.handleRoundLap}
                            roundCondition={this.props.roundCondition}
                            forTimeRound={this.props.forTimeRound}
                            forTimeRoundCon={this.props.forTimeRoundCon}
                            clearData={this.props.clearData}
                            stop={this.props.stop}
                            activity={this.props.activity}
                            emomMinutes={this.props.emomMinutes}
                            totalTimeArr={this.handleTotalTimeArr}
                            tabataCon={this.props.tabataCon}
                            tabataRounds={this.props.tabataRounds}
                        />
                    </View>
                    <View style={{
                        height: this.state.meter || this.props.criteriaValue == '15.2' ? height * .12 : height * .0, overflow: 'hidden', marginBottom: height * .02
                    }}>
                        <Timer2Modal
                            playOnOrOff={this.props.playOnOrOff}
                            forTimeRoundCon={this.props.forTimeRoundCon}
                            stop={this.props.stop}
                            criteriaValue={this.props.criteriaValue}
                            clearData={this.props.clearData}

                        />
                    </View>
                    {this.state.meter || this.props.criteriaValue == '15.2' ? (
                        <Pressable
                            android_ripple={{
                                color: '#FF6100',
                                borderless: true
                            }}
                            style={{
                                position: 'absolute',
                                bottom: width * -.011,
                                left: width * .233
                            }}
                            onPress={this.changeLayoutMeter}
                        >
                            <Icon
                                name={'cancel'}
                                size={width * 0.022}
                                color="#FF6100"
                            />
                        </Pressable>
                    ) : (
                            <Pressable
                                android_ripple={{
                                    color: '#FF6100',
                                    borderless: true
                                }}
                                style={{
                                    position: 'absolute',
                                    bottom: width * .0,
                                    left: width * .22
                                }}
                                onPress={this.changeLayoutMeter}
                            >
                                <Icon
                                    name={'add'}
                                    size={width * 0.035}
                                    color="#FF6100"
                                />
                            </Pressable>
                        )
                    }
                </View>
            </View >
        );
    }

};



