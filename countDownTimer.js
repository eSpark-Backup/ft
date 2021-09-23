import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Modal, TouchableHighlight, Animated } from 'react-native';
// import Data from './Data';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
// import CircleTimer from 'react-native-circle-timer';


const Sound = require('react-native-sound');
let song = new Sound('beep.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
        console.log('Error while initializing song instance', error);
    }
});
const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    return `${minutes}:${seconds}`
}
export default class List extends Component {
    constructor(props) {
        super(props);
        // this.initData = Data
        this.state = {
            // data: this.initData,
            isModalVisible: false,
            inputText: '',
            editedItem: 0,
            min: 10,
            rest: 20,
            min1: 15,
            res1: 25,
            duration: 10,
            uniqueValue: 1

        };
    }
    forceRemount = () => {
        this.setState(({ uniqueValue }) => ({
          uniqueValue: uniqueValue + 1
        }))
      }
      circleTime = () => {
        const { duration, min, rest, min1, rest1 } = this.state;

        this.setState({ duration: rest })
        this.forceRemount()

        clearInterval(this.timer1)
        clearInterval(this.timer3)
        this.timer2 = setTimeout(() => {
            setTimeout(() => {
                song.play(success => {
    
                    if (!success) {
                        console.log('song didnt play', error);
                    }
                });
            },1000 * this.state.duration - 3000);
        }, 100);

        if (duration == rest) {
        clearInterval(this.timer2)
            this.setState({ duration: min1 })
            this.forceRemount()
            song.play(success => {
                if (!success) {
                    console.log('song didnt play', error);
                }
            });
            this.timer3 = setTimeout(() => {
                setTimeout(() => {
                    
                    song.play(success => {
                        if (!success) {
                            console.log('song didnt play', error);
                        }
                    });
                },1000 * this.state.duration - 3000);
            }, 100);
            // this._timerRef.reload();
        }
    }

    render() {
        // const {time} = this.state.duration;
        this.timer1 = setTimeout(() => {
            song.play(success => {
                if (!success) {
                    console.log('song didnt play', error);
                }
            });
        },1000 * this.state.duration - 3000   );
        console.log(this.state.duration)

        const { duration,min,rest,min1,rest1 } = this.state;
        return (
            <View style={styles.container} key={this.state.uniqueValue}>
                <CountdownCircleTimer
                    isPlaying
                    // ref={refs => (this._timerRef = refs)}
                    useNativeDriver={true}
                    duration={duration}
                    colors={[
                        ['#004777', 0.4],
                        ['#F7B801', 0.4],
                        ['#A30000', 0.2],
                      ]}
                    onComplete={() => {
                        this.circleTime()
                        return false
                    }}
                >
                    {({ remainingTime, animatedColor }) => (
                        <Animated.Text
                            style={{ ...styles.remainingTime, color: animatedColor }}>
                            {remainingTime}
                        </Animated.Text>
                    )}
                </CountdownCircleTimer>
                {/* <CircleTimer
                        radius={100}
                        borderWidth={10}
                        seconds={60}
                        borderColor={'#F5F5F5'}
                        borderBackgroundColor={"#FF0000"}
                        onTimeElapsed={() => {
                            console.log('Timer Finished!');
                        }}
                        showSecond={true}

                    /> */}
            </View>
        )
    }
};
const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    contentContainer: {
        backgroundColor: 'white',
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
    },
    marginLeft: {
        marginLeft: 5,
    },
    menu: {
        width: 20,
        height: 2,
        backgroundColor: '#111',
        margin: 2,
        borderRadius: 3,
    },
    text: {
        marginVertical: 30,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    textInput: {
        width: '90%',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        borderColor: 'gray',
        borderBottomWidth: 2,
        fontSize: 16,
    },
    modalView: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableHighlight: {
        backgroundColor: 'white',
        marginVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
    }
})