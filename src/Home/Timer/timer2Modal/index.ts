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
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../../../utils/fonts';
import Plus from 'react-native-vector-icons/Feather';
import Close from 'react-native-vector-icons/Feather';
import { IconToggle, Icon, Button } from 'react-native-material-ui';
import { selectProgram } from '../../../Store/actions/program';
import { store } from '../../../Store';
// import SelectTime from './selectTime/index';
import CountUp from './countUp';
import CountDown from './countDown';
import EMOM from './emom';
import Tabata from './tabata';
import Clock from './clock';
// import { handleAmrapTime } from './fnOfGetValue';
import Modal from 'react-native-modal';
import RNBeep from 'react-native-a-beep';
import style from './style';

const Sound = require('react-native-sound');
let song = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error while initializing song instance', error);
  }
});
const { height, width } = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 80,
      meter: false,
      selectTime: false,
      selectTimeUp: false,
      selectTimeDown: false,
      selectEmom: false,
      selectTabata: false,
      selectClock: false,
      isModalVisible: false,
      timer: '00:00',
      counter: '00',
      miliseconds: [],
      rest: [],
      secArray: [],
      minArray: [],
      secArrayRest: [],
      minArrayRest: [],
      startDisabled: true,
      stopDisabled: false,
      minutes: [],
      second: '00',
      lapSecond: '00',
      lapMinutes: '00',
      roundSecond: '00',
      roundMinutes: '00',
      totalSecond: '00',
      totalMinute: '00',
      isShow: false,
      play: false,
      index: 0,
      indexRest: 0,
      timer1: 'Timer 1',
      totalTime: 0,
      lapTime: [],
      totalTimeArray: [],
      actCondition: false,
      roundCondition: false,
      forTimeRoundCon: false,
      clearData: false,
      activityCondition: false,
      roundLap: []
    };
  }
  componentDidMount() { }
  onButtonClear() {
    clearInterval(this.state.timer);
    this.setState({
      timer: null,
      counter: '00',
      miliseconds: '00',
    });
  }
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      secArrayRest: [],
      minArrayRest: [],
      secArray: [],
      minArray: [],
      indexRest: 0,
      index: 0,
    });
  };
  changeLayoutMeter = () => {
    if (this.state.selectTimeUp == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectTimeUp: !this.state.selectTimeUp,
      });
    }
  };
  changeLayoutMeterDown = () => {
    if (this.state.selectTimeDown == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectTimeDown: !this.state.selectTimeDown,
      });
    }
  };
  changeLayoutEmom = () => {
    if (this.state.selectEmom == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectEmom: !this.state.selectEmom,
      });
    }
  };
  changeLayoutTabata = () => {
    if (this.state.selectTabata == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectTabata: !this.state.selectTabata,
      });
    }
  };
  
  changeLayoutClock = () => {
    if (this.state.selectClock == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectClock: !this.state.selectClock,
      });
    }
  };
  handleTime = (child) => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    // if (child == true) {
    //     LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    //     this.setState({ selectTime: !this.state.selectTime, selectTimeUp: !this.state.selectTimeUp });
    // }
  };
  handleMainTime = (child) => {
    this.props.mainTime(child);
  };

  handleMinutes = (child) => {
    this.setState({ miliseconds: child }, () =>
      this.props.minutesTotal(
        this.state.miliseconds.reduce((a, b) => a + b, 0) +
        this.state.rest.reduce((a, b) => a + b, 0),
      ),
    );

    setTimeout(() => {
      this.state.miliseconds.map((item) => {
        // console.log(item,'item')
        // if (index === editedItem) {
        // item = this.stateitem
        item == 20
          ? (this.state.minArray.push('00'), this.state.secArray.push('20'))
          : item == 30
            ? (this.state.minArray.push('00'), this.state.secArray.push('30'))
            : item == 45
              ? (this.state.minArray.push('00'), this.state.secArray.push('45'))
              : item == 60
                ? (this.state.minArray.push('00'), this.state.secArray.push('60'))
                : item == 75
                  ? (this.state.minArray.push('01'), this.state.secArray.push('15'))
                  : item == 90
                    ? (this.state.minArray.push('01'), this.state.secArray.push('30'))
                    : item == 105
                      ? (this.state.minArray.push('01'), this.state.secArray.push('45'))
                      : item == 120
                        ? (this.state.minArray.push('02'), this.state.secArray.push('00'))
                        : item == 135
                          ? (this.state.minArray.push('02'), this.state.secArray.push('15'))
                          : item == 150
                            ? (this.state.minArray.push('02'), this.state.secArray.push('30'))
                            : item == 180
                              ? (this.state.minArray.push('03'), this.state.secArray.push('00'))
                              : item == 210
                                ? (this.state.minArray.push('03'), this.state.secArray.push('30'))
                                : item == 240
                                  ? (this.state.minArray.push('04'), this.state.secArray.push('00'))
                                  : item == 270
                                    ? (this.state.minArray.push('04'), this.state.secArray.push('30'))
                                    : item == 300
                                      ? (this.state.minArray.push('05'), this.state.secArray.push('00'))
                                      : item == 360
                                        ? (this.state.minArray.push('06'), this.state.secArray.push('00'))
                                        : item == 420
                                          ? (this.state.minArray.push('07'), this.state.secArray.push('00'))
                                          : item == 480
                                            ? (this.state.minArray.push('08'), this.state.secArray.push('00'))
                                            : item == 540
                                              ? (this.state.minArray.push('09'), this.state.secArray.push('00'))
                                              : item == 600
                                                ? (this.state.minArray.push('10'), this.state.secArray.push('00'))
                                                : item == 660
                                                  ? (this.state.minArray.push('11'), this.state.secArray.push('00'))
                                                  : item == 720
                                                    ? (this.state.minArray.push('12'), this.state.secArray.push('00'))
                                                    : item == 780
                                                      ? (this.state.minArray.push('13'), this.state.secArray.push('00'))
                                                      : item == 840
                                                        ? (this.state.minArray.push('14'), this.state.secArray.push('00'))
                                                        : item == 900
                                                          ? (this.state.minArray.push('15'), this.state.secArray.push('00'))
                                                          : item == 960
                                                            ? (this.state.minArray.push('16'), this.state.secArray.push('00'))
                                                            : item == 1020
                                                              ? (this.state.minArray.push('17'), this.state.secArray.push('00'))
                                                              : item == 1080
                                                                ? (this.state.minArray.push('18'), this.state.secArray.push('00'))
                                                                : item == 1140
                                                                  ? (this.state.minArray.push('19'), this.state.secArray.push('00'))
                                                                  : item == 1200
                                                                    ? (this.state.minArray.push('20'), this.state.secArray.push('00'))
                                                                    : item == 1260
                                                                      ? (this.state.minArray.push('21'), this.state.secArray.push('00'))
                                                                      : item == 1320
                                                                        ? (this.state.minArray.push('22'), this.state.secArray.push('00'))
                                                                        : item == 1380
                                                                          ? (this.state.minArray.push('23'), this.state.secArray.push('00'))
                                                                          : item == 1440
                                                                            ? (this.state.minArray.push('24'), this.state.secArray.push('00'))
                                                                            : item == 1500
                                                                              ? (this.state.minArray.push('25'), this.state.secArray.push('00'))
                                                                              : item == 1560
                                                                                ? (this.state.minArray.push('26'), this.state.secArray.push('00'))
                                                                                : item == 1620
                                                                                  ? (this.state.minArray.push('27'), this.state.secArray.push('00'))
                                                                                  : item == 1680
                                                                                    ? (this.state.minArray.push('28'), this.state.secArray.push('00'))
                                                                                    : item == 1740
                                                                                      ? (this.state.minArray.push('29'), this.state.secArray.push('00'))
                                                                                      : item == 1800
                                                                                        ? (this.state.minArray.push('30'), this.state.secArray.push('00'))
                                                                                        : item == 1860
                                                                                          ? (this.state.minArray.push('31'), this.state.secArray.push('00'))
                                                                                          : item == 1920
                                                                                            ? (this.state.minArray.push('32'), this.state.secArray.push('00'))
                                                                                            : item == 1980
                                                                                              ? (this.state.minArray.push('33'), this.state.secArray.push('00'))
                                                                                              : item == 2040
                                                                                                ? (this.state.minArray.push('34'), this.state.secArray.push('00'))
                                                                                                : item == 2100
                                                                                                  ? (this.state.minArray.push('35'), this.state.secArray.push('00'))
                                                                                                  : item == 2160
                                                                                                    ? (this.state.minArray.push('36'), this.state.secArray.push('00'))
                                                                                                    : item == 2220
                                                                                                      ? (this.state.minArray.push('37'), this.state.secArray.push('00'))
                                                                                                      : item == 2280
                                                                                                        ? (this.state.minArray.push('38'), this.state.secArray.push('00'))
                                                                                                        : item == 2340
                                                                                                          ? (this.state.minArray.push('39'), this.state.secArray.push('00'))
                                                                                                          : item == 2400
                                                                                                            ? (this.state.minArray.push('40'), this.state.secArray.push('00'))
                                                                                                            : item == 2460
                                                                                                              ? (this.state.minArray.push('41'), this.state.secArray.push('00'))
                                                                                                              : item == 2520
                                                                                                                ? (this.state.minArray.push('42'), this.state.secArray.push('00'))
                                                                                                                : item == 2580
                                                                                                                  ? (this.state.minArray.push('43'), this.state.secArray.push('00'))
                                                                                                                  : item == 2640
                                                                                                                    ? (this.state.minArray.push('44'), this.state.secArray.push('00'))
                                                                                                                    : item == 2700
                                                                                                                      ? (this.state.minArray.push('45'), this.state.secArray.push('00'))
                                                                                                                      : item == 2760
                                                                                                                        ? (this.state.minArray.push('46'), this.state.secArray.push('00'))
                                                                                                                        : item == 2820
                                                                                                                          ? (this.state.minArray.push('47'), this.state.secArray.push('00'))
                                                                                                                          : item == 2880
                                                                                                                            ? (this.state.minArray.push('48'), this.state.secArray.push('00'))
                                                                                                                            : item == 2940
                                                                                                                              ? (this.state.minArray.push('49'), this.state.secArray.push('00'))
                                                                                                                              : item == 3000
                                                                                                                                ? (this.state.minArray.push('50'), this.state.secArray.push('00'))
                                                                                                                                : item == 3060
                                                                                                                                  ? (this.state.minArray.push('51'), this.state.secArray.push('00'))
                                                                                                                                  : item == 3120
                                                                                                                                    ? (this.state.minArray.push('52'), this.state.secArray.push('00'))
                                                                                                                                    : item == 3180
                                                                                                                                      ? (this.state.minArray.push('53'), this.state.secArray.push('00'))
                                                                                                                                      : item == 3240
                                                                                                                                        ? (this.state.minArray.push('54'), this.state.secArray.push('00'))
                                                                                                                                        : item == 3300
                                                                                                                                          ? (this.state.minArray.push('55'), this.state.secArray.push('00'))
                                                                                                                                          : item == 3360
                                                                                                                                            ? (this.state.minArray.push('56'), this.state.secArray.push('00'))
                                                                                                                                            : item == 3420
                                                                                                                                              ? (this.state.minArray.push('57'), this.state.secArray.push('00'))
                                                                                                                                              : item == 3480
                                                                                                                                                ? (this.state.minArray.push('58'), this.state.secArray.push('00'))
                                                                                                                                                : item == 3540
                                                                                                                                                  ? (this.state.minArray.push('59'), this.state.secArray.push('00'))
                                                                                                                                                  : item == 3600
                                                                                                                                                    ? (this.state.minArray.push('60'), this.state.secArray.push('00'))
                                                                                                                                                    : item == 3660
                                                                                                                                                      ? (this.state.minArray.push('61'), this.state.secArray.push('00'))
                                                                                                                                                      : item == 3720
                                                                                                                                                        ? (this.state.minArray.push('62'), this.state.secArray.push('00'))
                                                                                                                                                        : item == 3780
                                                                                                                                                          ? (this.state.minArray.push('63'), this.state.secArray.push('00'))
                                                                                                                                                          : item == 3840
                                                                                                                                                            ? (this.state.minArray.push('64'), this.state.secArray.push('00'))
                                                                                                                                                            : item == 3900
                                                                                                                                                              ? (this.state.minArray.push('65'), this.state.secArray.push('00'))
                                                                                                                                                              : item == 3960
                                                                                                                                                                ? (this.state.minArray.push('66'), this.state.secArray.push('00'))
                                                                                                                                                                : item == 4020
                                                                                                                                                                  ? (this.state.minArray.push('67'), this.state.secArray.push('00'))
                                                                                                                                                                  : item == 4080
                                                                                                                                                                    ? (this.state.minArray.push('68'), this.state.secArray.push('00'))
                                                                                                                                                                    : item == 4140
                                                                                                                                                                      ? (this.state.minArray.push('69'), this.state.secArray.push('00'))
                                                                                                                                                                      : item == 4200
                                                                                                                                                                        ? (this.state.minArray.push('70'), this.state.secArray.push('00'))
                                                                                                                                                                        : item == 4260
                                                                                                                                                                          ? (this.state.minArray.push('71'), this.state.secArray.push('00'))
                                                                                                                                                                          : item == 4320
                                                                                                                                                                            ? (this.state.minArray.push('72'), this.state.secArray.push('00'))
                                                                                                                                                                            : item == 4380
                                                                                                                                                                              ? (this.state.minArray.push('73'), this.state.secArray.push('00'))
                                                                                                                                                                              : item == 4440
                                                                                                                                                                                ? (this.state.minArray.push('74'), this.state.secArray.push('00'))
                                                                                                                                                                                : item == 4500
                                                                                                                                                                                  ? (this.state.minArray.push('75'), this.state.secArray.push('00'))
                                                                                                                                                                                  : item == 4560
                                                                                                                                                                                    ? (this.state.minArray.push('76'), this.state.secArray.push('00'))
                                                                                                                                                                                    : item == 4620
                                                                                                                                                                                      ? (this.state.minArray.push('77'), this.state.secArray.push('00'))
                                                                                                                                                                                      : item == 4680
                                                                                                                                                                                        ? (this.state.minArray.push('78'), this.state.secArray.push('00'))
                                                                                                                                                                                        : item == 4740
                                                                                                                                                                                          ? (this.state.minArray.push('79'), this.state.secArray.push('00'))
                                                                                                                                                                                          : item == 4800
                                                                                                                                                                                            ? (this.state.minArray.push('80'), this.state.secArray.push('00'))
                                                                                                                                                                                            : item == 4860
                                                                                                                                                                                              ? (this.state.minArray.push('81'), this.state.secArray.push('00'))
                                                                                                                                                                                              : item == 4920
                                                                                                                                                                                                ? (this.state.minArray.push('82'), this.state.secArray.push('00'))
                                                                                                                                                                                                : item == 4980
                                                                                                                                                                                                  ? (this.state.minArray.push('83'), this.state.secArray.push('00'))
                                                                                                                                                                                                  : item == 5040
                                                                                                                                                                                                    ? (this.state.minArray.push('84'), this.state.secArray.push('00'))
                                                                                                                                                                                                    : item == 5100
                                                                                                                                                                                                      ? (this.state.minArray.push('85'), this.state.secArray.push('00'))
                                                                                                                                                                                                      : item == 5160
                                                                                                                                                                                                        ? (this.state.minArray.push('86'), this.state.secArray.push('00'))
                                                                                                                                                                                                        : item == 5220
                                                                                                                                                                                                          ? (this.state.minArray.push('87'), this.state.secArray.push('00'))
                                                                                                                                                                                                          : item == 5280
                                                                                                                                                                                                            ? (this.state.minArray.push('88'), this.state.secArray.push('00'))
                                                                                                                                                                                                            : item == 5340
                                                                                                                                                                                                              ? (this.state.minArray.push('89'), this.state.secArray.push('00'))
                                                                                                                                                                                                              : item == 5400
                                                                                                                                                                                                                ? (this.state.minArray.push('90'), this.state.secArray.push('00'))
                                                                                                                                                                                                                : item == 5460
                                                                                                                                                                                                                  ? (this.state.minArray.push('91'), this.state.secArray.push('00'))
                                                                                                                                                                                                                  : item == 5520
                                                                                                                                                                                                                    ? (this.state.minArray.push('92'), this.state.secArray.push('00'))
                                                                                                                                                                                                                    : item == 5580
                                                                                                                                                                                                                      ? (this.state.minArray.push('93'), this.state.secArray.push('00'))
                                                                                                                                                                                                                      : item == 5640
                                                                                                                                                                                                                        ? (this.state.minArray.push('94'), this.state.secArray.push('00'))
                                                                                                                                                                                                                        : item == 5700
                                                                                                                                                                                                                          ? (this.state.minArray.push('95'), this.state.secArray.push('00'))
                                                                                                                                                                                                                          : item == 5760
                                                                                                                                                                                                                            ? (this.state.minArray.push('96'), this.state.secArray.push('00'))
                                                                                                                                                                                                                            : item == 5820
                                                                                                                                                                                                                              ? (this.state.minArray.push('97'), this.state.secArray.push('00'))
                                                                                                                                                                                                                              : item == 5880
                                                                                                                                                                                                                                ? (this.state.minArray.push('98'), this.state.secArray.push('00'))
                                                                                                                                                                                                                                : item == 5940
                                                                                                                                                                                                                                  ? (this.state.minArray.push('99'), this.state.secArray.push('00'))
                                                                                                                                                                                                                                  : item == 5999
                                                                                                                                                                                                                                    ? (this.state.minArray.push('99'), this.state.secArray.push('59'))
                                                                                                                                                                                                                                    : (this.state.minArray.push('00'), this.state.secArray.push('00'));
      });
    }, 100);
  };
  handleRest = (child) => {
    this.setState({ rest: child });
    setTimeout(() => {
      this.state.rest.map((item) => {
        // console.log(item,'item')
        // if (index === editedItem) {
        // item = this.stateitem
        item == 20
          ? (this.state.minArrayRest.push('00'),
            this.state.secArrayRest.push('20'))
          : item == 30
            ? (this.state.minArrayRest.push('00'),
              this.state.secArrayRest.push('30'))
            : item == 45
              ? (this.state.minArrayRest.push('00'),
                this.state.secArrayRest.push('45'))
              : item == 60
                ? (this.state.minArrayRest.push('00'),
                  this.state.secArrayRest.push('60'))
                : item == 75
                  ? (this.state.minArrayRest.push('01'),
                    this.state.secArrayRest.push('15'))
                  : item == 90
                    ? (this.state.minArrayRest.push('01'),
                      this.state.secArrayRest.push('30'))
                    : item == 105
                      ? (this.state.minArrayRest.push('01'),
                        this.state.secArrayRest.push('45'))
                      : item == 120
                        ? (this.state.minArrayRest.push('02'),
                          this.state.secArrayRest.push('00'))
                        : item == 135
                          ? (this.state.minArrayRest.push('02'),
                            this.state.secArrayRest.push('15'))
                          : item == 150
                            ? (this.state.minArrayRest.push('02'),
                              this.state.secArrayRest.push('30'))
                            : item == 180
                              ? (this.state.minArrayRest.push('03'),
                                this.state.secArrayRest.push('00'))
                              : item == 210
                                ? (this.state.minArrayRest.push('03'),
                                  this.state.secArrayRest.push('30'))
                                : item == 240
                                  ? (this.state.minArrayRest.push('04'),
                                    this.state.secArrayRest.push('00'))
                                  : item == 270
                                    ? (this.state.minArrayRest.push('04'),
                                      this.state.secArrayRest.push('30'))
                                    : item == 300
                                      ? (this.state.minArrayRest.push('05'),
                                        this.state.secArrayRest.push('00'))
                                      : item == 360
                                        ? (this.state.minArrayRest.push('06'),
                                          this.state.secArrayRest.push('00'))
                                        : item == 420
                                          ? (this.state.minArrayRest.push('07'),
                                            this.state.secArrayRest.push('00'))
                                          : item == 480
                                            ? (this.state.minArrayRest.push('08'),
                                              this.state.secArrayRest.push('00'))
                                            : item == 540
                                              ? (this.state.minArrayRest.push('09'),
                                                this.state.secArrayRest.push('00'))
                                              : item == 600
                                                ? (this.state.minArrayRest.push('10'),
                                                  this.state.secArrayRest.push('00'))
                                                : item == 660
                                                  ? (this.state.minArrayRest.push('11'),
                                                    this.state.secArrayRest.push('00'))
                                                  : item == 720
                                                    ? (this.state.minArrayRest.push('12'),
                                                      this.state.secArrayRest.push('00'))
                                                    : item == 780
                                                      ? (this.state.minArrayRest.push('13'),
                                                        this.state.secArrayRest.push('00'))
                                                      : item == 840
                                                        ? (this.state.minArrayRest.push('14'),
                                                          this.state.secArrayRest.push('00'))
                                                        : item == 900
                                                          ? (this.state.minArrayRest.push('15'),
                                                            this.state.secArrayRest.push('00'))
                                                          : item == 960
                                                            ? (this.state.minArrayRest.push('16'),
                                                              this.state.secArrayRest.push('00'))
                                                            : item == 1020
                                                              ? (this.state.minArrayRest.push('17'),
                                                                this.state.secArrayRest.push('00'))
                                                              : item == 1080
                                                                ? (this.state.minArrayRest.push('18'),
                                                                  this.state.secArrayRest.push('00'))
                                                                : item == 1140
                                                                  ? (this.state.minArrayRest.push('19'),
                                                                    this.state.secArrayRest.push('00'))
                                                                  : item == 1200
                                                                    ? (this.state.minArrayRest.push('20'),
                                                                      this.state.secArrayRest.push('00'))
                                                                    : item == 1260
                                                                      ? (this.state.minArrayRest.push('21'),
                                                                        this.state.secArrayRest.push('00'))
                                                                      : item == 1320
                                                                        ? (this.state.minArrayRest.push('22'),
                                                                          this.state.secArrayRest.push('00'))
                                                                        : item == 1380
                                                                          ? (this.state.minArrayRest.push('23'),
                                                                            this.state.secArrayRest.push('00'))
                                                                          : item == 1440
                                                                            ? (this.state.minArrayRest.push('24'),
                                                                              this.state.secArrayRest.push('00'))
                                                                            : item == 1500
                                                                              ? (this.state.minArrayRest.push('25'),
                                                                                this.state.secArrayRest.push('00'))
                                                                              : item == 1560
                                                                                ? (this.state.minArrayRest.push('26'),
                                                                                  this.state.secArrayRest.push('00'))
                                                                                : item == 1620
                                                                                  ? (this.state.minArrayRest.push('27'),
                                                                                    this.state.secArrayRest.push('00'))
                                                                                  : item == 1680
                                                                                    ? (this.state.minArrayRest.push('28'),
                                                                                      this.state.secArrayRest.push('00'))
                                                                                    : item == 1740
                                                                                      ? (this.state.minArrayRest.push('29'),
                                                                                        this.state.secArrayRest.push('00'))
                                                                                      : item == 1800
                                                                                        ? (this.state.minArrayRest.push('30'),
                                                                                          this.state.secArrayRest.push('00'))
                                                                                        : item == 1860
                                                                                          ? (this.state.minArrayRest.push('31'),
                                                                                            this.state.secArrayRest.push('00'))
                                                                                          : item == 1920
                                                                                            ? (this.state.minArrayRest.push('32'),
                                                                                              this.state.secArrayRest.push('00'))
                                                                                            : item == 1980
                                                                                              ? (this.state.minArrayRest.push('33'),
                                                                                                this.state.secArrayRest.push('00'))
                                                                                              : item == 2040
                                                                                                ? (this.state.minArrayRest.push('34'),
                                                                                                  this.state.secArrayRest.push('00'))
                                                                                                : item == 2100
                                                                                                  ? (this.state.minArrayRest.push('35'),
                                                                                                    this.state.secArrayRest.push('00'))
                                                                                                  : item == 2160
                                                                                                    ? (this.state.minArrayRest.push('36'),
                                                                                                      this.state.secArrayRest.push('00'))
                                                                                                    : item == 2220
                                                                                                      ? (this.state.minArrayRest.push('37'),
                                                                                                        this.state.secArrayRest.push('00'))
                                                                                                      : item == 2280
                                                                                                        ? (this.state.minArrayRest.push('38'),
                                                                                                          this.state.secArrayRest.push('00'))
                                                                                                        : item == 2340
                                                                                                          ? (this.state.minArrayRest.push('39'),
                                                                                                            this.state.secArrayRest.push('00'))
                                                                                                          : item == 2400
                                                                                                            ? (this.state.minArrayRest.push('40'),
                                                                                                              this.state.secArrayRest.push('00'))
                                                                                                            : item == 2460
                                                                                                              ? (this.state.minArrayRest.push('41'),
                                                                                                                this.state.secArrayRest.push('00'))
                                                                                                              : item == 2520
                                                                                                                ? (this.state.minArrayRest.push('42'),
                                                                                                                  this.state.secArrayRest.push('00'))
                                                                                                                : item == 2580
                                                                                                                  ? (this.state.minArrayRest.push('43'),
                                                                                                                    this.state.secArrayRest.push('00'))
                                                                                                                  : item == 2640
                                                                                                                    ? (this.state.minArrayRest.push('44'),
                                                                                                                      this.state.secArrayRest.push('00'))
                                                                                                                    : item == 2700
                                                                                                                      ? (this.state.minArrayRest.push('45'),
                                                                                                                        this.state.secArrayRest.push('00'))
                                                                                                                      : item == 2760
                                                                                                                        ? (this.state.minArrayRest.push('46'),
                                                                                                                          this.state.secArrayRest.push('00'))
                                                                                                                        : item == 2820
                                                                                                                          ? (this.state.minArrayRest.push('47'),
                                                                                                                            this.state.secArrayRest.push('00'))
                                                                                                                          : item == 2880
                                                                                                                            ? (this.state.minArrayRest.push('48'),
                                                                                                                              this.state.secArrayRest.push('00'))
                                                                                                                            : item == 2940
                                                                                                                              ? (this.state.minArrayRest.push('49'),
                                                                                                                                this.state.secArrayRest.push('00'))
                                                                                                                              : item == 3000
                                                                                                                                ? (this.state.minArrayRest.push('50'),
                                                                                                                                  this.state.secArrayRest.push('00'))
                                                                                                                                : item == 3060
                                                                                                                                  ? (this.state.minArrayRest.push('51'),
                                                                                                                                    this.state.secArrayRest.push('00'))
                                                                                                                                  : item == 3120
                                                                                                                                    ? (this.state.minArrayRest.push('52'),
                                                                                                                                      this.state.secArrayRest.push('00'))
                                                                                                                                    : item == 3180
                                                                                                                                      ? (this.state.minArrayRest.push('53'),
                                                                                                                                        this.state.secArrayRest.push('00'))
                                                                                                                                      : item == 3240
                                                                                                                                        ? (this.state.minArrayRest.push('54'),
                                                                                                                                          this.state.secArrayRest.push('00'))
                                                                                                                                        : item == 3300
                                                                                                                                          ? (this.state.minArrayRest.push('55'),
                                                                                                                                            this.state.secArrayRest.push('00'))
                                                                                                                                          : item == 3360
                                                                                                                                            ? (this.state.minArrayRest.push('56'),
                                                                                                                                              this.state.secArrayRest.push('00'))
                                                                                                                                            : item == 3420
                                                                                                                                              ? (this.state.minArrayRest.push('57'),
                                                                                                                                                this.state.secArrayRest.push('00'))
                                                                                                                                              : item == 3480
                                                                                                                                                ? (this.state.minArrayRest.push('58'),
                                                                                                                                                  this.state.secArrayRest.push('00'))
                                                                                                                                                : item == 3540
                                                                                                                                                  ? (this.state.minArrayRest.push('59'),
                                                                                                                                                    this.state.secArrayRest.push('00'))
                                                                                                                                                  : item == 3600
                                                                                                                                                    ? (this.state.minArrayRest.push('60'),
                                                                                                                                                      this.state.secArrayRest.push('00'))
                                                                                                                                                    : item == 3660
                                                                                                                                                      ? (this.state.minArrayRest.push('61'),
                                                                                                                                                        this.state.secArrayRest.push('00'))
                                                                                                                                                      : item == 3720
                                                                                                                                                        ? (this.state.minArrayRest.push('62'),
                                                                                                                                                          this.state.secArrayRest.push('00'))
                                                                                                                                                        : item == 3780
                                                                                                                                                          ? (this.state.minArrayRest.push('63'),
                                                                                                                                                            this.state.secArrayRest.push('00'))
                                                                                                                                                          : item == 3840
                                                                                                                                                            ? (this.state.minArrayRest.push('64'),
                                                                                                                                                              this.state.secArrayRest.push('00'))
                                                                                                                                                            : item == 3900
                                                                                                                                                              ? (this.state.minArrayRest.push('65'),
                                                                                                                                                                this.state.secArrayRest.push('00'))
                                                                                                                                                              : item == 3960
                                                                                                                                                                ? (this.state.minArrayRest.push('66'),
                                                                                                                                                                  this.state.secArrayRest.push('00'))
                                                                                                                                                                : item == 4020
                                                                                                                                                                  ? (this.state.minArrayRest.push('67'),
                                                                                                                                                                    this.state.secArrayRest.push('00'))
                                                                                                                                                                  : item == 4080
                                                                                                                                                                    ? (this.state.minArrayRest.push('68'),
                                                                                                                                                                      this.state.secArrayRest.push('00'))
                                                                                                                                                                    : item == 4140
                                                                                                                                                                      ? (this.state.minArrayRest.push('69'),
                                                                                                                                                                        this.state.secArrayRest.push('00'))
                                                                                                                                                                      : item == 4200
                                                                                                                                                                        ? (this.state.minArrayRest.push('70'),
                                                                                                                                                                          this.state.secArrayRest.push('00'))
                                                                                                                                                                        : item == 4260
                                                                                                                                                                          ? (this.state.minArrayRest.push('71'),
                                                                                                                                                                            this.state.secArrayRest.push('00'))
                                                                                                                                                                          : item == 4320
                                                                                                                                                                            ? (this.state.minArrayRest.push('72'),
                                                                                                                                                                              this.state.secArrayRest.push('00'))
                                                                                                                                                                            : item == 4380
                                                                                                                                                                              ? (this.state.minArrayRest.push('73'),
                                                                                                                                                                                this.state.secArrayRest.push('00'))
                                                                                                                                                                              : item == 4440
                                                                                                                                                                                ? (this.state.minArrayRest.push('74'),
                                                                                                                                                                                  this.state.secArrayRest.push('00'))
                                                                                                                                                                                : item == 4500
                                                                                                                                                                                  ? (this.state.minArrayRest.push('75'),
                                                                                                                                                                                    this.state.secArrayRest.push('00'))
                                                                                                                                                                                  : item == 4560
                                                                                                                                                                                    ? (this.state.minArrayRest.push('76'),
                                                                                                                                                                                      this.state.secArrayRest.push('00'))
                                                                                                                                                                                    : item == 4620
                                                                                                                                                                                      ? (this.state.minArrayRest.push('77'),
                                                                                                                                                                                        this.state.secArrayRest.push('00'))
                                                                                                                                                                                      : item == 4680
                                                                                                                                                                                        ? (this.state.minArrayRest.push('78'),
                                                                                                                                                                                          this.state.secArrayRest.push('00'))
                                                                                                                                                                                        : item == 4740
                                                                                                                                                                                          ? (this.state.minArrayRest.push('79'),
                                                                                                                                                                                            this.state.secArrayRest.push('00'))
                                                                                                                                                                                          : item == 4800
                                                                                                                                                                                            ? (this.state.minArrayRest.push('80'),
                                                                                                                                                                                              this.state.secArrayRest.push('00'))
                                                                                                                                                                                            : item == 4860
                                                                                                                                                                                              ? (this.state.minArrayRest.push('81'),
                                                                                                                                                                                                this.state.secArrayRest.push('00'))
                                                                                                                                                                                              : item == 4920
                                                                                                                                                                                                ? (this.state.minArrayRest.push('82'),
                                                                                                                                                                                                  this.state.secArrayRest.push('00'))
                                                                                                                                                                                                : item == 4980
                                                                                                                                                                                                  ? (this.state.minArrayRest.push('83'),
                                                                                                                                                                                                    this.state.secArrayRest.push('00'))
                                                                                                                                                                                                  : item == 5040
                                                                                                                                                                                                    ? (this.state.minArrayRest.push('84'),
                                                                                                                                                                                                      this.state.secArrayRest.push('00'))
                                                                                                                                                                                                    : item == 5100
                                                                                                                                                                                                      ? (this.state.minArrayRest.push('85'),
                                                                                                                                                                                                        this.state.secArrayRest.push('00'))
                                                                                                                                                                                                      : item == 5160
                                                                                                                                                                                                        ? (this.state.minArrayRest.push('86'),
                                                                                                                                                                                                          this.state.secArrayRest.push('00'))
                                                                                                                                                                                                        : item == 5220
                                                                                                                                                                                                          ? (this.state.minArrayRest.push('87'),
                                                                                                                                                                                                            this.state.secArrayRest.push('00'))
                                                                                                                                                                                                          : item == 5280
                                                                                                                                                                                                            ? (this.state.minArrayRest.push('88'),
                                                                                                                                                                                                              this.state.secArrayRest.push('00'))
                                                                                                                                                                                                            : item == 5340
                                                                                                                                                                                                              ? (this.state.minArrayRest.push('89'),
                                                                                                                                                                                                                this.state.secArrayRest.push('00'))
                                                                                                                                                                                                              : item == 5400
                                                                                                                                                                                                                ? (this.state.minArrayRest.push('90'),
                                                                                                                                                                                                                  this.state.secArrayRest.push('00'))
                                                                                                                                                                                                                : item == 5460
                                                                                                                                                                                                                  ? (this.state.minArrayRest.push('91'),
                                                                                                                                                                                                                    this.state.secArrayRest.push('00'))
                                                                                                                                                                                                                  : item == 5520
                                                                                                                                                                                                                    ? (this.state.minArrayRest.push('92'),
                                                                                                                                                                                                                      this.state.secArrayRest.push('00'))
                                                                                                                                                                                                                    : item == 5580
                                                                                                                                                                                                                      ? (this.state.minArrayRest.push('93'),
                                                                                                                                                                                                                        this.state.secArrayRest.push('00'))
                                                                                                                                                                                                                      : item == 5640
                                                                                                                                                                                                                        ? (this.state.minArrayRest.push('94'),
                                                                                                                                                                                                                          this.state.secArrayRest.push('00'))
                                                                                                                                                                                                                        : item == 5700
                                                                                                                                                                                                                          ? (this.state.minArrayRest.push('95'),
                                                                                                                                                                                                                            this.state.secArrayRest.push('00'))
                                                                                                                                                                                                                          : item == 5760
                                                                                                                                                                                                                            ? (this.state.minArrayRest.push('96'),
                                                                                                                                                                                                                              this.state.secArrayRest.push('00'))
                                                                                                                                                                                                                            : item == 5820
                                                                                                                                                                                                                              ? (this.state.minArrayRest.push('97'),
                                                                                                                                                                                                                                this.state.secArrayRest.push('00'))
                                                                                                                                                                                                                              : item == 5880
                                                                                                                                                                                                                                ? (this.state.minArrayRest.push('98'),
                                                                                                                                                                                                                                  this.state.secArrayRest.push('00'))
                                                                                                                                                                                                                                : item == 5940
                                                                                                                                                                                                                                  ? (this.state.minArrayRest.push('99'),
                                                                                                                                                                                                                                    this.state.secArrayRest.push('00'))
                                                                                                                                                                                                                                  : item == 5999
                                                                                                                                                                                                                                    ? (this.state.minArrayRest.push('99'),
                                                                                                                                                                                                                                      this.state.secArrayRest.push('59'))
                                                                                                                                                                                                                                    : (this.state.minArrayRest.push('00'),
                                                                                                                                                                                                                                      this.state.secArrayRest.push('00'));
      });
    }, 100);
  };

  handleTimeDown = (child) => {
    this.setState({ selectTime: child });
    if (child == true) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({
        selectTime: !this.state.selectTime,
        selectTimeDown: !this.state.selectTimeDown,
      });
    }
  };

  handleEmom = (child) => {
    this.setState({ selectTime: child });
    if (child == true) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({
        selectTime: !this.state.selectTime,
        selectEmom: !this.state.selectEmom,
      });
    }
  };

  handleTabata = (child) => {
    this.setState({ selectTime: child });
    if (child == true) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({
        selectTime: !this.state.selectTime,
        selectTabata: !this.state.selectTabata,
      });
    }
  };

  handleClock = (child) => {
    this.setState({ selectTime: child });
    if (child == true) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({
        selectTime: !this.state.selectTime,
        selectClock: !this.state.selectClock,
      });
    }
  };
  
  addTheValue = () => {
    const time = this.state.miliseconds.reduce((a, b) => a + b, 0);
  };
  
  startDown = () => {
    const { index, miliseconds, rest, indexRest } = this.state;
    this.secCountDown = setInterval(() => {
      var num = (Number(this.state.second) - 1).toString();
      // console.log(this.state.counter, ':', this.state.second)
      var count = this.state.counter;
      if (this.state.second == '00') {
        // this.setState({second:'60'});
        num = '59';
        count = (Number(this.state.counter) - 1).toString();
      }
      this.setState({
        counter: count.length == 1 ? '0' + count : count,
        second: num.length == 1 ? '0' + num : num,
      });
    }, 996.000000000000005);
  };
  
  startLap = () => {
    this.secLap = setInterval(() => {
      var lapNum = (Number(this.state.lapSecond) + 1).toString();
      var lapCount = this.state.lapMinutes;
      if (this.state.lapSecond == '59') {
        lapNum = '00';
        lapCount = (Number(this.state.lapMinutes) + 1).toString();
      }
      this.setState({
        lapSecond: lapNum.length == 1 ? '0' + lapNum : lapNum,
        lapMinutes: lapCount.length == 1 ? '0' + lapCount : lapCount,
      });
    }, 996.00000000000001);
  }

  startRound = () => {
    this.secRound = setInterval(() => {
      var roundNum = (Number(this.state.roundSecond) + 1).toString();
      var roundCount = this.state.roundMinutes;
      if (this.state.roundSecond == '59') {
        roundNum = '00';
        roundCount = (Number(this.state.roundMinutes) + 1).toString();
      }
      this.setState({
        roundSecond: roundNum.length == 1 ? '0' + roundNum : roundNum,
        roundMinutes: roundCount.length == 1 ? '0' + roundCount : roundCount
      });
    }, 993);
  }

  startTotal = () => {
    this.secTotal = setInterval(() => {
      var totalNum = (Number(this.state.totalSecond) + 1).toString();
      var totalCount = this.state.totalMinute;
      if (this.state.totalSecond == '59') {
        totalNum = '00';
        totalCount = (Number(this.state.totalMinute) + 1).toString();
      }
      this.setState({
        totalSecond: totalNum.length == 1 ? '0' + totalNum : totalNum,
        totalMinute: totalCount.length == 1 ? '0' + totalCount : totalCount
      });
    }, 999);
  }

  startUp = () => {
    const { index, miliseconds, rest, indexRest } = this.state;
    this.secCountDown = setInterval(() => {
      var num = (Number(this.state.second) + 1).toString();
      var count = this.state.counter;
      if (this.state.second == '59') {
        num = '00';
        count = (Number(this.state.counter) + 1).toString();
      }
      this.setState({
        counter: count.length == 1 ? '0' + count : count,
        second: num.length == 1 ? '0' + num : num,
      });
    }, 996.00000000000001);
  };

  onButtonStart = () => {
    this.startDown();
    this.setState({ startDisabled: true, stopDisabled: false });
  };
  onButtonStop = () => {
    clearInterval(this.secCountDown);
    clearInterval(this.secLap);
    clearInterval(this.secRound);
    clearInterval(this.secTotal);
    setTimeout(() => {
      this.setState({
        timer: null,
        counter: '00',
        second: '00',
        lapMinutes: '00',
        lapSecond: '00',
        roundSecond: '00',
        roundMinutes: '00',
        totalSecond: '00',
        totalMinute: '00',
      });
    }, 3000);
  };

  handleRestTimer = () => {
    const {
      index,
      miliseconds,
      secArray,
      minArray,
      indexRest,
      secArrayRest,
      minArrayRest,
      rest,
    } = this.state;
    setTimeout(() => {
      if (secArrayRest[indexRest] == '00' && minArrayRest[indexRest] == '00') {
        null;
      } else if (indexRest == secArrayRest.length) {
        // console.log('hello');
        // this.setState({ indexRest: 0, play: false, })
        song.stop();
        setTimeout(() => {
          this.setState({ second: '00', timer1: 'Timer 1' });
          this.onButtonStop();
        }, 100);
      } else {
        RNBeep.beep(false);
        setTimeout(() => {
          this.timer1 = setTimeout(() => {
            song.play((success) => {
              if (!success) {
                console.log('song didnt play', error);
              }
            });
          }, 1000 * rest[indexRest] - 3000);
        }, 300);
        song.stop();
        this.setState({
          second: secArrayRest[indexRest],
          play: true,
          counter: minArrayRest[indexRest],
          timer1: 'Rest',
        });
        setTimeout(() => {
          this.setState({ indexRest: indexRest + 1 });
        }, 100);
      }
    }, 1000 * miliseconds[index] + 500);
  };

  handleTimerWithChangable = () => {
    const {
      index,
      miliseconds,
      secArray,
      minArray,
      indexRest,
      secArrayRest,
      minArrayRest,
      rest,
    } = this.state;
    if (this.props.forTimeRound == 0 && this.props.amrap == 0 && this.props.emomMinutes == 0) {
      null
    } else if (!this.props.forTimeRound == 0) {
      RNBeep.beep(false);
      setTimeout(() => {
        this.startUp();
        this.startLap();
        this.startRound();
        this.startTotal()
      }, 100);
    }
    else if (!this.props.amrap == 0) {
      RNBeep.beep(false);
      setTimeout(() => {
        this.startDown();
        this.startLap();
        this.startRound();
        this.startTotal()
      }, 100);
      this.timer1 = setTimeout(() => {
        song.play((success) => {
          if (!success) {
            console.log('song didnt play', error);
          }
        });
      }, 1000 * this.props.amrap - 2900);
      setTimeout(() => {
        song.stop();
        this.setState({ second: secArray[index], counter: minArray[index] });
        setTimeout(() => {
          clearInterval(this.secCountDown);
          if (this.props.activity.length == index) {
            null
          } else {
            this.totalRoundTime();
            this.totalTimeFn()
          }
          this.onButtonStop();
          setTimeout(() => {
            this.setState({ secArray: [], minArray: [], index: 0, isShow: false, lapTime: [], });
          }, 1000);
        }, 1000 * this.props.amrap);
      }, 500);
    }
    else if (!this.props.emomMinutes == 0) {
      RNBeep.beep(false);
      setTimeout(() => {
        this.startDown();
        // this.startLap();
        // this.startRound();
      }, 145);
      if (this.props.emomMinutes == 60) {
      } else {
        this.beep = setInterval(() => {
          RNBeep.beep(false);
        }, (6 * 10) * 1000);
      }
      setTimeout(() => {
        song.play((success) => {
          if (!success) {
            console.log('song didnt play', error);
          }
        });
      }, 1000 * this.props.emomMinutes - 2900);
      setTimeout(() => {
        song.stop();
        this.setState({ second: secArray[index], counter: minArray[index] });
        setTimeout(() => {
          clearInterval(this.beep)
          clearTimeout(this.play)
          clearInterval(this.secCountDown);
          this.onButtonStop();
          this.setState({ secArray: [], minArray: [], index: 0, isShow: false, lapTime: [] });
        }, 1000 * this.props.emomMinutes);
      }, 500);
    }
  };
  lapTimeForGraph = () => {
    let { lapTime, lapSecond, lapMinutes, index, } = this.state;
    this.setState({ actCondition: true, roundCondition: true, index: this.state.index + 1, });
    setTimeout(() => {
      this.setState({ actCondition: false, roundCondition: false, activityCondition: true });
    }, 100);
    if (lapSecond == '00' && lapMinutes == '00') {
      console.log('error');
    } else {
      let allData = lapTime.slice();
      allData.push(lapMinutes + ':' + lapSecond);
      this.setState({ lapTime: allData, });
      setTimeout(() => {
        this.props.timeLap(this.state.lapTime);
        setTimeout(() => {
          this.setState({ lapSecond: '00', lapMinutes: '00' });
        }, 50);
      }, 50);
    }
  };
  totalTimeFn = () => {
    let { totalMinute, totalSecond, totalTimeArray, index } = this.state;
    if (totalSecond == '00' && totalMinute == '00') {
      console.log('error');
    } else {
      let allData = totalTimeArray.slice();
      allData.push(totalMinute + ':' + totalSecond);
      this.setState({ totalTimeArray: allData, index: 0 });
      setTimeout(() => {
        // console.log(this.state.totalTimeArray, 'timeArray')
        this.props.totalTimeArr(this.state.totalTimeArray);
      }, 50);
    }
  };
  totalRoundTime = () => {
    let { lapTime, roundSecond, roundMinutes, index, roundLap } = this.state;
    if (roundSecond == '00' && roundMinutes == '00') {
      console.log('error');
    } else {
      let allData = roundLap.slice();
      allData.push(roundMinutes + ':' + roundSecond);
      this.setState({ roundLap: allData, });
      setTimeout(() => {
        // console.log(this.state.roundLap, 'roundLap')
        this.props.roundLap(this.state.roundLap);
        setTimeout(() => {
          this.setState({ roundSecond: '00', roundMinutes: '00' });
        }, 50);
      }, 50);
    }
  }
  conditionCheckAndRun = () => {
    let check = false;
    if (
      //yaha fun ka name likh dena
      this.props.criteriaValue == '15.2' && check == false
    ) {
      this.setState({
        counter: '03',
        second: '00'
      })
      setTimeout(() => {
        this.startDown()
      }, 10);
      this.conditionTimer = setInterval(() => {
        this.setState({
          counter: '03',
          second: '00'
        })
        RNBeep.beep(false);
            }, (60 * 1000) * 3 );
        }
  }

  render() {

    // console.log(this.state.roundMinutes, 'secArray  timerrr')
    // console.log(this.state.roundSecond, 'minArray  timerrr')
    // console.log(this.props.emomMinutes,'emomMinutes  timerrr')

    const { isShow, index, miliseconds } = this.state;
    if (this.props.playOnOrOff == true && this.state.isShow == false) {
      this.setState({ isShow: true });
      setTimeout(() => {
        this.conditionCheckAndRun();
      }, 50);
      if (!this.props.amrap == 0) {
        // handleAmrapTime(this.props, this.state);
      }
      if (!this.props.emomMinutes == 0) {
        // handleAmrapTime(this.props, this.state)
      }
    }
    if (this.props.stop == true && this.state.stop == false) {
      this.setState({ stop: true, isShow: false })
      clearInterval(this.secCountDown);
      clearInterval(this.secLap);
      clearInterval(this.secRound);
      clearInterval(this.secTotal);
      clearInterval(this.conditionTimer);
      setTimeout(() => {
        this.setState({ stop: false })
      }, 50);
    }

    // if (this.props.actCondition == true && this.state.actCondition == false) {
    //   if (this.props.emomMinutes == 0) {
    //     this.lapTimeForGraph();
    //   }
    // }

    // if (this.props.roundCondition == true && this.state.roundCondition == false) {
    //   if (this.props.emomMinutes == 0) {
    //     this.lapTimeForGraph();
    //     this.totalRoundTime();
    //     this.totalTimeFn()
    //   }
    // }

    // if (this.props.activity.length == index && this.state.activityCondition == true) {
    //   this.setState({ activityCondition: false, index: 0 })
    //   // console.log('activityCondition',this.state.activityCondition)
    //   if (this.props.emomMinutes == 0) {
    //     this.totalRoundTime()
    //     this.totalTimeFn()
    //     // console.log('activityCondition',this.state.activityCondition)
    //   }
    // }

    if (this.props.forTimeRoundCon == true && this.state.forTimeRoundCon == false) {
      this.setState({ forTimeRoundCon: true, isShow: false })
      // song.play((success) => {
      //   if (!success) {
      //     console.log('song didnt play', error);
      //   }
      // });
      clearInterval(this.secCountDown)
      //   setTimeout(() => {
      //     clearInterval(this.secCountDown)
      //     song.stop();
      //     RNBeep.beep(false);
      //   }, 3500);
      setTimeout(() => {
        this.setState({ forTimeRoundCon: false })
      }, 100);
      clearInterval(this.conditionTimer)
    }
    if (this.props.clearData == true && this.state.clearData == false) {
      this.setState({ clearData: true, timeLap: [], roundLap: [], lapTime: [], index: 0, totalTimeArray: [] })
      this.onButtonStop();
      setTimeout(() => {
        this.setState({ clearData: false })
      }, 100);
    }
    return (
      <View>
        <View style={style.header1Inner}>
          <Text style={style.timeText}>Timer 2</Text>
          <View style={style.contDownZero}>
            <Text style={style.contDownZaroText}>{this.state.counter}:</Text>
            <Text style={style.contDownZaroText}>{this.state.second}</Text>
          </View>
        </View>

        {/* <Modal
          isVisible={this.state.isModalVisible}
          style={[style.modalContainer]}>
          <View style={style.modalInner}>
            <View
              style={[
                style.boxConatainer,
                {
                  width: !this.state.selectTime ? width * 0.55 : width * 0,
                  height: !this.state.selectTime ? height * 0.85 : height * 0,
                  overflow: 'hidden',
                },
              ]}>
              <View style={style.boxInner}> */}
        {/* Box Header */}
        {/* <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width * 0.55,
                    height: height * 0.85,
                  }}> */}
        {/* <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: width * 0.55,
                      height: height * 0.2,
                    }}>
                    <Text style={style.mainHeading}>Timer0</Text>
                    <Pressable
                      style={style.backBotton}
                      android_ripple={{
                        color: '#FF6100',
                        borderless: true,
                        radius: height * 0.1,
                      }}
                      onPress={this.toggleModal}>
                      <Icon
                        name="cancel"
                        size={height * 0.07}
                        color="#FF6100"
                      />
                    </Pressable>
                  </View> */}
        {/* <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: width * 0.55,
                      height: height * 0.6,
                    }}>
                    <TouchableOpacity onPress={this.changeLayoutMeter}>
                      <View style={style.boxHeaderInner}>
                        <Text style={style.modalHeading}>Count Up</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.changeLayoutMeterDown}>
                      <View style={style.boxHeaderInner}>
                        <Text style={style.modalHeading}>Count Down</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.changeLayoutEmom}>
                      <View style={style.boxHeaderInner}>
                        <Text style={style.modalHeading}>EMOM</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.changeLayoutTabata}>
                      <View style={style.boxHeaderInner}>
                        <Text style={[style.modalHeading]}>TABATA</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.changeLayoutClock}>
                      <View style={style.boxHeaderInner}>
                        <Text style={style.modalHeading}>Clock</Text>
                      </View>
                    </TouchableOpacity>
                  </View> */}
        {/* </View>
              </View>
            </View> */}
        {/* <View
              style={{
                width: !this.state.selectTimeUp ? 0 : width * 0.55,
                height: !this.state.selectTimeUp ? height * 0 : height * 0.85,
                overflow: 'hidden',
              }}>
              <CountUp
                selectTime={this.handleTime}
                passingRest={this.handleRest}
                passingMinutes={this.handleMinutes}
                mainTime={this.handleMainTime}
              />
            </View>
            <View
              style={{
                width: !this.state.selectTimeDown ? 0 : width * 0.55,
                height: !this.state.selectTimeDown ? height * 0 : height * 0.85,
                overflow: 'hidden',
              }}>
              <CountDown selectTimeDown={this.handleTimeDown} />
            </View>
            <View
              style={{
                width: !this.state.selectEmom ? 0 : width * 0.55,
                height: !this.state.selectEmom ? height * 0 : height * 0.85,
                overflow: 'hidden',
              }}>
              <EMOM selectEmom={this.handleEmom} />
            </View>
            <View
              style={{
                width: !this.state.selectTabata ? 0 : width * 0.55,
                height: !this.state.selectTabata ? height * 0 : height * 0.85,
                overflow: 'hidden',
              }}>
              <Tabata selectTabata={this.handleTabata} />
            </View>
            <View
              style={{
                width: !this.state.selectClock ? 0 : width * 0.55,
                height: !this.state.selectClock ? height * 0 : height * 0.85,
                overflow: 'hidden',
              }}>
              <Clock selectClock={this.handleClock} />
            </View> */}
        {/* </View>
        </Modal> */}
      </View>
    );
  }
}
