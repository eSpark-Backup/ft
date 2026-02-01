import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    LayoutAnimation,
    Pressable,
    FlatList, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import style from './style';
import styles from './countStyle';
import DoubleWheel from '../../../component/doubleWheel';
import SingleWheel from '../../../component/rouundModal';
import Plus from 'react-native-vector-icons/Feather';
import { Toolbar, Icon, IconToggle } from 'react-native-material-ui';
const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 80,
            meter: false,
            selectTime: false,
            isModalVisible: false,
            singleModal: false,
            data: [],
            values: 2,
            round: 0,
            listData: [
                { label: 'Minutes', value: 'Minutes' },
                { label: 'Seconds', value: 'Seconds' },
                { label: 'Rest', value: 'Rest' },
            ],
            minutes: 2,
            rest: 10,
            viewHeight: false,
            editedItem: 0,
            intValue: 0,
            intItem: 0,
            passingMinutes: [],
            passingRest: [],
            passingMainTime:0
        }
    }


    changeLayoutMeter = () => {
        if(this.state.round == 0){
            alert('Select Rounds Or Go Back')
        }else{
            this.props.selectTime(false)
            this.props.round(this.state.round)
            this.props.modalOff(false);
        }

    };
    backTimeUp = () => {
        this.props.selectTime(false)
    }
    // submitCondition = () => {
    //     this.setState({ isModalVisible: !this.state.isModalVisible });
    // };

    // addTimeNeeded = () => {
    //     let allData = this.state.data.slice()
    //     allData.push(({ minutes: this.state.minutes, rest: this.state.rest }))
    //     this.setState({ data: allData, viewHeight: true })
    // }

    // handleMinDouble = (child) => {
    //     this.setState({ minutes: child })
    //     setTimeout(() => {
    //         this.addTimeNeeded()
    //     }, 200);
    // }
    handleMin = (child) => {
        this.setState({ round: child })
    }
    // handleModalDouble = (child) => {
    //     this.setState({ isModalVisible: child })
    // }
    handleModal = (child) => {
        this.setState({ singleModal: child })
    }
    _renderMyList = ({ item, index }) => (
        <View style={styles.flatContainer}>
            <View style={styles.flatInner}>
                <Pressable
                    android_ripple={{
                        color: 'white',
                        borderless: true,
                        radius: height * .1,
                    }}
                    onPress={event => this.removeRule(event, index)}
                    style={styles.crossBotton}
                >
                    <Text style={styles.crossText}>
                        x
                    </Text>
                </Pressable>
                <View style={styles.restContainer}>
                    <View style={styles.timerBox}>
                        <Text style={styles.timerText}>{item.minutes == '' ? 0 : item.minutes }</Text>
                    </View>
                    <Text style={styles.timeSelect}>Minutes</Text>
                </View>
                <View style={styles.restContainer}>
                    <View style={styles.timerBox}>
                        <Text style={styles.timerText}>{item.rest == '' ? 0 : item.rest }</Text>
                    </View>
                    <Text style={styles.timeSelect}>Rest</Text>
                </View>
            </View>
        </View>
    );

    removeRule = (e, index) => {
        e.preventDefault();
        const { data } = this.state;
        // delete data[index]
        data.splice(index, 1);
        console.log("removed", data.splice());

        this.setState({
            data: data,
        });
    };
    handleAddTime() {
        let allData = this.state.data.slice()
        allData.push(({ minutes: this.state.minutes, rest: this.state.rest }))
        this.setState({ data: allData, viewHeight: true })
    }
    render() {
        // console.log(this.state.passingMinutes, 'minuts')
        // console.log(this.state.passingRest, 'rest')
        return (
            <View style={[style.timeSelectScreen, { backgroundColor: "black" }]}>
                <View style={styles.headerContainer}>
                    <View style={styles.bottonAndHeadingView}>
                        <Pressable style={styles.backBotton}
                            android_ripple={{
                                color: 'white',
                                borderless: true,
                                radius: height * .1,
                            }}
                            onPress={this.backTimeUp}
                        >
                            <Icon name='navigate-before' size={height * .08} color='white' />
                        </Pressable>
                        <Text style={styles.countHeading}>
                            For Time Timer
                        </Text>
                    </View>
                    <Text style={styles.limit} >
                            Rounds Limit
                    </Text>
                </View>
                <View style={styles.centerContainer}>
                    <View style={styles.flatContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: !this.state.viewHeight ? height * .4 : height * .1 }}>
                            <Pressable
                                android_ripple={{
                                    color: 'white',
                                    borderless: true,
                                    radius: height * .1,
                                }}
                                onPress={() => this.setState({ singleModal: !this.state.singleModal })}
                            >
                                <View style={styles.timerBox}>
                                    <Text style={styles.timerText}>{this.state.round}</Text>
                                </View>
                            </Pressable>

                            <Text style={styles.timeSelect} >
                                Rounds
                            </Text>
                        </View>
                    </View>
                    {/* <FlatList
                        style={{ marginTop: width * .01 }}
                        data={this.state.data}
                        renderItem={this._renderMyList}
                        // keyExtractor={(item, index) => item.toString()}

                    /> */}
                </View>
                <View style={styles.additionalTimerContainer}>
                    {/* <Pressable style={styles.additionalTimerBotton}
                        android_ripple={{
                            color: 'white',
                            radius: width * .1,
                        }}
                        onPress={this.submitCondition}
                    >
                        <Plus name='plus-circle' size={width * .03} color='white' />
                        <Text style={styles.addTime}>
                            Add Additional Timer
                        </Text>
                    </Pressable> */}
                    <TouchableOpacity onPress={this.changeLayoutMeter}>
                        <View style={[style.timeSelectBtn, { backgroundColor: '#FF6100' }]} >
                            <Text style={[style.modalHeading, { color: 'white', fontSize: height * .04 }]}>SELECT TIMER</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <DoubleWheel onModal={this.state.isModalVisible} modalValue={this.handleModalDouble} minValue={this.handleMinDouble} restValue={this.handleRest} /> */}
                <SingleWheel onModal={this.state.singleModal} modalValue={this.handleModal} minValue={this.handleMin} />

            </View>
        );
    }

};