import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  WheelPicker,
  TimePicker,
  DatePicker,
} from 'react-native-wheel-picker-android';
import {Fonts} from '../utils/fonts';
import styles from './../Home/Timer/timer1Modal/countStyle';

const {height, width} = Dimensions.get('window');
const wheelPickerData = [
  'Round 	0	',
  'Round 	1	',
  'Round 	2	',
  'Round 	3	',
  'Round 	4	',
  'Round 	5	',
  'Round 	6	',
  'Round 	7	',
  'Round 	8	',
  'Round 	9	',
  'Round 	10	',
  'Round 	11	',
  'Round 	12	',
  'Round 	13	',
  'Round 	14	',
  'Round 	15	',
  'Round 	16	',
  'Round 	17	',
  'Round 	18	',
  'Round 	19	',
  'Round 	20	',
  'Round 	21	',
  'Round 	22	',
  'Round 	23	',
  'Round 	24	',
  'Round 	25	',
  'Round 	26	',
  'Round 	27	',
  'Round 	28	',
  'Round 	29	',
  'Round 	30	',
  'Custom',
];
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      inputText: '',
      editedItem: 0,
      flatListModal: false,
      minuts: '',
      selectedValue: '',
      value: 0,
    };
  }
  swipeClose = () => {
    this.setState({flatListModal: !this.state.flatListModal}, () => {
      this.props.modalValue(false);
    });
  };
  getValueSubmit = () => {
    if (this.state.minuts == '') {
      alert('Scroll and Select the Value');
    } else {
      this.setState({flatListModal: !this.state.flatListModal}, () => {
        this.props.modalValue(false), this.props.minValue(this.state.minuts);
      });
      setTimeout(() => {
        this.setState({minuts: ''});
      }, 300);
    }
  };
  modalChange = () => {
    this.setState({flatListModal: !this.state.flatListModal});
  };
  onCondition = () => {
    setTimeout(() => {
      if (this.props.onModal == true && this.state.flatListModal == false) {
        this.modalChange();
      }
    }, 300);
  };
  render() {
    // console.log(this.state.value, 'onModal')
    // console.log(this.props.onModal, 'onModal')
    this.onCondition();
    return (
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        swipeDirection="right"
        backdropColor="black"
        backdropOpacity={0.4}
        onSwipeComplete={this.swipeClose}
        // onBackdropPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
        isVisible={this.state.flatListModal}
        style={styles.modailContainer}>
        <View style={styles.modalInner}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: width * 0.45,
              height: height * 0.1,
            }}>
            <Text
              style={{
                fontSize: width * 0.02,
                color: 'white',
                fontFamily: Fonts.VarelaRoundRegular,
              }}>
              Rounds
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: width * 0.5,
              height: height * 0.2,
            }}>
            <WheelPicker
              data={wheelPickerData}
              style={{
                width: width * 0.15,
                bottom: height * 0.05,
              }}
              onItemSelected={(minuts) => {
                this.setState({value: minuts}),
                  minuts == 0
                    ? this.setState({minuts: '0'})
                    : minuts == 1
                    ? this.setState({minuts: '1'})
                    : minuts == 2
                    ? this.setState({minuts: '2'})
                    : minuts == 3
                    ? this.setState({minuts: '3'})
                    : minuts == 4
                    ? this.setState({minuts: '4'})
                    : minuts == 5
                    ? this.setState({minuts: '5'})
                    : minuts == 6
                    ? this.setState({minuts: '6'})
                    : minuts == 7
                    ? this.setState({minuts: '7'})
                    : minuts == 8
                    ? this.setState({minuts: '8'})
                    : minuts == 9
                    ? this.setState({minuts: '9'})
                    : minuts == 10
                    ? this.setState({minuts: '10'})
                    : minuts == 11
                    ? this.setState({minuts: '11'})
                    : minuts == 12
                    ? this.setState({minuts: '12'})
                    : minuts == 13
                    ? this.setState({minuts: '13'})
                    : minuts == 14
                    ? this.setState({minuts: '14'})
                    : minuts == 15
                    ? this.setState({minuts: '15'})
                    : minuts == 16
                    ? this.setState({minuts: '16'})
                    : minuts == 17
                    ? this.setState({minuts: '17'})
                    : minuts == 18
                    ? this.setState({minuts: '18'})
                    : minuts == 19
                    ? this.setState({minuts: '19'})
                    : minuts == 20
                    ? this.setState({minuts: '20'})
                    : minuts == 21
                    ? this.setState({minuts: '21'})
                    : minuts == 22
                    ? this.setState({minuts: '22'})
                    : minuts == 23
                    ? this.setState({minuts: '23'})
                    : minuts == 24
                    ? this.setState({minuts: '24'})
                    : minuts == 25
                    ? this.setState({minuts: '25'})
                    : minuts == 26
                    ? this.setState({minuts: '26'})
                    : minuts == 27
                    ? this.setState({minuts: '27'})
                    : minuts == 28
                    ? this.setState({minuts: '28'})
                    : minuts == 29
                    ? this.setState({minuts: '29'})
                    : minuts == 30
                    ? this.setState({minuts: '30'})
                    : minuts == 31
                    ? this.setState({minuts: 'Custum'})
                    : this.setState({minuts});
              }}
              indicatorColor="#5F4B2F"
              selectedItemTextColor="white"
              selectedItemTextSize={width * 0.02}
              itemTextFontFamily={Fonts.VarelaRoundRegular}
              selectedItemTextFontFamily={Fonts.VarelaRoundRegular}
              itemTextColor="#00000000"
              itemTextSize={width * 0.017}
              indicatorWidth={width * 0.005}
              isCyclic={true}
              // isCyclic={true}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: width * 0.5,
              height: height * 0.1,
            }}>
            <TouchableOpacity onPress={this.getValueSubmit}>
              <View
                style={[styles.selectTimeBotton, {backgroundColor: '#FF6100'}]}>
                <Text
                  style={[
                    styles.modalHeading,
                    {color: 'white', fontSize: height * 0.025},
                  ]}>
                  Add Time
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
