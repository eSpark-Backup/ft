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

import Plus from 'react-native-vector-icons/Feather';
import { Fonts } from '../../../utils/fonts';
import RNPickerSelect from "react-native-picker-select";
import { Toolbar, Icon, IconToggle } from 'react-native-material-ui';
import {
    WheelPicker,
    TimePicker,
    DatePicker
} from "react-native-wheel-picker-android";
const { height, width } = Dimensions.get('window');
import Modal from 'react-native-modal'

const wheelPickerData = [
    '00:20 minute',
    '00:30 minute',
    '00:45 minute',
    '01:00 minute',
    '01:15 minute',
    '01:30 minute',
    '01:45 minute',
    '02:00 minute',
    '02:15 minute',
    '02:30 minute',
    '02:45 minute',
];
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 80,
            meter: false,
            selectTime: false,
            isModalVisible: false,
            data: [],
            values: '2',
            time: '10',
            listData: [
                { label: 'Minutes', value: 'Minutes' },
                { label: 'Seconds', value: 'Seconds' },
                { label: 'Rest', value: 'Rest' },
            ],
            selectedValue: '',
            selectedItem: 0

        }
    }
    changeLayoutMeter = () => {
        this.props.selectTime(!this.state.selectTime)
    };
    _selectedValue(index, item) {
        this.setState({ selectedText: item.name });
    }
    valueChange(value) {
        this.setState({ values: value });
    }
    submitCondition = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });

        // const historyData = this.state.currentTemp;
        // const historyData2 = this.state.setTemp;
        // if (this.state.values == '' || this.state.time == '') {
        //     alert('Please Select Minutes or Second and Mention Time')
        // }
        // else if (this.state.time <= 0 || this.state.time > 10) {
        //     alert('Not Accepted Time Will Set Greater Then 0 And Equal and Less Than 10')
        // }
        // else {
        //     this.state.data.push({ values: this.state.values, time: this.state.time });
        // }
    };
    // addTimer = 
    _renderMyList = ({ item }) => (

        <View style={styles.flatContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <View style={styles.timerBox}>
                    <Text style={styles.timerText}>{item.values}</Text>
                </View>
                <Text style={styles.timeSelect}>Rest</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>

                <View style={styles.timerBox}>
                    <Text style={styles.timerText}>{item.time}</Text>
                </View>
                <Text style={styles.timeSelect}>Minutes</Text>
            </View>
        </View>
    );
    onItemSelected = selectedItem => {
        this.setState({ selectedItem });
    };
    // onDateSelected(selectedDate: Date) {
    //     this.setState({ selectedDate })
    //     if (this.props.onDateSelected) {
    //       this.props.onDateSelected(selectedDate)
    //     }
    //   }
    // }


    handleAddTime() {

        let allData = this.state.data.slice()

        allData.push(({ values: this.state.values, time: this.state.time }))


        this.setState({ data: allData })
    }

    render() {
        console.log(this.state.data)
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
                            onPress={this.changeLayoutMeter}
                        >
                            <Icon name='navigate-before' size={height * .08} color='white' />
                        </Pressable>
                        <Text style={styles.countHeading}>
                            Count-Up Timer
                        </Text>
                    </View>
                    <Text style={styles.limit} >
                        Time Limit
                    </Text>
                </View>
                <View style={styles.centerContainer}>
                    <View style={styles.flatContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <Pressable
                                android_ripple={{
                                    color: 'white',
                                    borderless: true,
                                    radius: height * .1,
                                }}
                                onPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
                            >
                                <View style={styles.timerBox}>

                                    <Text style={styles.timerText}>{this.state.time}</Text>
                                </View>
                            </Pressable>

                            <Text style={styles.timeSelect} >
                                Minutes
                            {/* {item.values} */}
                            </Text>
                        </View>
                    </View>
                    <FlatList
                        // horizontal={true}
                        style={{ marginTop: width * .01 }}
                        data={this.state.data}
                        renderItem={this._renderMyList}
                    />
                </View>
                <View style={styles.additionalTimerContainer}>
                    <Pressable style={styles.additionalTimerBotton}
                        android_ripple={{
                            color: 'white',
                            radius: width * .1,
                        }}
                        onPress={() => {
                            this.handleAddTime()
                        }}
                    >
                        <Plus name='plus-circle' size={width * .03} color='white' />
                        <Text style={styles.addTime}>
                            Add Additional Timer
                        </Text>
                    </Pressable>
                    <Modal
                        animationIn="slideInLeft"
                        animationOut="slideOutRight"
                        swipeDirection="right"
                        backdropColor='black'
                        backdropOpacity={0.4}
                        onSwipeComplete={() => this.setState({ isModalVisible: false })}
                        // onBackdropPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
                        isVisible={this.state.isModalVisible}
                        style={styles.modailContainer}>
                        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                            <View style={styles.modalInner}>
                                {/* <View style={styles.inserTextinputView}>
                                    <TextInput
                                        placeholder='Type Time'
                                        placeholderTextColor="white"
                                        keyboardType="number-pad"
                                        maxLength={3}
                                        style={styles.inserTextinput}
                                        onChangeText={e => this.setState({ time: e })}
                                    />
                                </View> */}
                                <Text style={{ color: 'white' }}>
                                    {this.state.selectedItem}
                                </Text>
                                <WheelPicker
                                    selectedItem={this.state.selectedItem}
                                    data={wheelPickerData}
                                    onItemSelected={selectedItem => {
                                        this.setState({ selectedItem });
                                    }}
                                    indicatorColor='white'
                                    selectedItemTextColor='white'
                                    selectedItemTextSize={width * .02}
                                // isCyclic={true}
                                />
                                {/* <RNPickerSelect
                                    placeholder={{
                                        label: 'Timer',
                                    }}
                                    onValueChange={value => this.valueChange(value)}
                                    style={{
                                        inputAndroid: styles.rnPicker
                                    }}
                                    items={}
                                    useNativeAndroidPickerStyle={false}
                                /> */}
                                <TouchableOpacity onPress={this.submitCondition}>
                                    <View style={[styles.selectTimeBotton, { backgroundColor: '#FF6100' }]} >
                                        <Text style={[style.modalHeading, { color: 'white', fontSize: height * .025 }]}>SELECT TIMER</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                    <TouchableOpacity onPress={this.changeLayoutMeter}>
                        <View style={[style.timeSelectBtn, { backgroundColor: '#FF6100' }]} >
                            <Text style={[style.modalHeading, { color: 'white', fontSize: height * .04 }]}>SELECT TIMER</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

};