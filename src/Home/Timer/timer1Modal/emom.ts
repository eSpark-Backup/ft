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
import SingleWheel from '../../../component/emomWheel';
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
            passingMinutes: 0,
            passingRest: [],
            passingMainTime:0,
            time:0
        }
    }


    changeLayoutMeter = () => {
        if(this.state.time == 0){
            alert('Select Minutes Or Go Back')
        }else{
        const time = this.state.time;
        time == '1'
          ? this.setState({passingMinutes:60})
          : time == '2'
          ? this.setState({passingMinutes:120})
          : time == '3'
          ? this.setState({passingMinutes:180})
          : time == '4'
          ? this.setState({passingMinutes:240})
          : time == '5'
          ? this.setState({passingMinutes:300})
          : time == '6'
          ? this.setState({passingMinutes:360})
          : time == '7'
          ? this.setState({passingMinutes:420})
          : time == '8'
          ? this.setState({passingMinutes:480})
          : time == '9'
          ? this.setState({passingMinutes:540})
          : time == '10'
          ? this.setState({passingMinutes:600})
          : time == '11'
          ? this.setState({passingMinutes:660})
          : time == '12'
          ? this.setState({passingMinutes:720})
          : time == '13'
          ? this.setState({passingMinutes:780})
          : time == '14'
          ? this.setState({passingMinutes:840})
          : time == '15'
          ? this.setState({passingMinutes:900})
          : time == '16'
          ? this.setState({passingMinutes:960})
          : time == '17'
          ? this.setState({passingMinutes:1020})
          : time == '18'
          ? this.setState({passingMinutes:1080})
          : time == '19'
          ? this.setState({passingMinutes:1140})
          : time == '20'
          ? this.setState({passingMinutes:1200})
          : time == '21'
          ? this.setState({passingMinutes:1260})
          : time == '22'
          ? this.setState({passingMinutes:1320})
          : time == '23'
          ? this.setState({passingMinutes:1380})
          : time == '24'
          ? this.setState({passingMinutes:1440})
          : time == '25'
          ? this.setState({passingMinutes:1500})
          : time == '26'
          ? this.setState({passingMinutes:1560})
          : time == '27'
          ? this.setState({passingMinutes:1620})
          : time == '28'
          ? this.setState({passingMinutes:1680})
          : time == '29'
          ? this.setState({passingMinutes:1740})
          : time == '30'
          ? this.setState({passingMinutes:1800})
          : time == '31'
          ? this.setState({passingMinutes:1860})
          : time == '32'
          ? this.setState({passingMinutes:1920})
          : time == '33'
          ? this.setState({passingMinutes:1980})
          : time == '34'
          ? this.setState({passingMinutes:2040})
          : time == '35'
          ? this.setState({passingMinutes:2100})
          : time == '36'
          ? this.setState({passingMinutes:2160})
          : time == '37'
          ? this.setState({passingMinutes:2220})
          : time == '38'
          ? this.setState({passingMinutes:2280})
          : time == '39'
          ? this.setState({passingMinutes:2340})
          : time == '40'
          ? this.setState({passingMinutes:2400})
          : time == '41'
          ? this.setState({passingMinutes:2460})
          : time == '42'
          ? this.setState({passingMinutes:2520})
          : time == '43'
          ? this.setState({passingMinutes:2580})
          : time == '44'
          ? this.setState({passingMinutes:2640})
          : time == '45'
          ? this.setState({passingMinutes:2700})
          : time == '46'
          ? this.setState({passingMinutes:2760})
          : time == '47'
          ? this.setState({passingMinutes:2820})
          : time == '48'
          ? this.setState({passingMinutes:2880})
          : time == '49'
          ? this.setState({passingMinutes:2940})
          : time == '50'
          ? this.setState({passingMinutes:3000})
          : time == '51'
          ? this.setState({passingMinutes:3060})
          : time == '52'
          ? this.setState({passingMinutes:3120})
          : time == '53'
          ? this.setState({passingMinutes:3180})
          : time == '54'
          ? this.setState({passingMinutes:3240})
          : time == '55'
          ? this.setState({passingMinutes:3300})
          : time == '56'
          ? this.setState({passingMinutes:3360})
          : time == '57'
          ? this.setState({passingMinutes:3420})
          : time == '58'
          ? this.setState({passingMinutes:3480})
          : time == '59'
          ? this.setState({passingMinutes:3540})
          : time == '60'
          ? this.setState({passingMinutes:3600})
          : time == '61'
          ? this.setState({passingMinutes:3660})
          : time == '62'
          ? this.setState({passingMinutes:3720})
          : time == '63'
          ? this.setState({passingMinutes:3780})
          : time == '64'
          ? this.setState({passingMinutes:3840})
          : time == '65'
          ? this.setState({passingMinutes:3900})
          : time == '66'
          ? this.setState({passingMinutes:3960})
          : time == '67'
          ? this.setState({passingMinutes:4020})
          : time == '68'
          ? this.setState({passingMinutes:4080})
          : time == '69'
          ? this.setState({passingMinutes:4140})
          : time == '70'
          ? this.setState({passingMinutes:4200})
          : time == '71'
          ? this.setState({passingMinutes:4260})
          : time == '72'
          ? this.setState({passingMinutes:4320})
          : time == '73'
          ? this.setState({passingMinutes:4380})
          : time == '74'
          ? this.setState({passingMinutes:4440})
          : time == '75'
          ? this.setState({passingMinutes:4500})
          : time == '76'
          ? this.setState({passingMinutes:4560})
          : time == '77'
          ? this.setState({passingMinutes:4620})
          : time == '78'
          ? this.setState({passingMinutes:4680})
          : time == '79'
          ? this.setState({passingMinutes:4740})
          : time == '80'
          ? this.setState({passingMinutes:4800})
          : time == '81'
          ? this.setState({passingMinutes:4860})
          : time == '82'
          ? this.setState({passingMinutes:4920})
          : time == '83'
          ? this.setState({passingMinutes:4980})
          : time == '84'
          ? this.setState({passingMinutes:5040})
          : time == '85'
          ? this.setState({passingMinutes:5100})
          : time == '86'
          ? this.setState({passingMinutes:5160})
          : time == '87'
          ? this.setState({passingMinutes:5220})
          : time == '88'
          ? this.setState({passingMinutes:5280})
          : time == '89'
          ? this.setState({passingMinutes:5340})
          : time == '90'
          ? this.setState({passingMinutes:5400})
          : time == '91'
          ? this.setState({passingMinutes:5460})
          : time == '92'
          ? this.setState({passingMinutes:5520})
          : time == '93'
          ? this.setState({passingMinutes:5580})
          : time == '94'
          ? this.setState({passingMinutes:5640})
          : time == '95'
          ? this.setState({passingMinutes:5700})
          : time == '96'
          ? this.setState({passingMinutes:5760})
          : time == '97'
          ? this.setState({passingMinutes:5820})
          : time == '98'
          ? this.setState({passingMinutes:5880})
          : time == '99'
          ? this.setState({passingMinutes:5940})
          : time == '100'
          ? this.setState({passingMinutes:5999})
          : this.setState({passingMinutes:0});
          setTimeout(() => {
              this.props.selectTime(false);
              this.props.modalOff(false);
              this.props.emomMinute(this.state.passingMinutes);
            }, 50);
        setTimeout(() => {
          this.setState({passingMinutes: 0});
        }, 200);
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
        this.setState({ time: child })
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
                        <Text style={[styles.countHeading,{marginVertical:width*.03}]}>
                            EMOM Timer
                        </Text>
                    </View>
                    <Text style={[styles.limit,{marginTop:width*.015}]} >
                        Every minute on a minute for {this.state.time} minutes
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
                                    <Text style={styles.timerText}>{this.state.time}</Text>
                                </View>
                            </Pressable>

                            <Text style={styles.timeSelect} >
                                Minutes
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.additionalTimerContainer}>
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