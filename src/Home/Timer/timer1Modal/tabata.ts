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
import DoubleWheel from '../../../component/singleWheel';
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
            isModalRest: false,
            singleModal: false,
            data: [],
            values: 2,
            minutes: 0,
            listData: [
                { label: 'Minutes', value: 'Minutes' },
                { label: 'Seconds', value: 'Seconds' },
                { label: 'Rest', value: 'Rest' },
            ],
            minutes: 0,
            rest: 0,
            viewHeight: false,
            editedItem: 0,
            intValue: 0,
            intItem: 0,
            passingMinutes: [],
            passingRest: [],
            passingRound:0,
            round:0
        }
    }


    changeLayoutMeter = () => {
        
        if(this.state.round == 0){
            alert('Select Rounds Or Go Back')
        }else if(this.state.minutes == 0){
            alert('Select Work Time')
        }else if(this.state.rest == 0){
            alert('Select Rest Time')
          }else{
          const rest = this.state.rest;
            rest == '00:20'
              ? this.state.passingRest.push(20)
              : rest == '00:30'
              ? this.state.passingRest.push(30)
              : rest == '00:45'
              ? this.state.passingRest.push(45)
              : rest == '1'
              ? this.state.passingRest.push(60)
              : rest == '01:15'
              ? this.state.passingRest.push(75)
              : rest == '01:30'
              ? this.state.passingRest.push(90)
              : rest == '01:45'
              ? this.state.passingRest.push(105)
              : rest == '2'
              ? this.state.passingRest.push(120)
              : rest == '02:15'
              ? this.state.passingRest.push(135)
              : rest == '02:30'
              ? this.state.passingRest.push(150)
              : rest == '3'
              ? this.state.passingRest.push(180)
              : rest == '03:30'
              ? this.state.passingRest.push(210)
              : rest == '4'
              ? this.state.passingRest.push(240)
              : rest == '04:30'
              ? this.state.passingRest.push(270)
              : rest == '5'
              ? this.state.passingRest.push(300)
              : rest == '6'
              ? this.state.passingRest.push(360)
              : rest == '7'
              ? this.state.passingRest.push(420)
              : rest == '8'
              ? this.state.passingRest.push(480)
              : rest == '9'
              ? this.state.passingRest.push(540)
              : rest == '10'
              ? this.state.passingRest.push(600)
              : rest == '11'
              ? this.state.passingRest.push(660)
              : rest == '12'
              ? this.state.passingRest.push(720)
              : rest == '13'
              ? this.state.passingRest.push(780)
              : rest == '14'
              ? this.state.passingRest.push(840)
              : rest == '15'
              ? this.state.passingRest.push(900)
              : rest == '16'
              ? this.state.passingRest.push(960)
              : rest == '17'
              ? this.state.passingRest.push(1020)
              : rest == '18'
              ? this.state.passingRest.push(1080)
              : rest == '19'
              ? this.state.passingRest.push(1140)
              : rest == '20'
              ? this.state.passingRest.push(1200)
              : rest == '21'
              ? this.state.passingRest.push(1260)
              : rest == '22'
              ? this.state.passingRest.push(1320)
              : rest == '23'
              ? this.state.passingRest.push(1380)
              : rest == '24'
              ? this.state.passingRest.push(1440)
              : rest == '25'
              ? this.state.passingRest.push(1500)
              : rest == '26'
              ? this.state.passingRest.push(1560)
              : rest == '27'
              ? this.state.passingRest.push(1620)
              : rest == '28'
              ? this.state.passingRest.push(1680)
              : rest == '29'
              ? this.state.passingRest.push(1740)
              : rest == '30'
              ? this.state.passingRest.push(1800)
              : rest == '31'
              ? this.state.passingRest.push(1860)
              : rest == '32'
              ? this.state.passingRest.push(1920)
              : rest == '33'
              ? this.state.passingRest.push(1980)
              : rest == '34'
              ? this.state.passingRest.push(2040)
              : rest == '35'
              ? this.state.passingRest.push(2100)
              : rest == '36'
              ? this.state.passingRest.push(2160)
              : rest == '37'
              ? this.state.passingRest.push(2220)
              : rest == '38'
              ? this.state.passingRest.push(2280)
              : rest == '39'
              ? this.state.passingRest.push(2340)
              : rest == '40'
              ? this.state.passingRest.push(2400)
              : rest == '41'
              ? this.state.passingRest.push(2460)
              : rest == '42'
              ? this.state.passingRest.push(2520)
              : rest == '43'
              ? this.state.passingRest.push(2580)
              : rest == '44'
              ? this.state.passingRest.push(2640)
              : rest == '45'
              ? this.state.passingRest.push(2700)
              : rest == '46'
              ? this.state.passingRest.push(2760)
              : rest == '47'
              ? this.state.passingRest.push(2820)
              : rest == '48'
              ? this.state.passingRest.push(2880)
              : rest == '49'
              ? this.state.passingRest.push(2940)
              : rest == '50'
              ? this.state.passingRest.push(3000)
              : rest == '51'
              ? this.state.passingRest.push(3060)
              : rest == '52'
              ? this.state.passingRest.push(3120)
              : rest == '53'
              ? this.state.passingRest.push(3180)
              : rest == '54'
              ? this.state.passingRest.push(3240)
              : rest == '55'
              ? this.state.passingRest.push(3300)
              : rest == '56'
              ? this.state.passingRest.push(3360)
              : rest == '57'
              ? this.state.passingRest.push(3420)
              : rest == '58'
              ? this.state.passingRest.push(3480)
              : rest == '59'
              ? this.state.passingRest.push(3540)
              : rest == '60'
              ? this.state.passingRest.push(3600)
              : rest == '61'
              ? this.state.passingRest.push(3660)
              : rest == '62'
              ? this.state.passingRest.push(3720)
              : rest == '63'
              ? this.state.passingRest.push(3780)
              : rest == '64'
              ? this.state.passingRest.push(3840)
              : rest == '65'
              ? this.state.passingRest.push(3900)
              : rest == '66'
              ? this.state.passingRest.push(3960)
              : rest == '67'
              ? this.state.passingRest.push(4020)
              : rest == '68'
              ? this.state.passingRest.push(4080)
              : rest == '69'
              ? this.state.passingRest.push(4140)
              : rest == '70'
              ? this.state.passingRest.push(4200)
              : rest == '71'
              ? this.state.passingRest.push(4260)
              : rest == '72'
              ? this.state.passingRest.push(4320)
              : rest == '73'
              ? this.state.passingRest.push(4380)
              : rest == '74'
              ? this.state.passingRest.push(4440)
              : rest == '75'
              ? this.state.passingRest.push(4500)
              : rest == '76'
              ? this.state.passingRest.push(4560)
              : rest == '77'
              ? this.state.passingRest.push(4620)
              : rest == '78'
              ? this.state.passingRest.push(4680)
              : rest == '79'
              ? this.state.passingRest.push(4740)
              : rest == '80'
              ? this.state.passingRest.push(4800)
              : rest == '81'
              ? this.state.passingRest.push(4860)
              : rest == '82'
              ? this.state.passingRest.push(4920)
              : rest == '83'
              ? this.state.passingRest.push(4980)
              : rest == '84'
              ? this.state.passingRest.push(5040)
              : rest == '85'
              ? this.state.passingRest.push(5100)
              : rest == '86'
              ? this.state.passingRest.push(5160)
              : rest == '87'
              ? this.state.passingRest.push(5220)
              : rest == '88'
              ? this.state.passingRest.push(5280)
              : rest == '89'
              ? this.state.passingRest.push(5340)
              : rest == '90'
              ? this.state.passingRest.push(5400)
              : rest == '91'
              ? this.state.passingRest.push(5460)
              : rest == '92'
              ? this.state.passingRest.push(5520)
              : rest == '93'
              ? this.state.passingRest.push(5580)
              : rest == '94'
              ? this.state.passingRest.push(5640)
              : rest == '95'
              ? this.state.passingRest.push(5700)
              : rest == '96'
              ? this.state.passingRest.push(5760)
              : rest == '97'
              ? this.state.passingRest.push(5820)
              : rest == '98'
              ? this.state.passingRest.push(5880)
              : rest == '99'
              ? this.state.passingRest.push(5940)
              : rest == '100'
              ? this.state.passingRest.push(5999)
              : this.state.passingRest.push(0);
              
              const minutes = this.state.minutes;
          minutes == '00:20'
            ? this.state.passingMinutes.push(20)
            : minutes == '00:30'
            ? this.state.passingMinutes.push(30)
            : minutes == '00:45'
            ? this.state.passingMinutes.push(45)
            : minutes == '1'
            ? this.state.passingMinutes.push(60)
            : minutes == '01:15'
            ? this.state.passingMinutes.push(75)
            : minutes == '01:30'
            ? this.state.passingMinutes.push(90)
            : minutes == '01:45'
            ? this.state.passingMinutes.push(105)
            : minutes == '2'
            ? this.state.passingMinutes.push(120)
            : minutes == '02:15'
            ? this.state.passingMinutes.push(135)
            : minutes == '02:30'
            ? this.state.passingMinutes.push(150)
            : minutes == '3'
            ? this.state.passingMinutes.push(180)
            : minutes == '03:30'
            ? this.state.passingMinutes.push(210)
            : minutes == '4'
            ? this.state.passingMinutes.push(240)
            : minutes == '04:30'
            ? this.state.passingMinutes.push(270)
            : minutes == '5'
            ? this.state.passingMinutes.push(300)
            : minutes == '6'
            ? this.state.passingMinutes.push(360)
            : minutes == '7'
            ? this.state.passingMinutes.push(420)
            : minutes == '8'
            ? this.state.passingMinutes.push(480)
            : minutes == '9'
            ? this.state.passingMinutes.push(540)
            : minutes == '10'
            ? this.state.passingMinutes.push(600)
            : minutes == '11'
            ? this.state.passingMinutes.push(660)
            : minutes == '12'
            ? this.state.passingMinutes.push(720)
            : minutes == '13'
            ? this.state.passingMinutes.push(780)
            : minutes == '14'
            ? this.state.passingMinutes.push(840)
            : minutes == '15'
            ? this.state.passingMinutes.push(900)
            : minutes == '16'
            ? this.state.passingMinutes.push(960)
            : minutes == '17'
            ? this.state.passingMinutes.push(1020)
            : minutes == '18'
            ? this.state.passingMinutes.push(1080)
            : minutes == '19'
            ? this.state.passingMinutes.push(1140)
            : minutes == '20'
            ? this.state.passingMinutes.push(1200)
            : minutes == '21'
            ? this.state.passingMinutes.push(1260)
            : minutes == '22'
            ? this.state.passingMinutes.push(1320)
            : minutes == '23'
            ? this.state.passingMinutes.push(1380)
            : minutes == '24'
            ? this.state.passingMinutes.push(1440)
            : minutes == '25'
            ? this.state.passingMinutes.push(1500)
            : minutes == '26'
            ? this.state.passingMinutes.push(1560)
            : minutes == '27'
            ? this.state.passingMinutes.push(1620)
            : minutes == '28'
            ? this.state.passingMinutes.push(1680)
            : minutes == '29'
            ? this.state.passingMinutes.push(1740)
            : minutes == '30'
            ? this.state.passingMinutes.push(1800)
            : minutes == '31'
            ? this.state.passingMinutes.push(1860)
            : minutes == '32'
            ? this.state.passingMinutes.push(1920)
            : minutes == '33'
            ? this.state.passingMinutes.push(1980)
            : minutes == '34'
            ? this.state.passingMinutes.push(2040)
            : minutes == '35'
            ? this.state.passingMinutes.push(2100)
            : minutes == '36'
            ? this.state.passingMinutes.push(2160)
            : minutes == '37'
            ? this.state.passingMinutes.push(2220)
            : minutes == '38'
            ? this.state.passingMinutes.push(2280)
            : minutes == '39'
            ? this.state.passingMinutes.push(2340)
            : minutes == '40'
            ? this.state.passingMinutes.push(2400)
            : minutes == '41'
            ? this.state.passingMinutes.push(2460)
            : minutes == '42'
            ? this.state.passingMinutes.push(2520)
            : minutes == '43'
            ? this.state.passingMinutes.push(2580)
            : minutes == '44'
            ? this.state.passingMinutes.push(2640)
            : minutes == '45'
            ? this.state.passingMinutes.push(2700)
            : minutes == '46'
            ? this.state.passingMinutes.push(2760)
            : minutes == '47'
            ? this.state.passingMinutes.push(2820)
            : minutes == '48'
            ? this.state.passingMinutes.push(2880)
            : minutes == '49'
            ? this.state.passingMinutes.push(2940)
            : minutes == '50'
            ? this.state.passingMinutes.push(3000)
            : minutes == '51'
            ? this.state.passingMinutes.push(3060)
            : minutes == '52'
            ? this.state.passingMinutes.push(3120)
            : minutes == '53'
            ? this.state.passingMinutes.push(3180)
            : minutes == '54'
            ? this.state.passingMinutes.push(3240)
            : minutes == '55'
            ? this.state.passingMinutes.push(3300)
            : minutes == '56'
            ? this.state.passingMinutes.push(3360)
            : minutes == '57'
            ? this.state.passingMinutes.push(3420)
            : minutes == '58'
            ? this.state.passingMinutes.push(3480)
            : minutes == '59'
            ? this.state.passingMinutes.push(3540)
            : minutes == '60'
            ? this.state.passingMinutes.push(3600)
            : minutes == '61'
            ? this.state.passingMinutes.push(3660)
            : minutes == '62'
            ? this.state.passingMinutes.push(3720)
            : minutes == '63'
            ? this.state.passingMinutes.push(3780)
            : minutes == '64'
            ? this.state.passingMinutes.push(3840)
            : minutes == '65'
            ? this.state.passingMinutes.push(3900)
            : minutes == '66'
            ? this.state.passingMinutes.push(3960)
            : minutes == '67'
            ? this.state.passingMinutes.push(4020)
            : minutes == '68'
            ? this.state.passingMinutes.push(4080)
            : minutes == '69'
            ? this.state.passingMinutes.push(4140)
            : minutes == '70'
            ? this.state.passingMinutes.push(4200)
            : minutes == '71'
            ? this.state.passingMinutes.push(4260)
            : minutes == '72'
            ? this.state.passingMinutes.push(4320)
            : minutes == '73'
            ? this.state.passingMinutes.push(4380)
            : minutes == '74'
            ? this.state.passingMinutes.push(4440)
            : minutes == '75'
            ? this.state.passingMinutes.push(4500)
            : minutes == '76'
            ? this.state.passingMinutes.push(4560)
            : minutes == '77'
            ? this.state.passingMinutes.push(4620)
            : minutes == '78'
            ? this.state.passingMinutes.push(4680)
            : minutes == '79'
            ? this.state.passingMinutes.push(4740)
            : minutes == '80'
            ? this.state.passingMinutes.push(4800)
            : minutes == '81'
            ? this.state.passingMinutes.push(4860)
            : minutes == '82'
            ? this.state.passingMinutes.push(4920)
            : minutes == '83'
            ? this.state.passingMinutes.push(4980)
            : minutes == '84'
            ? this.state.passingMinutes.push(5040)
            : minutes == '85'
            ? this.state.passingMinutes.push(5100)
            : minutes == '86'
            ? this.state.passingMinutes.push(5160)
            : minutes == '87'
            ? this.state.passingMinutes.push(5220)
            : minutes == '88'
            ? this.state.passingMinutes.push(5280)
            : minutes == '89'
            ? this.state.passingMinutes.push(5340)
            : minutes == '90'
            ? this.state.passingMinutes.push(5400)
            : minutes == '91'
            ? this.state.passingMinutes.push(5460)
            : minutes == '92'
            ? this.state.passingMinutes.push(5520)
            : minutes == '93'
            ? this.state.passingMinutes.push(5580)
            : minutes == '94'
            ? this.state.passingMinutes.push(5640)
            : minutes == '95'
            ? this.state.passingMinutes.push(5700)
            : minutes == '96'
            ? this.state.passingMinutes.push(5760)
            : minutes == '97'
            ? this.state.passingMinutes.push(5820)
            : minutes == '98'
            ? this.state.passingMinutes.push(5880)
            : minutes == '99'
            ? this.state.passingMinutes.push(5940)
            : minutes == '100'
            ? this.state.passingMinutes.push(5999)
            : this.state.passingMinutes.push(0);

            this.props.selectTime(false)
            this.props.passingMinutes(this.state.passingMinutes)
            this.props.passingRest(this.state.passingRest)
            this.props.tabataRounds(this.state.round)
            this.props.modalOff(false);

          }
    };

    submitCondition = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    backTimeUp = () => {
        this.props.selectTime(false)
    }

    addTimeNeeded = () => {
        let allData = this.state.data.slice()
        allData.push(({ minutes: this.state.minutes, rest: this.state.rest }))
        this.setState({ data: allData, viewHeight: true })
    }

    handleWork = (child) => {
        this.setState({ minutes: child })
    }
    handleRest = (child) => {
        this.setState({ rest: child })
    }
    handleRound = (child) => {
        this.setState({ round: child })
    }
    handleModalDouble = (child) => {
        this.setState({ isModalVisible: child })
    }
    handleModal = (child) => {
        this.setState({ singleModal: child })
    }
    handleModalTriple = (child) => {
        this.setState({ isModalRest: child })
    }
    // _renderMyList = ({ item, index }) => (
    //     <View style={styles.flatContainer}>
    //         <View style={styles.flatInner}>
    //             <Pressable
    //                 android_ripple={{
    //                     color: 'white',
    //                     borderless: true,
    //                     radius: height * .1,
    //                 }}
    //                 onPress={event => this.removeRule(event, index)}
    //                 style={styles.crossBotton}
    //             >
    //                 <Text style={styles.crossText}>
    //                     x
    //                 </Text>
    //             </Pressable>
    //             <View style={styles.restContainer}>
    //                 <View style={styles.timerBox}>
    //                     <Text style={styles.timerText}>{item.minutes == '' ? 0 : item.minutes }</Text>
    //                 </View>
    //                 <Text style={styles.timeSelect}>Minutes</Text>
    //             </View>
    //             <View style={styles.restContainer}>
    //                 <View style={styles.timerBox}>
    //                     <Text style={styles.timerText}>{item.rest == '' ? 0 : item.rest }</Text>
    //                 </View>
    //                 <Text style={styles.timeSelect}>Rest</Text>
    //             </View>
    //         </View>
    //     </View>
    // );

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
    // handleAddTime() {
    //     let allData = this.state.data.slice()
    //     allData.push(({ minutes: this.state.minutes, rest: this.state.rest }))
    //     this.setState({ data: allData, viewHeight: true })
    // }
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
                            Tabata Timer
                        </Text>
                    </View>
                    <Text style={styles.limit} >
                    Set Your Tabata Timer
                    </Text>
                </View>
                <View style={styles.centerContainer}>
                    <View style={styles.flatContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',width:width * .15,  }}>
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
                                Round
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',marginVertical:height * .02,width:width * .15  }}>
                            <Pressable
                                android_ripple={{
                                    color: 'white',
                                    borderless: true,
                                    radius: height * .1,
                                }}
                                onPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
                            >
                                <View style={styles.timerBox}>
                                    <Text style={styles.timerText}>{this.state.minutes}</Text>
                                </View>
                            </Pressable>
                            <Text style={styles.timeSelect} >
                                Work
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',width:width * .15  }}>
                            <Pressable
                                android_ripple={{
                                    color: 'white',
                                    borderless: true,
                                    radius: height * .1,
                                }}
                                onPress={() => this.setState({ isModalRest: !this.state.isModalRest })}
                            >
                                <View style={styles.timerBox}>
                                    <Text style={styles.timerText}>{this.state.rest}</Text>
                                </View>
                            </Pressable>
                            <Text style={styles.timeSelect} >
                                Rest
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
                <DoubleWheel onModal={this.state.isModalVisible} modalValue={this.handleModalDouble} minValue={this.handleWork}  />
                <DoubleWheel onModal={this.state.isModalRest} modalValue={this.handleModalTriple} minValue={this.handleRest}  />
                <SingleWheel onModal={this.state.singleModal} modalValue={this.handleModal} minValue={this.handleRound} />

            </View>
        );
    }

};