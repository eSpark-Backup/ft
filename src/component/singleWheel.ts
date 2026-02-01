import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import Modal from 'react-native-modal'
import {
    WheelPicker,
    TimePicker,
    DatePicker
} from "react-native-wheel-picker-android";
import { Fonts } from '../utils/fonts';
import styles from './../Home/Timer/timer1Modal/countStyle';

const { height, width } = Dimensions.get('window');
const wheelPickerData = [
    '00 minute',
    '00:20 minute',
    '00:30 minute',
    '00:45 minute',
    '1 minute',
    '01:15 minute',
    '01:30 minute',
    '01:45 minute',
    '2 minutes',
    '02:15 minute',
    '02:30 minute',
    '3 minutes',
    '03:30 minute',
    '4 minutes',
    '04:30 minute',
    '5 minutes',
    '6 minutes',
    '7 minutes',
    '8 minutes',
    '9 minutes',
    '10 minutes',
    '11 minutes',
    '12 minutes',
    '13 minutes',
    '14 minutes',
    '15 minutes',
    '16 minutes',
    '17 minutes',
    '18 minutes',
    '19 minutes',
    '20 minutes',
    '21 minutes',
    '22 minutes',
    '23 minutes',
    '24 minutes',
    '25 minutes',
    '26 minutes',
    '27 minutes',
    '28 minutes',
    '29 minutes',
    '30 minutes',
    '31 minutes',
    '32 minutes',
    '33 minutes',
    '34 minutes',
    '35 minutes',
    '36 minutes',
    '37 minutes',
    '38 minutes',
    '39 minutes',
    '40 minutes',
    '41 minutes',
    '42 minutes',
    '43 minutes',
    '44 minutes',
    '45 minutes',
    '46 minutes',
    '47 minutes',
    '48 minutes',
    '49 minutes',
    '50 minutes',
    '51 minutes',
    '52 minutes',
    '53 minutes',
    '54 minutes',
    '55 minutes',
    '56 minutes',
    '57 minutes',
    '58 minutes',
    '59 minutes',
    '60 minutes',
    '61 minutes',
    '62 minutes',
    '63 minutes',
    '64 minutes',
    '65 minutes',
    '66 minutes',
    '67 minutes',
    '68 minutes',
    '69 minutes',
    '70 minutes',
    '71 minutes',
    '72 minutes',
    '73 minutes',
    '74 minutes',
    '75 minutes',
    '76 minutes',
    '77 minutes',
    '78 minutes',
    '79 minutes',
    '80 minutes',
    '81 minutes',
    '82 minutes',
    '83 minutes',
    '84 minutes',
    '85 minutes',
    '86 minutes',
    '87 minutes',
    '88 minutes',
    '89 minutes',
    '90 minutes',
    '91 minutes',
    '92 minutes',
    '93 minutes',
    '94 minutes',
    '95 minutes',
    '96 minutes',
    '97 minutes',
    '98 minutes',
    '99 minutes',
    '100 minutes',
    
];
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            inputText: '',
            editedItem: 0,
            flatListModal: false,
            minuts : '',
            selectedValue: '',
            value:0
        };
    }
    swipeClose = () => {
        this.setState({ flatListModal: !this.state.flatListModal },
            () => {this.props.modalValue(false)})
    }
    getValueSubmit = () => {
        if(this.state.minuts == ''){
            alert('Scroll and Select the Value')
        } 
        // else if ( this.state.minuts == ''){
        //     alert('Minute Not Selected Please Select the minutes')
        // } else if ( this.state.rest == ''){
        //     alert('Rest Time Not Selected Please Select the minutes')
        // }
        else{
            this.setState({ flatListModal: !this.state.flatListModal },
                () => {
                    this.props.modalValue(false),
                        this.props.minValue(this.state.minuts)
                }
                )
            setTimeout(() => {
                this.setState({ minuts: ''})
            }, 1000);
        }
    }
    modalChange = () => {
        this.setState({ flatListModal: !this.state.flatListModal })
    }
    onCondition = () => {
        setTimeout(() => {
            if (this.props.onModal == true && this.state.flatListModal == false) {
                this.modalChange()
            }

        }, 300);
    }
    render() {
        // console.log(this.state.value, 'onModal')
        // console.log(this.props.onModal, 'onModal')
        this.onCondition()
        return (
            <Modal
                animationIn="slideInLeft"
                animationOut="slideOutRight"
                swipeDirection="right"
                backdropColor='black'
                backdropOpacity={0.4}
                onSwipeComplete={this.swipeClose}
                // onBackdropPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
                isVisible={this.state.flatListModal}
                style={styles.modailContainer}>
                <View style={styles.modalInner}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: width * .45, height: height * .1 }}>
                        <Text style={{
                            fontSize: width * .02,
                            color: "white",
                            fontFamily: Fonts.VarelaRoundRegular,
                            // left: width * -.022
                        }}>
                            Minutes
                            </Text>
                        {/* <Text style={{
                            fontSize: width * .02,
                            color: "white",
                            fontFamily: Fonts.VarelaRoundRegular,

                        }}>
                            Rest
                            </Text> */}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', width: width * .5, height: height * .2 }}>
                        <WheelPicker
                            // minuts ={this.state.intItem}
                            data={wheelPickerData}
                            style={{
                                width: width * .15,
                                bottom: height * .05,
                            }}
                            onItemSelected={minuts  => { this.setState({value:minuts}),
                            minuts == 0 ? this.setState({ minuts: "00" }) :
                            minuts == 1 ? this.setState({ minuts: "00:20" }) :
                            minuts == 2 ? this.setState({ minuts: "00:30" }) :
                            minuts == 3 ? this.setState({ minuts: "00:45" }) :
                            minuts == 4 ? this.setState({ minuts: "1" }) :
                            minuts == 5 ? this.setState({ minuts: "01:15" }) :
                            minuts == 6 ? this.setState({ minuts: "01:30" }) :
                            minuts == 7 ? this.setState({ minuts: "01:45" }) :
                            minuts == 8 ? this.setState({ minuts: "2" }) :
                            minuts == 9 ? this.setState({ minuts: "02:15" }) :
                            minuts == 10 ? this.setState({ minuts: "02:30" }) :
                            minuts == 11 ? this.setState({ minuts: "3" }) :
                            minuts == 12 ? this.setState({ minuts: "03:30" }) :
                            minuts == 13 ? this.setState({ minuts: "4" }) :
                            minuts == 14 ? this.setState({ minuts: "04:30" }) :
                            minuts == 	15	? this.setState({ minuts: "5"}):
                            minuts == 	16	? this.setState({ minuts: "6"}):
                            minuts == 	17	? this.setState({ minuts: "7"}):
                            minuts == 	18	? this.setState({ minuts: "8"}):
                            minuts == 	19	? this.setState({ minuts: "9"}):
                            minuts == 	20	? this.setState({ minuts: "10"}):
                            minuts == 	21	? this.setState({ minuts: "11"}):
                            minuts == 	22	? this.setState({ minuts: "12"}):
                            minuts == 	23	? this.setState({ minuts: "13"}):
                            minuts == 	24	? this.setState({ minuts: "14"}):
                            minuts == 	25	? this.setState({ minuts: "15"}):
                            minuts == 	26	? this.setState({ minuts: "16"}):
                            minuts == 	27	? this.setState({ minuts: "17"}):
                            minuts == 	28	? this.setState({ minuts: "18"}):
                            minuts == 	29	? this.setState({ minuts: "19"}):
                            minuts == 	30	? this.setState({ minuts: "20"}):
                            minuts == 	31	? this.setState({ minuts: "21"}):
                            minuts == 	32	? this.setState({ minuts: "22"}):
                            minuts == 	33	? this.setState({ minuts: "23"}):
                            minuts == 	34	? this.setState({ minuts: "24"}):
                            minuts == 	35	? this.setState({ minuts: "25"}):
                            minuts == 	36	? this.setState({ minuts: "26"}):
                            minuts == 	37	? this.setState({ minuts: "27"}):
                            minuts == 	38	? this.setState({ minuts: "28"}):
                            minuts == 	39	? this.setState({ minuts: "29"}):
                            minuts == 	40	? this.setState({ minuts: "30"}):
                            minuts == 	41	? this.setState({ minuts: "31"}):
                            minuts == 	42	? this.setState({ minuts: "32"}):
                            minuts == 	43	? this.setState({ minuts: "33"}):
                            minuts == 	44	? this.setState({ minuts: "34"}):
                            minuts == 	45	? this.setState({ minuts: "35"}):
                            minuts == 	46	? this.setState({ minuts: "36"}):
                            minuts == 	47	? this.setState({ minuts: "37"}):
                            minuts == 	48	? this.setState({ minuts: "38"}):
                            minuts == 	49	? this.setState({ minuts: "39"}):
                            minuts == 	50	? this.setState({ minuts: "40"}):
                            minuts == 	51	? this.setState({ minuts: "41"}):
                            minuts == 	52	? this.setState({ minuts: "42"}):
                            minuts == 	53	? this.setState({ minuts: "43"}):
                            minuts == 	54	? this.setState({ minuts: "44"}):
                            minuts == 	55	? this.setState({ minuts: "45"}):
                            minuts == 	56	? this.setState({ minuts: "46"}):
                            minuts == 	57	? this.setState({ minuts: "47"}):
                            minuts == 	58	? this.setState({ minuts: "48"}):
                            minuts == 	59	? this.setState({ minuts: "49"}):
                            minuts == 	60	? this.setState({ minuts: "50"}):
                            minuts == 	61	? this.setState({ minuts: "51"}):
                            minuts == 	62	? this.setState({ minuts: "52"}):
                            minuts == 	63	? this.setState({ minuts: "53"}):
                            minuts == 	64	? this.setState({ minuts: "54"}):
                            minuts == 	65	? this.setState({ minuts: "55"}):
                            minuts == 	66	? this.setState({ minuts: "56"}):
                            minuts == 	67	? this.setState({ minuts: "57"}):
                            minuts == 	68	? this.setState({ minuts: "58"}):
                            minuts == 	69	? this.setState({ minuts: "59"}):
                            minuts == 	70	? this.setState({ minuts: "60"}):
                            minuts == 	71	? this.setState({ minuts: "61"}):
                            minuts == 	72	? this.setState({ minuts: "62"}):
                            minuts == 	73	? this.setState({ minuts: "63"}):
                            minuts == 	74	? this.setState({ minuts: "64"}):
                            minuts == 	75	? this.setState({ minuts: "65"}):
                            minuts == 	76	? this.setState({ minuts: "66"}):
                            minuts == 	77	? this.setState({ minuts: "67"}):
                            minuts == 	78	? this.setState({ minuts: "68"}):
                            minuts == 	79	? this.setState({ minuts: "69"}):
                            minuts == 	80	? this.setState({ minuts: "70"}):
                            minuts == 	81	? this.setState({ minuts: "71"}):
                            minuts == 	82	? this.setState({ minuts: "72"}):
                            minuts == 	83	? this.setState({ minuts: "73"}):
                            minuts == 	84	? this.setState({ minuts: "74"}):
                            minuts == 	85	? this.setState({ minuts: "75"}):
                            minuts == 	86	? this.setState({ minuts: "76"}):
                            minuts == 	87	? this.setState({ minuts: "77"}):
                            minuts == 	88	? this.setState({ minuts: "78"}):
                            minuts == 	89	? this.setState({ minuts: "79"}):
                            minuts == 	90	? this.setState({ minuts: "80"}):
                            minuts == 	91	? this.setState({ minuts: "81"}):
                            minuts == 	92	? this.setState({ minuts: "82"}):
                            minuts == 	93	? this.setState({ minuts: "83"}):
                            minuts == 	94	? this.setState({ minuts: "84"}):
                            minuts == 	95	? this.setState({ minuts: "85"}):
                            minuts == 	96	? this.setState({ minuts: "86"}):
                            minuts == 	97	? this.setState({ minuts: "87"}):
                            minuts == 	98	? this.setState({ minuts: "88"}):
                            minuts == 	99	? this.setState({ minuts: "89"}):
                            minuts == 	100	? this.setState({ minuts: "90"}):
                            minuts == 	101	? this.setState({ minuts: "91"}):
                            minuts == 	102	? this.setState({ minuts: "92"}):
                            minuts == 	103	? this.setState({ minuts: "93"}):
                            minuts == 	104	? this.setState({ minuts: "94"}):
                            minuts == 	105	? this.setState({ minuts: "95"}):
                            minuts == 	106	? this.setState({ minuts: "96"}):
                            minuts == 	107	? this.setState({ minuts: "97"}):
                            minuts == 	108	? this.setState({ minuts: "98"}):
                            minuts == 	109	? this.setState({ minuts: "99"}):
                            minuts == 	110	? this.setState({ minuts: "100"}):
                            this.setState({ minuts })
                            }}
                            indicatorColor='#5F4B2F'
                            selectedItemTextColor='white'
                            selectedItemTextSize={width * .02}
                            itemTextFontFamily={Fonts.VarelaRoundRegular}
                            selectedItemTextFontFamily={Fonts.VarelaRoundRegular}
                            itemTextColor='#00000000'
                            itemTextSize={width * .017}
                            indicatorWidth={width * .005}
                            isCyclic={true}
                        // isCyclic={true}
                        />
                        
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: width * .5, height: height * .1 }}>
                        <TouchableOpacity onPress={this.getValueSubmit}>
                            <View style={[styles.selectTimeBotton, { backgroundColor: '#FF6100' }]} >
                                <Text style={[styles.modalHeading, { color: 'white', fontSize: height * .025 }]}>Add Time</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
};


