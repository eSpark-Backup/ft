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
  TextInput,
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
import {Fonts} from '../../utils/fonts';
import Program from './programs/index';
import Criteria1 from './criteria1/index';
import Criteria2 from './criteria2/index';
import MemoryRecall from './memoryRecall/index';

import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 80,
      isModalVisible: false,
      criteria: false,
      criteriaName: null,
      time: 0,
      round: 0,
      emomMinutes: 0,
      tabataMinutes: 0,
      tabataRest: 0,
      tabataRounds: 0,
    };
  }
  changeLayoutMeter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState({meter: !this.state.meter});
  };
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  handleDisableActivity = (child) => {
    // console.log(child, 'disable activity ka child')
    this.setState({disableActivity: child}, () =>
      this.props.disableActivity(this.state.disableActivity),
    );
  };
  handleCriteriaName = (child) => {
    // console.log(child, 'Criteria name is child')
    this.setState({criteriaName: child}, () =>
      this.props.criteriaName(this.state.criteriaName),
    );
  };
  handleTime = (child) => {
    this.setState({time: child}, () => this.props.minutes(this.state.time));
  };
  handleDataClear = (child) => {
    this.props.clearAll(child);
  };
  handleForTime = (child) => {
    this.setState({round: child}, () => this.props.forTime(this.state.round));
  };
  handleEmom = (child) => {
    this.setState({emomMinutes: child}, () =>
      this.props.emomMinutes(this.state.emomMinutes),
    );
  };
  handlePassingMinutes = (child) => {
    this.setState({tabataMinutes: child}, () =>
      this.props.tabataMinutes(this.state.tabataMinutes),
    );
    // console.log(child, 'child minutes')
  };
  handlePassingRest = (child) => {
    this.setState({tabataRest: child}, () =>
      this.props.tabataRest(this.state.tabataRest),
    );
    // console.log(child, 'child rest')
  };
  handlePassingRound = (child) => {
    this.setState({tabataRounds: child}, () =>
      this.props.tabataRounds(this.state.tabataRounds),
    );
    // console.log(child, 'child round ')
  };
  stopTimer = (child) => {
    this.props.stopTimer(child);
  };
  render() {
    const {criteria} = this.state;
    return (
      <View style={style.header13}>
        <Program
          circle={this.props.circle}
          minutes={this.handleTime}
          playOnOrOff={this.props.playOnOrOff}
          clearAll={this.handleDataClear}
          forTime={this.handleForTime}
          disableActivity={this.handleDisableActivity}
          emomMinutes={this.handleEmom}
          criteriaName={this.handleCriteriaName}
          stopTimer={this.stopTimer}
          tabataMinutes={this.handlePassingMinutes}
          tabataRest={this.handlePassingRest}
          tabataRounds={this.handlePassingRound}
          serialConnected={this.props.serialConnected}
          bluetoothOn={this.props.bluetoothOn}
        />
      </View>
    );
  }
}
