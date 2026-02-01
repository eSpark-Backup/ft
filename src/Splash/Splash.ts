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
    UIManager,
    FlatList,
    Animated,
    Easing,
    Platform

} from 'react-native';
import style from './style';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'

// Component
const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cLogo: new Animated.Value(0),
            LogoAnime: new Animated.Value(0),

        };
        this.RotateValueHolder = new Animated.Value(0);

    }
    componentDidMount() {

        this.StartImageRotateFunction()
    }
    StartImageRotateFunction() {
        const { LogoAnime, LogoText } = this.state;

        setTimeout(() => {
            Animated.timing(this.RotateValueHolder, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
                easing: Easing.linear,
            }).start()
        }, 100);
        Animated.timing(
            this.state.cLogo,
            {
                toValue: 1,
                friction: 2,
                duration: 500,
                useNativeDriver: true
            }
        ).start()
        setTimeout(() => {
            Animated.parallel([
                Animated.spring(LogoAnime, {
                    toValue: 1,
                    tension: 2,
                    friction: 1,
                }).start(),
            ]);
        }, 2500);

    }

    render() {
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        const { animatedValue, cLogo } = this.state;

        // console.disableYellowBox = true

        return (
            <View style={{
                flex: 1,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'} />
                <Animated.View
                    style={{
                        opacity: this.state.LogoAnime,
                        bottom: this.state.LogoAnime.interpolate({
                            inputRange: [0, 1],
                            outputRange: [600, 0],
                            position: "absolute",

                        }),
                    }}>

                    <Image
                        source={require('../../image/FitnessText.png')}
                        style={{
                            width: width * .8,
                            height: width * .8,
                        }}
                    />
                </Animated.View>
                <Animated.View
                    style={{
                        transform: [{ scale: cLogo }],
                        position: "absolute",

                    }}
                >
                    <Animated.Image source={require('../../image/FitnessRound.png')}
                        style={{
                            width: width * .8,
                            height: width * .8,
                            right: width * -.08,
                            bottom: width * -.01,
                            transform: [{ rotate: RotateData }],
                        }}
                    />
                </Animated.View>
            </View >
        );
    }
};
