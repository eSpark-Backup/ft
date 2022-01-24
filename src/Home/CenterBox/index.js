/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
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
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Value,
  FlatList,
  VirtualizedList,
  Pressable,
  Animated,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import style from './style';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import {Fonts} from '../../utils/fonts';
import TextTicker from 'react-native-text-ticker';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {
  TouchThroughView,
  TouchThroughWrapper,
} from 'react-native-touch-through-view';
import {Toolbar, Icon, IconToggle} from 'react-native-material-ui';
import Carousel from 'react-native-snap-carousel';
import RNBeep from 'react-native-a-beep';
import {handleAmrapTime} from '../Timer/timer1Modal/fnOfGetValue';
import {handleTabataRestTime} from '../../component/fnOfGetValueRest';
import {RNSerialport} from 'react-native-serialport';

import Screen from 'react-native-vector-icons/MaterialIcons';
import MemorySave from './../programID/mermorySave';
import clc from 'cli-color';

const dataActivity2 = [
  {
    name: 'Activity',
  },
  {
    name: 'Activity',
  },
  {
    name: 'Activity',
  },
  {
    name: 'Activity',
  },
  {
    name: 'Activity',
  },
  {
    name: 'Activity',
  },
  {
    name: 'Activity',
  },
  {
    name: 'Activity',
  },
  {
    name: 'Activity',
  },
  {
    name: 'Activity',
  },
];
let roundLapTime = null;
let totalTimeTime = null;
const {height, width} = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      edit: false,
      meter: false,
      note1: '',
      focus: false,
      page1: false,
      page2: false,
      note: false,
      pr: false,
      graph: [],
      dataGraph: [],
      index: 0,
      activity: [],
      activityShown: [],
      activityRound: [1],
      color: ['#0083FF', 'gray'],
      colorIndex: 0,
      timeLap: [],
      roundLap: [],
      actCondition: false,
      isShow: false,
      roundCondition: false,
      roundIndex: 0,
      timeLapIndex: 0,
      round: [],
      duration: 60,
      clearData: false,
      activityDataCut: [],
      actDataCondition: false,
      roundDataCondition: false,
      forTimeRoundCon: false,
      roundLapIndex: 0,
      circle: false,
      forTimeRound: 0,
      graphCondition: false,
      uniqueValue: 0,
      amrapGraphShow: false,
      emomGraphShow: false,
      functionRan: false,
      totalTimeArr: [],
      stop: false,
      indexCondition: false,
      tabataRounds: 0,
      workRoundsIndex: 0,
      restRoundsIndex: 0,
      tabataMinutesView: 0,
      tabataRestView: 0,
      tabataRest: 0,
      tabataMinutes: 0,
      circleRest: false,
      tabataCompleteRounds: 0,
      tabataRoundCon: false,
      tabataShow: false,
      counter: '00',
      second: '00',
      restMin: '00',
      restSec: '00',
      secArray: [],
      minArray: [],
      restMinArray: [],
      restSecArray: [],
      tabataCondition: false,
      fullScreen: false,
      iconChange: 'fit-screen',
      imageUri: '',
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log(nextProps.forTimeRound, 'Kono prop aya')
    this.setState({
      forTimeRound: nextProps.forTimeRound,
      timeLap: nextProps.timeLap,
      activity: nextProps.activity,
      roundLap: nextProps.roundLap,
      totalTimeArr: nextProps.totalTimeArr,
      tabataRounds: nextProps.tabataRounds,
      tabataRest: nextProps.tabataRest,
      tabataMinutes: nextProps.tabataMinutes,
    });
  }
  startDown = () => {
    const {index, miliseconds, rest, indexRest} = this.state;
    this.secCountDown = setInterval(() => {
      var num = (Number(this.state.second) - 1).toString();
      var count = this.state.counter;
      if (this.state.second == '00') {
        num = '59';
        count = (Number(this.state.counter) - 1).toString();
      }
      this.setState({
        counter: count.length == 1 ? '0' + count : count,
        second: num.length == 1 ? '0' + num : num,
      });
    }, 1005);
  };
  startDownRest = () => {
    const {index, miliseconds, rest, indexRest} = this.state;
    this.secCountDownRest = setInterval(() => {
      var num = (Number(this.state.restSec) - 1).toString();
      var count = this.state.restMin;
      if (this.state.restSec == '00') {
        num = '59';
        count = (Number(this.state.restMin) - 1).toString();
      }
      this.setState({
        restMin: count.length == 1 ? '0' + count : count,
        restSec: num.length == 1 ? '0' + num : num,
      });
    }, 1005);
  };
  noteFn = () => {
    if (
      this.props.note == true &&
      this.state.page1 == false &&
      this.state.meter == false &&
      this.state.page2 == false
    ) {
      this.changeLayoutMeter();
    } else if (this.state.page1 == true && this.props.note == false) {
      this.changeLayoutMeter();
    }
  };
  prFn = () => {
    if (
      this.props.pr == true &&
      this.state.page1 == false &&
      this.state.meter == false &&
      this.state.page2 == false
    ) {
      this.changeLayoutPr();
    } else if (this.props.pr == false && this.state.page2 == true) {
      this.changeLayoutPr();
    }
  };
  onPage1Next = () => {
    this.setState({page2: !this.state.page2, page1: !this.state.page1});
  };
  onPage3Next = () => {
    this.setState({page3: !this.state.page3, page2: !this.state.page2});
  };
  onHandleEdit = () => {
    this.setState({
      edit: true,
    });
    setTimeout(() => {
      this.textInputRef.focus();
    }, 300);
  };
  onHandleSave = () => {
    this.setState({
      edit: false,
    });
  };
  changeLayoutMeter = () => {
    if (
      this.state.emomGraphShow == false &&
      this.props.forTimeRoundCon == false
    ) {
      if (
        this.state.page1 == false &&
        this.state.meter == false &&
        this.state.page2 == false
      ) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({meter: !this.state.meter, page1: !this.state.page1});
      } else if (this.state.page1 == true) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({meter: !this.state.meter, page1: !this.state.page1});
      }
    }
  };
  changeLayoutPr = () => {
    if (
      this.state.emomGraphShow == false &&
      this.props.forTimeRoundCon == false
    ) {
      if (
        this.state.page1 == false &&
        this.state.meter == false &&
        this.state.page2 == false
      ) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({meter: !this.state.meter, page2: !this.state.page2});
      } else if (this.state.page2 == true) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({meter: !this.state.meter, page2: !this.state.page2});
      }
    }
  };
  activityAddWithData = () => {
    const {
      index,
      activity,
      color,
      colorIndex,
      timeLap,
      activityRound,
      roundIndex,
    } = this.state;
    this.setState(
      {
        actDataCondition: true,
        amrapGraphShow: true,
        indexCondition: true,
      },
      () => this.props.indexCondition(this.state.indexCondition),
    );
    // console.log('its running')
    setTimeout(() => {
      // console.log(this.state.roundDataCondition, 'roundDataCondition')
      this.addActivityGraph();
      this.setState({actCondition: false, activityShown: activity});
      // console.log(this.state.activityDataCut.length, 'run activity')
    }, 100);
  };

  addActivityDataCut = () => {
    if (
      this.state.actDataCondition == true &&
      this.state.roundDataCondition == false
    ) {
      this.setState({
        activityDataCut: this.state.activity,
        roundDataCondition: true,
      });
      setTimeout(() => {
        this.setState({actDataCondition: false});
      }, 100);
    }
  };

  getTheFirstValue = () => {
    this.setState({activityDataCut: this.state.activityDataCut.slice(1)});
  };

  addProgressBar = () => {
    let {
      activity,
      color,
      colorIndex,
      timeLap,
      activityRound,
      roundIndex,
      timeLapIndex,
    } = this.state;
    this.getTheFirstValue();
    let allData = this.state.dataGraph.slice();
    // let changeNum = timeLap[timeLapIndex].split(':');
    // let time1 = Number(changeNum[0]);
    // let time2 = Number('.0'+changeNum[1]);
    // console.log(time1)
    // console.log(time2)
    // console.log(changeNum)
    setTimeout(() => {
      allData.push({
        timeLap: timeLap[timeLapIndex],
        color: color[colorIndex],
        width: width * 0.1, //time2 >= .006 && time1 == 0 ? width * (.06 + time2): time1 == 1 ?width * (.1 + time2):time1 >= 1 ?width * .1 + time2:
      });
    }, 20);
    this.setState({
      dataGraph: allData,
      index: this.state.index + 1,
      colorIndex: this.state.colorIndex == 0 ? 1 : 0,
      timeLapIndex: this.state.timeLapIndex + 1,
    });
    console.log(clc.greenBright('activity gayayayayayay'));
  };

  addActivityGraph = () => {
    const {
      index,
      activity,
      color,
      colorIndex,
      timeLap,
      activityRound,
      roundIndex,
    } = this.state;

    if (index == activity.length) {
    } else {
      this.addProgressBar();
      setTimeout(() => {
        this.makeRounad();
      }, 50);
    }
  };
  makeRounad = () => {
    const {
      index,
      activity,
      color,
      colorIndex,
      timeLap,
      activityRound,
      roundIndex,
      roundLap,
      roundLapIndex,
      totalTimeArr,
    } = this.state;
    // console.log(index, activity.length, 'chaaala round gayayayayayay')
    if (index == activity.length) {
      setTimeout(() => {
        let roundData = this.state.round.slice();
        roundData.push({
          name: 'Round',
          roundLap: roundLap[roundLapIndex],
          totalTime: totalTimeArr[roundLapIndex],
        });
        this.setState({round: roundData});
      }, 100);
      let addData = this.state.graph.slice();
      addData.push(this.state.dataGraph);
      setTimeout(() => {
        this.setState({
          graph: addData,
          index: 0,
          roundIndex: this.state.roundIndex + 1,
          roundLapIndex: this.state.roundLapIndex + 1,
        });
        setTimeout(() => {
          this.setState(
            {
              dataGraph: [],
              activityDataCut: this.state.activity,
              colorIndex: 0,
              roundDataCondition: false,
              actDataCondition: true,
            },
            () => this.props.roundIndex(this.state.roundIndex),
          );
        }, 200);
      }, 300);
      this.setState({functionRan: true});
      // console.log('round gayayayayayay')
    } else {
      // console.log('Esles Chala')
      this.setState({functionRan: false});
    }
  };
  roundMakeRounad = () => {
    // console.log('Function Chal Gya')
    const {
      index,
      activity,
      color,
      colorIndex,
      timeLap,
      activityRound,
      roundIndex,
      roundLap,
      totalTimeArr,
      roundLapIndex,
    } = this.state;
    setTimeout(() => {
      let roundData = this.state.round.slice();
      roundData.push({
        name: 'Round',
        roundLap: roundLap[roundLapIndex],
        totalTime: totalTimeArr[roundLapIndex],
      });
      this.setState({round: roundData});
    }, 100);
    let addData = this.state.graph.slice();
    addData.push(this.state.dataGraph);
    setTimeout(() => {
      this.setState({
        graph: addData,
        index: 0,
        roundIndex: this.state.roundIndex + 1,
        roundLapIndex: this.state.roundLapIndex + 1,
      });
      setTimeout(() => {
        this.setState(
          {
            dataGraph: [],
            actDataCondition: true,
            roundDataCondition: false,
            colorIndex: 0,
          },
          () => this.props.roundIndex(this.state.roundIndex),
        );
      }, 200);
    }, 500);
  };

  RoundData = () => {
    const {index, activity, color, colorIndex, timeLap} = this.state;
    this.setState({
      roundCondition: true,
      amrapGraphShow: true,
    });
    setTimeout(() => {
      this.setState({roundCondition: false});
    }, 100);
    if (index == activity.length) {
      // this.setState({ roundIndex:roundIndex + 1 });
    } else {
      this.setState({actDataCondition: true, activityShown: activity});
      setTimeout(() => {
        this.addActivityDataCut();
      }, 100);
      setTimeout(() => {
        this.addRoundGraph();
        setTimeout(() => {
          this.roundMakeRounad();
        }, 300);
      }, 500);
    }
  };

  addRoundGraph = () => {
    let {
      activity,
      color,
      colorIndex,
      timeLap,
      activityRound,
      roundIndex,
      timeLapIndex,
      index,
      activityDataCut,
      roundLapIndex,
      roundLap,
    } = this.state;
    if (this.state.index == this.state.activity.length) {
    } else {
      let allData = this.state.dataGraph.slice();
      // let changeNum = timeLap[timeLapIndex].split(':');
      // let time1 = Number(changeNum[0]);
      // let time2 = Number('.0'+changeNum[1]);
      allData.push({
        timeLap: timeLap[timeLapIndex],
        color: '#FF6100',
        width:
          activityDataCut.length == 1
            ? width * 0.1
            : activityDataCut.length == 2
            ? width * 0.2
            : activityDataCut.length == 3
            ? width * 0.3
            : activityDataCut.length == 4
            ? width * 0.4
            : activityDataCut.length == 5
            ? width * 0.5
            : activityDataCut.length == 6
            ? width * 0.6
            : activityDataCut.length == 7
            ? width * 0.7
            : activityDataCut.length == 8
            ? width * 0.8
            : width * 0.9,
        // width: width * .1 //time2 >= .006 && time1 == 0 ? width * (.06 + time2): time1 == 1 ?width * (.1 + time2):time1 >= 1 ?width * .1 + time2:
      });
      this.setState({dataGraph: allData});
      setTimeout(() => {
        this.setState({
          timeLapIndex: timeLapIndex + 1,
          colorIndex: colorIndex == 0,
        });
      }, 300);
    }
  };
  _renderActivityShown = ({item}) => {
    return (
      <View
        style={{
          width: width * 0.09,
          marginHorizontal: width * 0.005,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextTicker
          style={{
            fontSize: width * 0.017,
            color: '#FF6100',
            fontFamily: Fonts.NunitoExtraBold,
            textAlign: 'center',
          }}
          duration={5000}
          loop
          scroll
          repeatSpacer={50}
          marqueeDelay={2000}>
          {item}
        </TextTicker>
      </View>
    );
  };
  _renderRoundName = ({item, index}) => {
    return (
      <Text
        style={{
          fontSize: width * 0.015,
          color: 'white',
          fontFamily: Fonts.VarelaRoundRegular,
          textAlign: 'center',
          top: width * 0.001,
        }}>
        {item.name + (index + 1)}
      </Text>
    );
  };
  _renderRoundTime = ({item, index}) => {
    return (
      <Text
        style={{
          fontSize: width * 0.015,
          color: 'white',
          fontFamily: Fonts.VarelaRoundRegular,
          textAlign: 'center',
          width: width * 0.2,
          borderBottomWidth: width * 0.001,
          borderTopWidth: width * 0.001,
          marginBottom: height * 0.0047,
        }}>
        {item.roundLap + ' / ' + item.totalTime}
      </Text>
    );
  };

  _renderMyRound2 = ({item, index}) => {
    const {activity, graph, roundIndex} = this.state;
    return (
      <View style={{flex: 1, flexDirection: 'row'}} key={index}>
        <View>
          <FlatList
            horizontal={true}
            style={{marginLeft: width * 0.005, flex: 1}}
            data={this.state.graph[index]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={(item, index) => this._renderMyList(item, index)}
          />
        </View>
      </View>
    );
  };
  _renderMyRound = ({item, index}) => {
    const {activity, graph, roundIndex} = this.state;
    return (
      <View
        style={{flex: 1, flexDirection: 'row', marginRight: width * 0.25}}
        key={index}>
        <Text
          style={{
            fontSize: width * 0.015,
            color: 'white',
            fontFamily: Fonts.VarelaRoundRegular,
            textAlign: 'center',
            top: width * 0.001,
          }}>
          {item.name + (index + 1)}
        </Text>
        <View>
          <FlatList
            horizontal={true}
            style={{marginLeft: width * 0.005, flex: 1}}
            data={this.state.graph[index]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={(item, index) => this._renderMyList(item, index)}
          />
        </View>
        <Text
          style={{
            fontSize: width * 0.015,
            color: 'white',
            fontFamily: Fonts.VarelaRoundRegular,
            textAlign: 'center',
            width: width * 0.2,
            marginHorizontal: width * 0.005,
            marginRight: width * 0.1,
          }}>
          {item.roundLap + ' / ' + item.totalTime}
        </Text>
      </View>
    );
  };
  _renderMyList = ({item, index}) => {
    let {activity, graph} = this.state;
    return (
      <View
        style={{flex: 1, width: item.width, height: width * 0.025}}
        key={index}>
        <Progress.Bar
          progress={this.state.points}
          width={item.width}
          height={width * 0.02}
          borderRadius={0}
          borderWidth={width * 0.001}
          color={item.color}
          borderColor={item.color}
          animationType="timing"
          animated={true}
          style={{
            position: 'absolute',
          }}
        />
        <Text
          style={{
            fontSize: width * 0.015,
            color: 'white',
            fontFamily: Fonts.VarelaRoundRegular,
            textAlign: 'center',
          }}>
          {item.timeLap}
        </Text>
      </View>
    );
  };
  _renderEmomGraph = ({item, index}) => {
    const {activity, graph, roundIndex} = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        key={index}>
        <View
          style={{
            width:
              this.state.graphCondition == true ? width * 0.05 : width * 0.1,
            height: width * 0.025,
          }}>
          <Text
            style={{
              fontSize: width * 0.015,
              color: 'white',
              fontFamily: Fonts.VarelaRoundRegular,
              textAlign: 'center',
              left: width * 0.01,
              top: width * 0.001,
            }}>
            {index + 1}
          </Text>
        </View>
        <View
          style={{
            width:
              this.state.graphCondition == true ? item.width : width * 0.64,
            height: width * 0.025,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Progress.Bar
            progress={this.state.points}
            width={
              this.state.graphCondition == true ? item.width : width * 0.64
            }
            height={width * 0.02}
            borderRadius={0}
            borderWidth={width * 0.001}
            color={item.color}
            borderColor={item.color}
            animationType="timing"
            animated={true}
            style={{
              position: 'absolute',
            }}
          />
          <Text
            style={{
              fontSize: width * 0.015,
              color: 'white',
              fontFamily: Fonts.VarelaRoundRegular,
              textAlign: 'center',
            }}>
            {item.timeLap}
          </Text>
        </View>
        <View
          style={{
            width:
              this.state.graphCondition == true ? width * 0.15 : width * 0.13,
            height: width * 0.025,
          }}>
          <TextTicker
            style={{
              fontSize: width * 0.015,
              color: 'white',
              fontFamily: Fonts.VarelaRoundRegular,
            }}
            duration={5000}
            loop
            scroll
            repeatSpacer={50}
            marqueeDelay={2000}>
            {item.activity}
          </TextTicker>
        </View>
      </View>
    );
  };
  addNewView = () => {
    const {
      activity,
      color,
      colorIndex,
      timeLap,
      activityRound,
      roundIndex,
      timeLapIndex,
      index,
      activityDataCut,
      roundLapIndex,
      roundLap,
    } = this.state;
    this.setState(
      ({uniqueValue}) => ({
        uniqueValue: uniqueValue + 1,
      }),
      () => this.props.emomMinutesShow(this.state.uniqueValue + 1),
    );
    let allData = this.state.round.slice();
    allData.push({
      timeLap: '01:00',
      color:
        activity[this.state.index] == 'Rest' ? '#FF6100' : color[colorIndex],
      width: width * 0.55,
      activity: activity[this.state.index],
    });
    this.setState({round: allData});
    setTimeout(() => {
      this.setState({
        index: this.state.index + 1,
        colorIndex: colorIndex == 0 ? 1 : 0,
      });
    }, 100);
    setTimeout(() => {
      this.doActivityIndexNull();
    }, 200);
  };
  doActivityIndexNull = () => {
    const {activity, index} = this.state;
    if (this.state.index == this.state.activity.length) {
      console.log('consladk askhfalkdj lsa bana');
      console.log(clc.xterm(196)('Program Khatam hogaya Emom Center'));
      if (this.props.serialConnected) {
        RNSerialport.writeString('X');
      }
      this.setState({
        index: 0,
      });
    }
  };
  checkTabataRounds = () => {
    const {
      tabataCompleteRounds,
      graph,
      duration,
      index,
      tabataRounds,
      workRoundsIndex,
      restRoundsIndex,
    } = this.state;

    if (workRoundsIndex == restRoundsIndex) {
      this.setState({tabataCompleteRounds: tabataCompleteRounds + 1}, () =>
        this.props.tabataCompleteRounds(this.state.tabataCompleteRounds),
      );
    }
  };
  handleScreenShot = (child) => {
    this.setState({imageUri: child}, () =>
      this.props.screeShot(this.state.imageUri),
    );
  };
  handleFullScreen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState(
      {
        fullScreen: !this.state.fullScreen,
        iconChange: !this.state.fullScreen ? 'cancel' : 'fit-screen',
      },
      () => this.props.fullScreen(this.state.fullScreen),
    );
  };
  render() {
    // console.log(this.state.index, 'amrap bana')
    // console.log(this.state.activity.length, 'emomMinutes bana')
    // console.log(this.state.tabataRounds, 'tabataRounds bana')
    // console.log(this.state.round, 'time bata bana')
    this.noteFn();
    this.prFn();
    if (
      this.props.roundCondition == true &&
      this.state.roundCondition == false
    ) {
      if (this.props.emomMinutes == 0) {
        this.RoundData();
      }
    }
    if (this.props.actCondition == true && this.state.actCondition == false) {
      if (this.props.emomMinutes == 0) {
        this.setState({actCondition: true});
        // console.log('kiya ye chala')
        setTimeout(() => {
          this.activityAddWithData();
        }, 20);
        setTimeout(() => {
          this.addActivityDataCut();
        }, 50);
      }
    }
    if (this.props.playOnOrOff == true && this.state.isShow == false) {
      if (!this.props.amrap == 0) {
        // console.log('amrapCondition')
        this.setState({isShow: true, amrapGraphShow: true});
        setTimeout(() => {
          if (!this.state.functionRan == true) {
            this.roundMakeRounad();
          }
          this.setState({isShow: false});
          this.setState({points: 1});
        }, 1000 * this.props.amrap + 2 * 1000);
      }
      if (!this.props.emomMinutes == 0) {
        // console.log('emomCondition')
        this.setState(
          {
            isShow: true,
            circle: true,
            graphCondition: true,
            emomGraphShow: true,
            tabataShow: false,
          },
          () => this.props.emomMinutesShow(this.state.uniqueValue + 1),
        );
        const timer1 = setInterval(() => {
          this.addNewView();
        }, 999 * (6 * 10));
        setTimeout(() => {
          this.setState({isShow: false, circle: false, graphCondition: false});
          setTimeout(() => {
            clearInterval(timer1);
            setTimeout(() => {
              this.setState({
                index: 0,
                uniqueValue: 0,
                points: 1,
                colorIndex: 0,
              });
            }, 500);
          }, 300);
        }, 1000 * this.props.emomMinutes);
      }
      if (!this.state.tabataRounds == 0) {
        // console.log('tabataCondition')
        handleAmrapTime(this.props, this.state);
        handleTabataRestTime(this.props, this.state);
        const {
          tabataCompleteRounds,
          tabataRest,
          tabataMinutes,
          tabataMinutesView,
          tabataRestView,
          tabataRounds,
          workRoundsIndex,
          restRoundsIndex,
        } = this.state;
        const min = Number(this.state.tabataMinutes);
        const rest = Number(this.state.tabataRest);
        this.startDown();
        this.setState({
          isShow: true,
          circle: true,
          tabataMinutesView: this.state.tabataMinutesView + 1,
          tabataShow: true,
          second: this.state.secArray[0],
          counter: this.state.minArray[0],
          restMin: this.state.restMinArray[0],
          restSec: this.state.restSecArray[0],
          tabataCondition: true,
        });

        setTimeout(() => {
          this.startDownRest();
          RNBeep.beep(false);
          this.setState({
            circleRest: true,
            circle: false,
            workRoundsIndex: this.state.workRoundsIndex + 1,
            tabataRestView: this.state.tabataRestView + 1,
            tabataMinutesView: this.state.tabataMinutesView + 1,
          });
          handleTabataRestTime(this.props, this.state);
          setTimeout(() => {
            clearInterval(this.secCountDown);
          }, 50);
        }, min * 999);

        this.tabataView = setInterval(() => {
          // console.log('set Min')
          handleAmrapTime(this.props, this.state);
          RNBeep.beep(false);
          this.setState({
            restRoundsIndex: this.state.restRoundsIndex + 1,
            circle: true,
            circleRest: false,
            tabataRestView: this.state.tabataRestView + 1,
            second: this.state.secArray[0],
            counter: this.state.minArray[0],
          });
          this.tabataViewTimeOut = setTimeout(() => {
            // console.log('set Rest')
            handleTabataRestTime(this.props, this.state);
            RNBeep.beep(false);
            this.setState({
              workRoundsIndex: this.state.workRoundsIndex + 1,
              circleRest: true,
              circle: false,
              tabataMinutesView: this.state.tabataMinutesView + 1,
              restMin: this.state.restMinArray[0],
              restSec: this.state.restSecArray[0],
            });
            this.startDownRest();
            setTimeout(() => {
              clearInterval(this.secCountDown);
            }, 50);
          }, min * 999);
          this.checkTabataRounds();
          setTimeout(() => {
            clearInterval(this.secCountDownRest);
          }, 50);
          this.startDown();
        }, (min + rest) * 999);
      }
    }
    if (this.props.clearData == true && this.state.clearData == false) {
      this.setState(
        {
          graph: [],
          round: [],
          dataGraph: [],
          activity: [],
          totalTimeArr: [],
          activityDataCut: [],
          activityShown: [],
          timeLap: [],
          clearData: true,
          points: 0,
          index: 0,
          timeLapIndex: 0,
          roundIndex: 0,
          roundLapIndex: 0,
          amrapGraphShow: false,
          emomGraphShow: false,
          functionRan: false,
          indexCondition: false,
          tabataRounds: 0,
          workRoundsIndex: 0,
          restRoundsIndex: 0,
          tabataMinutesView: 0,
          tabataRestView: 0,
          tabataRest: 0,
          tabataMinutes: 0,
          circleRest: false,
          tabataCompleteRounds: 0,
          tabataRoundCon: false,
          tabataShow: false,
          tabataCondition: true,
          counter: '00',
          second: '00',
          restMin: '00',
          restSec: '00',
          secArray: [],
          minArray: [],
          restMinArray: [],
          restSecArray: [],
          isShow: false,
        },
        () => this.props.indexCondition(this.state.indexCondition),
      );
      setTimeout(() => {
        this.setState({clearData: false});
      }, 100);
    }
    if (this.props.forTimeCon == true && this.state.forTimeRoundCon == false) {
      this.setState({forTimeRoundCon: true});
      setTimeout(() => {
        this.setState({points: 1});
      }, 3500);
      setTimeout(() => {
        this.setState({forTimeRoundCon: false});
      }, 100);
    }
    if (this.props.stop == true && this.state.stop == false) {
      let {activityDataCut} = this.state;
      // console.log(activityDataCut.length, 'ites run')
      let allData = this.state.dataGraph.slice();
      allData.push({
        timeLap: '00:00',
        color: '#FF6100',
        width:
          activityDataCut.length == 1
            ? width * 0.1
            : activityDataCut.length == 2
            ? width * 0.2
            : activityDataCut.length == 3
            ? width * 0.3
            : activityDataCut.length == 4
            ? width * 0.4
            : activityDataCut.length == 5
            ? width * 0.5
            : activityDataCut.length == 6
            ? width * 0.6
            : activityDataCut.length == 7
            ? width * 0.7
            : activityDataCut.length == 8
            ? width * 0.8
            : width * 0.9,
      });
      this.setState({dataGraph: allData});
      this.setState({stop: true});
      setTimeout(() => {
        this.roundMakeRounad();
      }, 1000);
      setTimeout(() => {
        this.setState({points: 1});
      }, 3500);
      setTimeout(() => {
        this.setState({stop: false});
      }, 50);
    }
    if (this.props.tabataCon == true && this.state.tabataRoundCon == false) {
      this.setState({
        tabataRoundCon: true,
      });
      setTimeout(() => {
        clearInterval(this.closeInterval);
      }, 5000);
      this.closeInterval = setInterval(() => {
        clearInterval(this.tabataView);
        clearInterval(this.secCountDown);
        clearInterval(this.secCountDownRest);
        clearTimeout(this.tabataViewTimeOut);
      }, 200);
      this.setState({circle: false, circleRest: false});
      setTimeout(() => {
        this.setState({
          tabataRoundCon: false,
          counter: '00',
          second: '00',
          restMin: '00',
          restSec: '00',
        });
      }, 100);
    }
    // console.log(this.state.tabataRest, 'tabataRest Bata')
    // console.log(this.state.tabataRounds, 'tabataRounds Bata')
    // console.log(this.state.tabataMinutes, 'tabataMinutes Bata')

    const {
      activity,
      graph,
      duration,
      index,
      tabataRounds,
      workRoundsIndex,
      restRoundsIndex,
    } = this.state;
    return (
      <ScrollView
        style={{
          width: width * 1,
          height: this.state.fullScreen ? height * 1 : height * 0.28, //.44 long 98
        }}>
        <View style={style.centerContainer}>
          {/*  */}
          <View
            style={{
              width: !this.state.meter ? width * 0.957 : width * 0.668,
              height: this.state.fullScreen ? height * 1 : height * 0.28,
              backgroundColor: '#010101',
              // backgroundColor: 'blue',
              borderWidth: height * 0.005,
              borderColor: '#5F4B2F',
              borderRadius: width * 0.003,
            }}>
            <View
              style={{
                justifyContent: this.state.fullScreen
                  ? 'space-between'
                  : 'center',
                flexDirection: 'row',
                position: 'relative',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: width * 0.02,
                  fontFamily: Fonts.VarelaRoundRegular,
                  color: 'white',
                  left: width * 0.005,
                }}>
                Activity Time Log
              </Text>
              {this.state.fullScreen && (
                <MemorySave
                  screeShot={this.handleScreenShot}
                  fullScreen={this.state.fullScreen}
                />
              )}
              {this.props.showFullScreen && (
                <View
                  style={{
                    position: this.state.fullScreen ? 'relative' : 'absolute',
                    right: width * 0.005,
                  }}>
                  <TouchableOpacity onPress={this.handleFullScreen}>
                    <Screen
                      name={this.state.iconChange}
                      size={width * 0.03}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            {this.state.emomGraphShow == true ? (
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#010101',
                  flexDirection: 'row',
                }}>
                {this.state.graphCondition == true ? (
                  <View
                    style={{
                      marginLeft: width * 0.01,
                      marginTop: height * 0.007,
                      width: height * 0.255,
                      height: height * 0.255,
                      backgroundColor: 'white',
                      borderRadius: width * 0.3,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        width: height * 0.23,
                        height: height * 0.23,
                        backgroundColor: 'black',
                        borderRadius: width * 0.3,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      key={this.state.uniqueValue}>
                      <CountdownCircleTimer
                        isPlaying={this.state.circle}
                        size={height * 0.21}
                        strokeWidth={height * 0.015}
                        duration={duration}
                        colors="#0083FF"
                        trailColor="#ADADAD"
                        onComplete={() => {
                          // do your stuff here
                          return [true, 1000]; // repeat animation in 1.5 seconds
                        }}>
                        {
                          ({remainingTime, animatedColor}) => (
                            <View>
                              <Animated.Text
                                style={{
                                  fontSize: width * 0.03,
                                  color: '#FF6100',
                                  fontFamily: Fonts.VarelaRoundRegular,
                                  textAlign: 'center',
                                }}>
                                {remainingTime}
                              </Animated.Text>
                              <View
                                style={{
                                  width: width * 0.09,
                                  alignItems: 'center',
                                }}>
                                <TextTicker
                                  style={{
                                    fontSize: width * 0.012,
                                    color: '#FF6100',
                                    fontFamily: Fonts.VarelaRoundRegular,
                                    marginBottom: width * 0.02,
                                  }}
                                  duration={8000}
                                  loop
                                  scroll
                                  repeatSpacer={50}
                                  marqueeDelay={2000}>
                                  {activity[index]}
                                </TextTicker>
                              </View>
                            </View>
                          )
                          // )
                        }
                      </CountdownCircleTimer>
                    </View>
                  </View>
                ) : null}
                <View
                  style={{
                    flex: 1,
                  }}>
                  <View
                    style={{
                      height: width * 0.027,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        width: width * 0.09,
                        marginHorizontal: width * 0.005,
                        fontSize: width * 0.02,
                        color: 'white',
                        fontFamily: Fonts.VarelaRoundRegular,
                        textAlign: 'center',
                        left:
                          this.state.graphCondition == true
                            ? width * 0.005
                            : width * 0.038,
                      }}>
                      Minute
                    </Text>
                    <Text
                      style={{
                        width: width * 0.09,
                        marginHorizontal: width * 0.005,
                        fontSize: width * 0.02,
                        color: 'white',
                        fontFamily: Fonts.VarelaRoundRegular,
                        textAlign: 'center',
                        right:
                          this.state.graphCondition == true
                            ? width * 0.04
                            : width * 0.013,
                      }}>
                      Progress Bar
                    </Text>
                    <Text
                      style={{
                        width: width * 0.09,
                        marginHorizontal: width * 0.005,
                        fontSize: width * 0.02,
                        color: 'white',
                        fontFamily: Fonts.VarelaRoundRegular,
                        textAlign: 'center',
                        right:
                          this.state.graphCondition == true
                            ? width * 0.045
                            : width * 0.046,
                      }}>
                      Activity
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <FlatList
                      data={this.state.round}
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{
                        justifyContent: 'space-around',
                        flexGrow: 0,
                      }}
                      horizontal={false}
                      numColumns={1}
                      renderItem={(item, index) =>
                        this._renderEmomGraph(item, index)
                      }
                    />
                  </View>
                </View>
              </View>
            ) : null}
            {this.state.amrapGraphShow == true ? (
              <View style={{flex: 1}}>
                <View
                  style={{
                    marginLeft: width * 0.068,
                    alignItems: 'center',
                    marginRight: width * 0.2,
                    height: width * 0.03,
                    flexDirection: 'row',
                  }}>
                  <View>
                    <FlatList
                      horizontal={true}
                      style={{flex: 1}}
                      data={this.state.activityShown}
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      renderItem={(item) => this._renderActivityShown(item)}
                    />
                  </View>
                  {this.state.activityShown.length == 0 ? null : (
                    <Text
                      style={{
                        fontSize: width * 0.017,
                        color: 'white',
                        fontFamily: Fonts.NunitoExtraBold,
                        textAlign: 'center',
                        marginRight: width * 0.01,
                        width: width * 0.2,
                        marginHorizontal: width * 0.005,
                      }}>
                      Round / Total Time
                    </Text>
                  )}
                </View>
                <FlatList
                  style={{margin: width * 0.005, flex: 1}}
                  data={this.state.round}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={(item, index) => this._renderMyRound(item, index)}
                />
              </View>
            ) : null}
            {this.state.tabataShow == true ? (
              <View style={style.tabataContainer}>
                <View style={style.tabataInner}>
                  {/* <View style={style.progressWhite}> */}
                  <View
                    style={style.progressBlack}
                    key={this.state.tabataMinutesView}>
                    <CountdownCircleTimer
                      isPlaying={this.state.circle}
                      size={height * 0.21}
                      strokeWidth={height * 0.015}
                      duration={this.state.tabataMinutes}
                      colors="#0083FF"
                      trailColor="#ADADAD"
                      onComplete={() => {
                        // do your stuff here
                        return [true, 994]; // repeat animation in 1.5 seconds
                      }}>
                      {
                        ({remainingTime, animatedColor}) => (
                          <View>
                            <Animated.Text style={style.progressAnimatedText}>
                              {this.state.counter + ':' + this.state.second}
                            </Animated.Text>
                            {/* <View style={{ width: width * .09, alignItems: 'center' }}>
                             <Text
                               style={style.progressTitleText}
                             >
                               Work
                             </Text>
                           </View> */}
                          </View>
                        )
                        // )
                      }
                    </CountdownCircleTimer>
                  </View>
                  {/* </View> */}
                  <View style={style.progressRoundsContainer}>
                    <Text style={style.progressRoundsText}>
                      {workRoundsIndex}/{tabataRounds} Work
                    </Text>
                  </View>
                </View>
                <View style={style.tabataInner}>
                  {/* <View style={style.progressWhite}> */}
                  <View
                    style={style.progressBlack}
                    key={this.state.tabataRestView}>
                    <CountdownCircleTimer
                      isPlaying={this.state.circleRest}
                      size={height * 0.21}
                      strokeWidth={height * 0.015}
                      duration={this.state.tabataRest}
                      colors="#FF6100"
                      trailColor="#ADADAD"
                      onComplete={() => {
                        // do your stuff here
                        return [true, 994]; // repeat animation in 1.5 seconds
                      }}>
                      {
                        ({remainingTime, animatedColor}) => (
                          <View>
                            <Animated.Text
                              style={[
                                style.progressAnimatedText,
                                // {color:"#FF6100"}
                              ]}>
                              {this.state.restMin + ':' + this.state.restSec}
                            </Animated.Text>
                            {/* <View style={{ width: width * .09, alignItems: 'center' }}>
                             <Text
                               style={[style.progressTitleText,]}
                             >
                               Rest
                             </Text>
                           </View> */}
                          </View>
                        )
                        // )
                      }
                    </CountdownCircleTimer>
                    {/* </View> */}
                  </View>
                  <View style={style.progressRoundsContainer}>
                    <Text style={[style.progressRoundsText]}>
                      {restRoundsIndex}/{tabataRounds} Rest
                    </Text>
                  </View>
                </View>
              </View>
            ) : null}
          </View>

          {/* note pad Screens */}
          {/* screen 1 */}
          <View
            style={{
              width: !this.state.page1 ? 0 : width * 0.29,
              overflow: 'hidden',
            }}>
            <View style={style.centerInnerText}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: width * 0.29,
                }}>
                <Text style={style.notePad}>NotePad</Text>
              </View>
              {!this.state.edit ? (
                <ScrollView
                  alwaysBounceVertical={true}
                  showsVerticalScrollIndicator={false}>
                  <Text style={style.noteTextInput}>{this.state.note1}</Text>
                </ScrollView>
              ) : (
                <TextInput
                  onChangeText={(note1) => this.setState({note1})}
                  value={this.state.note1}
                  placeholder="Type Here"
                  ref={(ref) => (this.textInputRef = ref)}
                />
              )}
              {!this.state.edit ? (
                <View style={style.headerMenuBotton}>
                  <Pressable
                    onPress={this.onHandleEdit}
                    android_ripple={{
                      color: 'white',
                      borderless: true,
                      radius: width * 0.05,
                    }}>
                    <Icon name="edit" size={height * 0.04} color="white" />
                  </Pressable>
                </View>
              ) : (
                <View style={style.headerMenuBotton}>
                  <Pressable
                    onPress={this.onHandleSave}
                    android_ripple={{
                      color: 'white',
                      borderless: true,
                      radius: width * 0.05,
                    }}>
                    <Icon name="save" size={height * 0.04} color="white" />
                  </Pressable>
                </View>
              )}
            </View>
          </View>
          {/* screen 2 */}
          <View
            style={{
              width: !this.state.page2 ? 0 : width * 0.29,
              overflow: 'hidden',
            }}>
            <View style={style.centerInnerText}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: width * 0.29,
                }}>
                <Text style={style.notePad}>Personal Record</Text>
              </View>
              {!this.state.edit ? (
                <ScrollView
                  alwaysBounceVertical={true}
                  showsVerticalScrollIndicator={false}>
                  <Text style={style.noteTextInput}>{this.state.note1}</Text>
                </ScrollView>
              ) : (
                <TextInput
                  onChangeText={(note1) => this.setState({note1})}
                  value={this.state.note1}
                  style={style.noteTextInput}
                  multiline={true}
                  placeholder="Type Here"
                  // ref={(ref) => (this.textInputRef = ref)}
                />
              )}
              {!this.state.edit ? (
                <View style={style.headerMenuBotton}>
                  <Pressable
                    onPress={this.onHandleEdit}
                    android_ripple={{
                      color: 'white',
                      borderless: true,
                      radius: width * 0.05,
                    }}>
                    <Icon name="edit" size={height * 0.04} color="white" />
                  </Pressable>
                </View>
              ) : (
                <View style={style.headerMenuBotton}>
                  <Pressable
                    onPress={this.onHandleSave}
                    android_ripple={{
                      color: 'white',
                      borderless: true,
                      radius: width * 0.05,
                    }}>
                    <Icon name="save" size={height * 0.04} color="white" />
                  </Pressable>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
