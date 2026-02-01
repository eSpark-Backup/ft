import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  LayoutAnimation,
  Pressable,
  FlatList,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import style from './style';
import styles from './countStyle';
import DoubleWheel from '../../../component/doubleWheel';
import SingleWheel from '../../../component/singleWheel';
import Plus from 'react-native-vector-icons/Feather';
import {Toolbar, Icon, IconToggle} from 'react-native-material-ui';
const {height, width} = Dimensions.get('window');
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
      time: 0,
      listData: [
        {label: 'Minutes', value: 'Minutes'},
        {label: 'Seconds', value: 'Seconds'},
        {label: 'Rest', value: 'Rest'},
      ],
      minutes: 2,
      rest: 0,
      viewHeight: false,
      editedItem: 0,
      intValue: 0,
      intItem: 0,
      passingMinutes: [],
      passingRest: [],
      passingMainTime: 0,
    };
  }

  changeLayoutMeter = () => {
    if(this.state.time == 0){
      alert('Select Minutes Or Go Back')
    }else{
    const time = this.state.time;
    time == '00:20'
      ? this.state.passingMinutes.push(20)
      : time == '00:30'
      ? this.state.passingMinutes.push(30)
      : time == '00:45'
      ? this.state.passingMinutes.push(45)
      : time == '1'
      ? this.state.passingMinutes.push(60)
      : time == '01:15'
      ? this.state.passingMinutes.push(75)
      : time == '01:30'
      ? this.state.passingMinutes.push(90)
      : time == '01:45'
      ? this.state.passingMinutes.push(105)
      : time == '2'
      ? this.state.passingMinutes.push(120)
      : time == '02:15'
      ? this.state.passingMinutes.push(135)
      : time == '02:30'
      ? this.state.passingMinutes.push(150)
      : time == '3'
      ? this.state.passingMinutes.push(180)
      : time == '03:30'
      ? this.state.passingMinutes.push(210)
      : time == '4'
      ? this.state.passingMinutes.push(240)
      : time == '04:30'
      ? this.state.passingMinutes.push(270)
      : time == '5'
      ? this.state.passingMinutes.push(300)
      : time == '6'
      ? this.state.passingMinutes.push(360)
      : time == '7'
      ? this.state.passingMinutes.push(420)
      : time == '8'
      ? this.state.passingMinutes.push(480)
      : time == '9'
      ? this.state.passingMinutes.push(540)
      : time == '10'
      ? this.state.passingMinutes.push(600)
      : time == '11'
      ? this.state.passingMinutes.push(660)
      : time == '12'
      ? this.state.passingMinutes.push(720)
      : time == '13'
      ? this.state.passingMinutes.push(780)
      : time == '14'
      ? this.state.passingMinutes.push(840)
      : time == '15'
      ? this.state.passingMinutes.push(900)
      : time == '16'
      ? this.state.passingMinutes.push(960)
      : time == '17'
      ? this.state.passingMinutes.push(1020)
      : time == '18'
      ? this.state.passingMinutes.push(1080)
      : time == '19'
      ? this.state.passingMinutes.push(1140)
      : time == '20'
      ? this.state.passingMinutes.push(1200)
      : time == '21'
      ? this.state.passingMinutes.push(1260)
      : time == '22'
      ? this.state.passingMinutes.push(1320)
      : time == '23'
      ? this.state.passingMinutes.push(1380)
      : time == '24'
      ? this.state.passingMinutes.push(1440)
      : time == '25'
      ? this.state.passingMinutes.push(1500)
      : time == '26'
      ? this.state.passingMinutes.push(1560)
      : time == '27'
      ? this.state.passingMinutes.push(1620)
      : time == '28'
      ? this.state.passingMinutes.push(1680)
      : time == '29'
      ? this.state.passingMinutes.push(1740)
      : time == '30'
      ? this.state.passingMinutes.push(1800)
      : time == '31'
      ? this.state.passingMinutes.push(1860)
      : time == '32'
      ? this.state.passingMinutes.push(1920)
      : time == '33'
      ? this.state.passingMinutes.push(1980)
      : time == '34'
      ? this.state.passingMinutes.push(2040)
      : time == '35'
      ? this.state.passingMinutes.push(2100)
      : time == '36'
      ? this.state.passingMinutes.push(2160)
      : time == '37'
      ? this.state.passingMinutes.push(2220)
      : time == '38'
      ? this.state.passingMinutes.push(2280)
      : time == '39'
      ? this.state.passingMinutes.push(2340)
      : time == '40'
      ? this.state.passingMinutes.push(2400)
      : time == '41'
      ? this.state.passingMinutes.push(2460)
      : time == '42'
      ? this.state.passingMinutes.push(2520)
      : time == '43'
      ? this.state.passingMinutes.push(2580)
      : time == '44'
      ? this.state.passingMinutes.push(2640)
      : time == '45'
      ? this.state.passingMinutes.push(2700)
      : time == '46'
      ? this.state.passingMinutes.push(2760)
      : time == '47'
      ? this.state.passingMinutes.push(2820)
      : time == '48'
      ? this.state.passingMinutes.push(2880)
      : time == '49'
      ? this.state.passingMinutes.push(2940)
      : time == '50'
      ? this.state.passingMinutes.push(3000)
      : time == '51'
      ? this.state.passingMinutes.push(3060)
      : time == '52'
      ? this.state.passingMinutes.push(3120)
      : time == '53'
      ? this.state.passingMinutes.push(3180)
      : time == '54'
      ? this.state.passingMinutes.push(3240)
      : time == '55'
      ? this.state.passingMinutes.push(3300)
      : time == '56'
      ? this.state.passingMinutes.push(3360)
      : time == '57'
      ? this.state.passingMinutes.push(3420)
      : time == '58'
      ? this.state.passingMinutes.push(3480)
      : time == '59'
      ? this.state.passingMinutes.push(3540)
      : time == '60'
      ? this.state.passingMinutes.push(3600)
      : time == '61'
      ? this.state.passingMinutes.push(3660)
      : time == '62'
      ? this.state.passingMinutes.push(3720)
      : time == '63'
      ? this.state.passingMinutes.push(3780)
      : time == '64'
      ? this.state.passingMinutes.push(3840)
      : time == '65'
      ? this.state.passingMinutes.push(3900)
      : time == '66'
      ? this.state.passingMinutes.push(3960)
      : time == '67'
      ? this.state.passingMinutes.push(4020)
      : time == '68'
      ? this.state.passingMinutes.push(4080)
      : time == '69'
      ? this.state.passingMinutes.push(4140)
      : time == '70'
      ? this.state.passingMinutes.push(4200)
      : time == '71'
      ? this.state.passingMinutes.push(4260)
      : time == '72'
      ? this.state.passingMinutes.push(4320)
      : time == '73'
      ? this.state.passingMinutes.push(4380)
      : time == '74'
      ? this.state.passingMinutes.push(4440)
      : time == '75'
      ? this.state.passingMinutes.push(4500)
      : time == '76'
      ? this.state.passingMinutes.push(4560)
      : time == '77'
      ? this.state.passingMinutes.push(4620)
      : time == '78'
      ? this.state.passingMinutes.push(4680)
      : time == '79'
      ? this.state.passingMinutes.push(4740)
      : time == '80'
      ? this.state.passingMinutes.push(4800)
      : time == '81'
      ? this.state.passingMinutes.push(4860)
      : time == '82'
      ? this.state.passingMinutes.push(4920)
      : time == '83'
      ? this.state.passingMinutes.push(4980)
      : time == '84'
      ? this.state.passingMinutes.push(5040)
      : time == '85'
      ? this.state.passingMinutes.push(5100)
      : time == '86'
      ? this.state.passingMinutes.push(5160)
      : time == '87'
      ? this.state.passingMinutes.push(5220)
      : time == '88'
      ? this.state.passingMinutes.push(5280)
      : time == '89'
      ? this.state.passingMinutes.push(5340)
      : time == '90'
      ? this.state.passingMinutes.push(5400)
      : time == '91'
      ? this.state.passingMinutes.push(5460)
      : time == '92'
      ? this.state.passingMinutes.push(5520)
      : time == '93'
      ? this.state.passingMinutes.push(5580)
      : time == '94'
      ? this.state.passingMinutes.push(5640)
      : time == '95'
      ? this.state.passingMinutes.push(5700)
      : time == '96'
      ? this.state.passingMinutes.push(5760)
      : time == '97'
      ? this.state.passingMinutes.push(5820)
      : time == '98'
      ? this.state.passingMinutes.push(5880)
      : time == '99'
      ? this.state.passingMinutes.push(5940)
      : time == '100'
      ? this.state.passingMinutes.push(5999)
      : this.state.passingMinutes.push(0);
    this.props.selectTime(false);
    this.props.modalOff(false);
    this.props.minutes(this.state.passingMinutes);
    setTimeout(() => {
      this.setState({passingMinutes: []});
    }, 200);
  }
    // this.props.passingRest(this.state.passingRest)
    // this.props.mainTime(this.state.time)
  };
  backTimeUp = () => {
    this.props.selectTime(false)
  }
  submitCondition = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});

    // this.setState({ data: newData })
  };

  addTimeNeeded = () => {
    let allData = this.state.data.slice();
    allData.push({minutes: this.state.minutes, rest: this.state.rest});
    this.setState({data: allData, viewHeight: true});
  };

  handleMinDouble = (child) => {
    this.setState({minutes: child});
    setTimeout(() => {
      this.addTimeNeeded();
    }, 200);
  };
  handleRest = (child) => {
    this.setState({rest: child});
  };
  handleMin = (child) => {
    this.setState({time: child});
  };
  handleModalDouble = (child) => {
    this.setState({isModalVisible: child});
  };
  handleModal = (child) => {
    this.setState({singleModal: child});
  };
  _renderMyList = ({item, index}) => (
    <View style={styles.flatContainer}>
      <View style={styles.flatInner}>
        <Pressable
          android_ripple={{
            color: 'white',
            borderless: true,
            radius: height * 0.1,
          }}
          onPress={(event) => this.removeRule(event, index)}
          style={styles.crossBotton}>
          <Text style={styles.crossText}>x</Text>
        </Pressable>
        <View style={styles.restContainer}>
          <View style={styles.timerBox}>
            <Text style={styles.timerText}>{time == '' ? 0 : time}</Text>
          </View>
          <Text style={styles.timeSelect}>Minutes</Text>
        </View>
        <View style={styles.restContainer}>
          <View style={styles.timerBox}>
            <Text style={styles.timerText}>
              {item.rest == '' ? 0 : item.rest}
            </Text>
          </View>
          <Text style={styles.timeSelect}>Rest</Text>
        </View>
      </View>
    </View>
  );

  removeRule = (e, index) => {
    e.preventDefault();
    const {data} = this.state;
    // delete data[index]
    data.splice(index, 1);
    console.log('removed', data.splice());
    this.setState({
      data: data,
    });
  };
  handleAddTime() {
    let allData = this.state.data.slice();
    allData.push({minutes: this.state.minutes, rest: this.state.rest});
    this.setState({data: allData, viewHeight: true});
  }
  render() {
    return (
      <View style={[style.timeSelectScreen, {backgroundColor: 'black'}]}>
        <View style={styles.headerContainer}>
          <View style={styles.bottonAndHeadingView}>
            <Pressable
              style={styles.backBotton}
              android_ripple={{
                color: 'white',
                borderless: true,
                radius: height * 0.1,
              }}
              onPress={this.backTimeUp}>
              <Icon name="navigate-before" size={height * 0.08} color="white" />
            </Pressable>
            <Text style={styles.countHeading}>{this.props?.name} Timer</Text>
          </View>
          <Text style={styles.limit}>Time Limit</Text>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.flatContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: !this.state.viewHeight ? height * 0.4 : height * 0.1,
              }}>
              <Pressable
                android_ripple={{
                  color: 'white',
                  borderless: true,
                  radius: height * 0.1,
                }}
                onPress={() =>
                  this.setState({singleModal: !this.state.singleModal})
                }>
                <View style={styles.timerBox}>
                  <Text style={styles.timerText}>{this.state.time}</Text>
                </View>
              </Pressable>

              <Text style={styles.timeSelect}>Minutes</Text>
            </View>
          </View>
        </View>
        <View style={styles.additionalTimerContainer}>
          <TouchableOpacity onPress={this.changeLayoutMeter}>
            <View style={[style.timeSelectBtn, {backgroundColor: '#FF6100'}]}>
              <Text
                style={[
                  style.modalHeading,
                  {color: 'white', fontSize: height * 0.04},
                ]}>
                SELECT TIMER
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <DoubleWheel
          onModal={this.state.isModalVisible}
          modalValue={this.handleModalDouble}
          minValue={this.handleMinDouble}
          restValue={this.handleRest}
        />
        <SingleWheel
          onModal={this.state.singleModal}
          modalValue={this.handleModal}
          minValue={this.handleMin}
        />
      </View>
    );
  }
}
