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
  FlatList,
  Pressable,
  Alert,
  TextInput,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
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
import Swiper from 'react-native-swiper';
import {selectActivity} from '../../Store/actions/program';
import {store} from '../../Store';
import {IconToggle, Icon} from 'react-native-material-ui';
import Activity from './activities/index';
import Reps from './reps/index';
import Run from 'react-native-vector-icons/MaterialCommunityIcons';
import {actiData1, actiData2, actiData3} from './activities/activityData';
import Modal from 'react-native-modal';
import {activity} from '../../config/activities';
import {reps} from '../../config/reps';
import Plus from 'react-native-vector-icons/Entypo';
import {Fonts} from '../../utils/fonts';
import {getTheEmomMinute} from './getTheEmomMinute';
import Carousel from 'react-native-snap-carousel';
import {criteria1} from '../../config/criteria1';
import {Searchbar} from 'react-native-paper';

import {selectTheGirls} from '../../Store/actions/theGirls';
import clc from 'cli-color';
import {RNSerialport} from 'react-native-serialport';
const {height, width} = Dimensions.get('window');
let carouselRef;
let flatListRef;
let carouselWidth = width * 0.01;

const rest = [
  {
    key: '1',
    value: 'Rest',
  },
  {
    key: '2',
    value: 'Rest',
  },
  {
    key: '3',
    value: 'Rest',
  },
  {
    key: '4',
    value: 'Rest',
  },
  {
    key: '5',
    value: 'Rest',
  },
];
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
const dataActivity3 = [
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 80,
      value: 'Activity 1',
      isModalVisible: false,
      dataActivity1: [],
      lenght: 1,
      nameActivity: '',
      nameReps: '',
      isShow: false,
      activity: [],
      activityRound: 0,
      circle: true,
      hardValue: 0,
      index: 0,
      roundCondition: false,
      clearData: false,
      forTimeRoundCon: false,
      emomMinutes: 0,
      emomCondition: false,
      hardValueDone: false,
      restView: false,
      reps: false,
      remaingRestValue: 0,
      onpressCondition: false,
      maxReps: false,
      maxValue: '',
      dataActivity: [],
      dataReps: [],
      activitypassed: false,
      activitypassed1: false,
      reqLength: 0,
      stop: false,
      masterDataActivity: [],
      search: '',
      isDataNull: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.circle == true) {
    }
    this.setState(
      {circle: nextProps.circle, hardValue: nextProps.hardValue},
      () => {
        if (nextProps.hardValue < 1 || nextProps.hardValue > 30) {
        } else {
          this.changeActivityColor();
        }
      },
    );
    // this.setState({hardValue:nextProps.hardValue});
  }

  handleActivity = (child) => {
    this.setState({value: child});
  };

  handleActivityRound = (child) => {
    this.setState({activityRound: child});
  };

  componentDidMount() {
    // console.log(this.state.dataAct.map(element => element.name),'Data act ka batao')
    // console.log(this.props.receiveDataFromChild,'Data act ka batao')
    this.handleFilterCriteria(store.getState()?.program.target);
    // this.kchKrYaar()

    // this.unsubscribe = store.subscribe(() => {

    //   console.log(store.getState().theGirls.acvitivies, 'acvitivies act ka batao kb chala')
    //   console.log(this.state.dataAct, 'Data act ka batao kb chala')
    //   console.log(this.props.receiveDataFromChild, 'Data act ka batao kb chala')
    //   this.handleFilterCriteria(store.getState().program.value);

    //   let { acvitivies } = store.getState().theGirls;

    //   this.setState({
    //     dataActivity1: acvitivies ? acvitivies : store.getState().theGirls,
    //   });
    //   // this.setState({
    //   //   dataAct: ,
    //   // });
    //   // const newActTaker;

    //   // setTimeout(() => {
    //   // this.setState({ activity: this.state.dataAct.map(element => element.name) })
    //   // this.props.activity(this.state.activity)
    //   // console.log(this.state.activity, 'what we are getin')
    //   // }, 10000);

    // });
  }

  kchKrYaar = () => {
    this.unsubscribe = store.subscribe(() => {
      // console.log(this.state.dataAct, 'Data act ka batao kb chala')
      this.handleFilterCriteria(store.getState().program.value);

      let {acvitivies} = store.getState().theGirls;

      this.setState({
        dataActivity1: acvitivies ? acvitivies : store.getState().theGirls,
      });
      // this.setState({
      //   dataAct: ,
      // });
      // const newActTaker;
      // if (this.state.activitypassed == false && this.props.activitypassed == true) {
      //   // setTimeout(() => {
      //   this.setState({ activity: store.getState().theGirls.acvitivies.map(element => element.name) })
      //   this.props.activity(this.state.activity)
      setTimeout(() => {
        // console.log(this.state.dataActivity1, 'state activity batao')
        this.setState({
          activity: this.state.dataActivity1.map((element) => element.name),
        });
        this.props.activity(this.state.activity);
        // console.log(this.state.activity.length, 'activity batao')
      }, 10);
    });
  };

  // componentWillUnmount() {
  //   this.setState({ activity: [] })
  // }
  // mapActivityNam = () => {
  //   // this.state.dataAct.map(element => this.setState({dataAct: element.name}))
  //   // this.setState({ dataAct:  })
  //   console.log(this.state.dataAct,'Data act ka batao')
  // }
  changeLayoutMeter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState({meter: !this.state.meter});
  };
  toggleModal = () => {
    if (this.state.isModalVisible == false) {
      this.setState({restView: false, reps: false, meter: false});
    } else {
      this.setState({
        isModalVisible: !this.state.isModalVisible,
        restView: false,
        reps: false,
        meter: false,
      });
    }
  };
  toggleModalReps = () => {
    this.changeLayoutMeter();
  };
  handleFilterCriteria(key) {
    let dataActivity = [];
    activity.filter((v) => {
      if (v.target == key) {
        dataActivity.push(v);
        this.setState({dataActivity});
        this.setState({masterDataActivity: dataActivity});
      }
    });
    let dataReps = [];
    reps.filter((v) => {
      if (v.target == key) {
        dataReps.push(v);
        this.setState({dataReps});
      }
    });
  }
  searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = this.state.masterDataActivity.filter(function (item) {
        const itemData = item.value
          ? item.value.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      if (newData.length == 0) {
        Keyboard.dismiss();
        this.setState({isDataNull: true});
      } else {
        this.setState({isDataNull: false});
      }
      this.setState({dataActivity: newData});
      this.setState({search: text});
      // setFilteredDataSource(newData);
      // setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      this.setState({dataActivity: this.state.masterDataActivity});
      this.setState({search: text});
      // setFilteredDataSource(masterDataSource);
      // setSearch(text);
    }
  };
  addTimeNeeded = () => {
    let allData = this.state.dataActivity1.slice();
    allData.push({
      name: this.state.nameActivity,
      reps: this.state.nameReps,
      color: 'black',
    });
    this.setState({dataActivity1: allData});
    setTimeout(() => {
      var a = this.state.dataActivity1.length;
      var b = this.state.emomMinutes;
      var total = b - a;
      this.setState({remaingRestValue: total, maxValue: ''});
    }, 20);
  };
  handleSelectProgram = (item) => {
    store.dispatch(selectActivity(item));
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  setInputText = (name) => {
    this.setState({inputText: name});
  };

  setEditedItem = (index) => {
    this.setState({editedItem: index});
  };
  handleEditItem = (value) => {
    let {activityRound} = this.state;
    this.setState({onpressCondition: true});
    if (value == '') {
      alert('First Select The Activity');
    } else if (value == 'Add+') {
      this.setState({addActivity: true});
    } else if (value == 'Rest') {
      this.setState({nameActivity: value, restView: true});
      this.changeLayoutMeter();
    } else {
      this.setState({nameActivity: value, reps: true});
      this.state.activity.push(value);
      this.changeLayoutMeter();
    }
  };
  handleEditReps = (value) => {
    this.setState({onpressCondition: false});
    let {activityRound, circle, nameActivity} = this.state;
    if (nameActivity == 'Rest') {
      // Rest Time 2
      if (value == 2) {
        this.state.activity.push(nameActivity);
        setTimeout(() => {
          this.state.activity.push(nameActivity);
          setTimeout(() => {
            this.props.activity(this.state.activity);
          }, 10);
        }, 10);
        let allData = this.state.dataActivity1.slice();
        allData.push(
          {name: nameActivity, reps: '1', color: 'black'},
          {name: nameActivity, reps: '1', color: 'black'},
        );
        this.setState({dataActivity1: allData, isModalVisible: false});
        setTimeout(() => {
          var a = this.state.dataActivity1.length;
          var b = this.state.emomMinutes;
          var total = b - a;
          this.setState({remaingRestValue: total});
          setTimeout(() => {
            this.toggleModal();
          }, 200);
        }, 10);
      }
      // Rest Time 3
      else if (value == 3) {
        this.state.activity.push(nameActivity);
        setTimeout(() => {
          this.state.activity.push(nameActivity);
          setTimeout(() => {
            this.state.activity.push(nameActivity);
            setTimeout(() => {
              this.props.activity(this.state.activity);
            }, 20);
          }, 20);
        }, 20);
        let allData = this.state.dataActivity1.slice();
        allData.push(
          {name: nameActivity, reps: '1', color: 'black'},
          {name: nameActivity, reps: '1', color: 'black'},
          {name: nameActivity, reps: '1', color: 'black'},
        );
        this.setState({dataActivity1: allData, isModalVisible: false});
        setTimeout(() => {
          var a = this.state.dataActivity1.length;
          var b = this.state.emomMinutes;
          var total = b - a;
          this.setState({remaingRestValue: total});
          setTimeout(() => {
            this.toggleModal();
          }, 200);
        }, 20);
      } else if (value == 4) {
        this.state.activity.push(nameActivity);
        setTimeout(() => {
          this.state.activity.push(nameActivity);
          setTimeout(() => {
            this.state.activity.push(nameActivity);
            setTimeout(() => {
              this.state.activity.push(nameActivity);
              setTimeout(() => {
                this.props.activity(this.state.activity);
              }, 20);
            }, 20);
          }, 20);
        }, 20);
        let allData = this.state.dataActivity1.slice();
        allData.push(
          {name: nameActivity, reps: '1', color: 'black'},
          {name: nameActivity, reps: '1', color: 'black'},
          {name: nameActivity, reps: '1', color: 'black'},
          {name: nameActivity, reps: '1', color: 'black'},
        );
        this.setState({dataActivity1: allData, isModalVisible: false});
        setTimeout(() => {
          var a = this.state.dataActivity1.length;
          var b = this.state.emomMinutes;
          var total = b - a;
          this.setState({remaingRestValue: total});
          setTimeout(() => {
            this.toggleModal();
          }, 200);
        }, 20);
      } else if (value == 5) {
        this.state.activity.push(nameActivity);
        setTimeout(() => {
          this.state.activity.push(nameActivity);
          setTimeout(() => {
            this.state.activity.push(nameActivity);
            setTimeout(() => {
              this.state.activity.push(nameActivity);
              setTimeout(() => {
                this.state.activity.push(nameActivity);
                setTimeout(() => {
                  this.props.activity(this.state.activity);
                }, 20);
              }, 20);
            }, 20);
          }, 20);
        }, 20);
        let allData = this.state.dataActivity1.slice();
        allData.push(
          {name: nameActivity, reps: '1', color: 'black'},
          {name: nameActivity, reps: '1', color: 'black'},
          {name: nameActivity, reps: '1', color: 'black'},
          {name: nameActivity, reps: '1', color: 'black'},
          {name: nameActivity, reps: '1', color: 'black'},
          // { name: "Push", reps: '1', color: 'black' },

          //   activity: {
          //     name: "Pull Ups", name: "Push Ups", name: "Sit-ups", name: "Squats"
          // },
        );
        this.setState({dataActivity1: allData, isModalVisible: false});
        setTimeout(() => {
          var a = this.state.dataActivity1.length;
          var b = this.state.emomMinutes;
          var total = b - a;
          this.setState({remaingRestValue: total});
          setTimeout(() => {
            this.toggleModal();
          }, 200);
        }, 20);
      }
      // Rest Time 1
      else {
        this.state.activity.push(nameActivity);
        let allData = this.state.dataActivity1.slice();
        allData.push({name: nameActivity, reps: '1', color: 'black'});
        this.setState({dataActivity1: allData, isModalVisible: false}, () =>
          this.props.activity(this.state.activity),
        );
        setTimeout(() => {
          var a = this.state.dataActivity1.length;
          var b = this.state.emomMinutes;
          var total = b - a;
          this.setState({remaingRestValue: total});
          setTimeout(() => {
            this.toggleModal();
          }, 200);
        }, 20);
      }
    } else {
      if (value == 'Max') {
        this.setState({
          maxReps: true,
        });
      } else {
        this.setState(
          {
            nameReps: value,
            activityRound: activityRound + 1,
            isModalVisible: false,
          },
          () => {
            this.props.activity(this.state.activity);
            this.props.activityRound(activityRound + 1);
          },
        );
        setTimeout(() => {
          if (value == '') {
            alert('First Select The Reps');
          } else {
            this.addTimeNeeded();
          }
          setTimeout(() => {
            this.toggleModal();
          }, 200);
        }, 10);
      }
    }
  };
  getValueSubmit = () => {
    let {activityRound, circle, nameActivity} = this.state;
    if (this.state.maxValue == '') {
      alert('Empty Not accepted');
    } else {
      this.setState(
        {
          nameReps: this.state.maxValue,
          activityRound: activityRound + 1,
          isModalVisible: false,
          maxReps: false,
        },
        () => {
          this.props.activity(this.state.activity);
          this.props.activityRound(activityRound + 1);
        },
      );
      setTimeout(() => {
        this.addTimeNeeded();
        setTimeout(() => {
          this.toggleModal();
        }, 200);
      }, 10);
    }
  };
  getAddActivity = () => {
    let {activityRound, circle, nameActivity} = this.state;
    if (this.state.addActivityValue == '') {
      alert('Empty Not accepted');
    } else {
      this.changeLayoutMeter();
      this.setState({
        nameActivity: this.state.addActivityValue,
        reps: true,
        addActivity: false,
      });
      this.state.activity.push(this.state.addActivityValue);
    }
  };

  removeRule = (e, index) => {
    e.preventDefault();
    const {dataActivity1, remaingRestValue} = this.state;
    dataActivity1.splice(index, 1);
    this.setState({
      dataActivity1: dataActivity1,
      activity: [],
      remaingRestValue: remaingRestValue + 1,
    });
    setTimeout(() => {
      dataActivity1.map((item) => this.state.activity.push(item.name));
    }, 10);
    setTimeout(() => {
      this.props.activity(this.state.activity);
    }, 10);
  };
  _renderMyListModal = ({item, index}) => {
    return (
      <View style={{flex: 1}} key={index}>
        <TouchableOpacity
          style={{
            width: width * 0.7,
            height: height * 0.065,
            borderWidth: height * 0.005,
            backgroundColor: 'black',
            borderColor: '#EDB0A6',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: width * 0.01,
            marginVertical: height * 0.005,
            paddingLeft: width * 0.01,
          }}
          onPress={() => {
            this.state.onpressCondition == false
              ? this.handleEditItem(item.value)
              : Alert.alert('Alert!!', 'Just Press One', [
                  {
                    text: 'Okay',
                    onPress: () => this.setState({onpressCondition: false}),
                  },
                ]);
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: width * 0.018,
              color: 'white',
              fontFamily: Fonts.VarelaRoundRegular,
            }}>
            {item.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  _renderMyListModalReps = ({item, index}) => {
    return (
      <View style={{flex: 1}} key={index}>
        <TouchableOpacity
          style={{
            width: width * 0.7,
            height: height * 0.065,
            borderWidth: height * 0.005,
            backgroundColor: 'black',
            borderColor: '#EDB0A6',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: width * 0.01,
            marginVertical: height * 0.005,
            paddingLeft: width * 0.01,
          }}
          onPress={() => {
            this.state.onpressCondition == true
              ? this.handleEditReps(item.value)
              : Alert.alert('Alert!!', 'Just Press One', [
                  {
                    text: 'Okay',
                    onPress: () => this.setState({onpressCondition: true}),
                  },
                ]);
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: width * 0.018,
              color: 'white',
              fontFamily: Fonts.VarelaRoundRegular,
            }}>
            {item.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  _renderMyListRest = ({item, index}) => (
    <View style={{flex: 1}} key={index}>
      <TouchableOpacity
        style={{
          width: width * 0.7,
          height: height * 0.065,
          borderWidth: height * 0.005,
          backgroundColor: 'black',
          borderColor: '#EDB0A6',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: width * 0.01,
          marginVertical: height * 0.005,
          paddingLeft: width * 0.01,
        }}
        onPress={() => {
          this.state.onpressCondition == true
            ? this.handleEditReps(item.key)
            : Alert.alert('Alert!!', 'Just Press One', [
                {
                  text: 'Okay',
                  onPress: () => this.setState({onpressCondition: true}),
                },
              ]);
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: width * 0.018,
            color: 'white',
            fontFamily: Fonts.VarelaRoundRegular,
          }}>
          {item.key}
        </Text>
      </TouchableOpacity>
    </View>
  );
  _renderMyList = ({item, index}) => {
    // console.log('90000', item);
    return (
      <View
        style={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: height * 0.24,
        }}
        key={index}>
        <View
          style={{
            width: width * 0.075,
            height: height * 0.12,
            backgroundColor: item.color,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: width * 0.0055,
            borderColor: '#EDB0A6',
            borderWidth: height * 0.005,
            borderRadius: width * 0.01,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: width * 0.01,
              color: 'white',
              fontFamily: Fonts.VarelaRoundRegular,
            }}>
            {item.name}
          </Text>
        </View>
        <View
          style={{
            width: width * 0.075,
            height: height * 0.08,
            borderWidth: height * 0.005,
            backgroundColor: item.color,
            borderColor: '#EDB0A6',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: width * 0.0055,
            borderRadius: width * 0.01,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: width * 0.018,
              color: 'white',
              fontFamily: Fonts.VarelaRoundRegular,
            }}>
            {item.reps}
          </Text>
        </View>
        {this.props.circle == false && this.props.disableBtns == false ? (
          <TouchableOpacity
            onPress={(event) => this.removeRule(event, index)}
            style={{
              right: width * -0.002,
              position: 'absolute',
              top: height * -0.005,
            }}>
            <Icon name={'cancel'} size={width * 0.02} color="#FF6100" />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };
  selectActicityGoNext = () => {
    // console.log(this.state.nameActivity,'value')
    if (this.state.nameActivity == '') {
      alert('First Select The Activity');
    } else {
      this.toggleModal();
      this.toggleModalReps();
    }
  };
  handleTimeRepInvisible = () => {
    let {activityRound} = this.state;
    this.setState({isShow: true});
    if (!this.props.amrap == 0) {
      const {dataActivity1} = this.state;
      // console.log('ye wala chala amrap Lower')
      setTimeout(() => {
        this.setState({dataActivity1: []});
        setTimeout(() => {
          dataActivity1.map((item) => {
            item.color = 'black';
          });
          this.setState({isShow: false});
        }, 200);
      }, 1000 * this.props.amrap);
    }
    if (!this.props.emomMinutes == 0) {
      setTimeout(() => {
        this.setState({dataActivity1: []});
        setTimeout(() => {
          this.setState({isShow: false});
        }, 200);
      }, 1000 * this.props.emomMinutes);
    }
  };

  resetColorRound = () => {
    const {index, dataActivity1} = this.state;
    this.carouselRef.snapToItem(1, {animated: true});
    dataActivity1.map((item) => {
      item.color = 'black';
    });
    this.setState({index: 0, roundCondition: true});
    setTimeout(() => {
      this.setState({roundCondition: false});
    }, 200);
  };

  resetTheColor = () => {
    const {index, dataActivity1} = this.state;
    if (index == dataActivity1.length) {
      this.carouselRef.snapToItem(1, {animated: true});
      dataActivity1.map((item) => {
        item.color = 'black';
      });
      this.setState({index: 0});
    }
  };

  changeActivityColor = () => {
    let {index, dataActivity1, hardValue} = this.state;
    console.log(
      clc.xterm(227)(this.state.hardValue, '--------><<<<this.state.hardValue'),
    );

    console.log(clc.xterm(227)(this.state.index, '---------><<<<index lower'));
    if (dataActivity1.length == 0) {
      // console.log('lowerBox');
      null;
    } else if (!this.props.emomMinutes == 0) {
      // const newData = this.state.dataActivity1[this.state.index];
      if (this.state.hardValue - 1 == this.state.index) {
        setTimeout(() => {
          const newData = this.state.dataActivity1[this.state.index];
          newData.color = '#0083FF';
        }, 20);

        if (
          this.state.hardValue == 10 &&
          this.state.dataActivity1.length > 10
        ) {
          // this.carouselRef.snapToItem(10, { animated: true });
        } else if (
          this.state.hardValue == 20 &&
          this.state.dataActivity1.length > 20
        ) {
          // this.carouselRef.snapToItem(20, { animated: true });
        }
        setTimeout(() => {
          this.setState({index: this.state.index + 1}, () =>
            this.props.hardValueDone(true),
          );
        }, 50);
      }
      setTimeout(() => {
        this.resetTheColor();
      }, 3000);
    } else {
      // console.log(this.props.hardValue, 'hard value lower');
      // console.log(index, 'index lower');
      if (this.state.hardValue - 1 == this.state.index) {
        setTimeout(() => {
          const newData = this.state.dataActivity1[this.state.index];
          // console.log(newData.color, 'Color')
          newData.color = '#0083FF';
        }, 20);
        if (
          this.state.hardValue == 10 &&
          this.state.dataActivity1.length > 10
        ) {
          this.carouselRef.snapToItem(10, {animated: true});
        }
        // else if (this.state.hardValue == 12 && dataActivity1.length > 10) {
        //   this.carouselRef.snapToItem(1, { animated: true });
        // }
        else if (
          this.state.hardValue == 20 &&
          this.state.dataActivity1.length > 20
        ) {
          // this.carouselRef.snapToItem(20, { animated: true });
        }
        setTimeout(() => {
          this.setState({index: this.state.index + 1});
          this.props.hardValueDone(true);
        }, 50);
        if (this.props.serialConnected) {
          RNSerialport.writeString('ACK');
        }
      }
      setTimeout(() => {
        this.resetTheColor();
      }, 300);
    }
  };
  render() {
    // console.log(this.state.dataActivity1, 'dataActivity1 lower');
    // console.log(criteria1.target, 'length lower')
    if (this.state.activity.length == 0) {
      carouselWidth = width * 0.01;
    }
    if (this.state.activity.length !== 0) {
      if (this.state.activity.length > 10) {
        carouselWidth = width * 0.86;
      } else {
        carouselWidth = (this.state.activity.length * 0.085 + 0.01) * width;
      }
      // carouselWidth = width * 0.265
    }
    if (
      this.state.activitypassed == false &&
      this.props.activitypassed == true
    ) {
      if (this.props.activitypassed == true) {
        // console.log('console-->');
        this.kchKrYaar();
        this.setState({activitypassed: true});
      }
    }

    if (!this.props.emomMinutes == 0 && this.state.emomCondition == false) {
      const data = getTheEmomMinute(this.props);
      data > 30
        ? this.setState({emomMinutes: 30, remaingRestValue: 30})
        : this.setState({emomMinutes: data, remaingRestValue: data});
      this.setState({emomCondition: true});
      setTimeout(() => {
        this.props.emomMinutesRange(data);
      }, 100);

      setTimeout(() => {
        this.setState({emomCondition: false, remaingRestValue: 0});
      }, 1000 * this.props.emomMinutes + 10 * 1000);
    }
    if (this.props.playOnOrOff == true && this.state.isShow == false) {
      setTimeout(() => {
        this.handleTimeRepInvisible();
      }, 100);
    }
    if (
      this.props.roundCondition == true &&
      this.state.roundCondition == false
    ) {
      this.resetColorRound();
    }
    if (this.props.clearData == true) {
      carouselWidth = width * 0.01;
      // this.carouselRef.snapToItem(0, (animated = true));
    }
    if (this.props.clearData == true && this.state.clearData == false) {
      const {index, dataActivity1} = this.state;
      this.state.dataActivity1.map((item) => {
        item.color = 'black';
      });
      // dataActivity1.map((item) => {
      //   item.color = 'black';
      // });
      this.setState({
        dataActivity1: [],
        activity: [],
        clearData: true,
        emomCondition: false,
        index: 0,
        emomMinutes: 0,
        remaingRestValue: 0,
      });
      setTimeout(() => {
        this.setState({clearData: false});
      }, 100);
    }
    if (
      this.props.forTimeRoundCon == true &&
      this.state.forTimeRoundCon == false
    ) {
      // this.carouselRef.snapToItem(0, (animated = true));
      this.setState({forTimeRoundCon: true, isShow: false, dataActivity1: []});
      setTimeout(() => {
        this.setState({forTimeRoundCon: false});
      }, 100);
    }
    if (this.props.stop == true && this.state.stop == false) {
      this.setState({stop: true});
      this.state.dataActivity1.map((item) => {
        item.color = 'black';
      });
      this.setState({isShow: false, dataActivity1: []});
      setTimeout(() => {
        this.setState({stop: false});
      }, 50);
    }
    const {dataActivity, dataReps, emomMinutes, remaingRestValue} = this.state;
    // console.log(this.state.emomMinutes, 'hardValueLower')
    // console.log(this.state.forTimeRoundCon, 'clear pr chala')
    // console.log(this.props, 'isActivityVisible')

    return (
      <View>
        <View
          style={[
            style.lowerContainer,
            {
              height: this.props.fullScreen ? 0 : height * 0.28,
            },
          ]}>
          <View
            style={[
              style.lowerInner,
              {
                height: this.props.fullScreen ? 0 : height * 0.26,
              },
            ]}>
            <View style={styles.slide1}>
              <View
                style={{
                  width: width * 0.957,
                  height: height * 0.26,
                  flexDirection: 'row',
                  alignItems: 'center',
                  // backgroundColor: 'red',
                  // justifyContent: 'center',
                  marginLeft:
                    this.props.circle || this.state.dataActivity1.length == 30
                      ? width * 0.045
                      : width * 0,
                }}>
                {/* <View
                  style={{
                    // flex:1,
                    width: width * 0.87 ,
                    height: height * 0.25,
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor:'red',
                  }}
                >
                  <Carousel
                    containerCustomStyle={{
                      backgroundColor: 'pink',
                    }}
                    // style={{
                    //   backgroundColor: 'pink',
                    // }}
                    ref={(ref) => {
                      this.carouselRef = ref;
                    }}
                    data={this.state.dataActivity1}
                    renderItem={(item, index) =>
                      this._renderMyList(item, index)
                    }
                    sliderWidth={width * 0.857}
                    itemWidth={width * 0.085}
                    useScrollView={true}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    swipeThreshold={0}
                  /> */}
                {/* <FlatList
                    ref={(ref) => {
                      this.flatListRef = ref;
                    }}
                    horizontal={true}
                    data={this.state.dataActivity1}
                    renderItem={(item, index) =>
                      this._renderMyList(item, index)
                    }
                    initialNumToRender={30}
                    getItemLayout={(data, index) => {
                      // console.log('index Kiya Hai (get item layout)',index) 
                      return { length: 100, index, offset: width * 1} 
                    }}
                  /> */}
                {/* </View> */}
                {/* {this.state.dataActivity1.length == 30 ||
                  (!this.props.emomMinutes == 0
                    ? this.state.dataActivity1.length == this.state.emomMinutes
                    : null) ||
                  this.props.circle == true ? (

                    <View />
                  ) : (
                    <TouchableOpacity
                      disabled={this.props.disableBtns}
                      onPress={() => this.setState({ isModalVisible: true })}
                      style={{
                        width: width * 0.075,
                        height: height * 0.2,
                        backgroundColor: '#ffffff27',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: width * 0.003,
                        marginLeft: width * 0.01,
                      }}
                      activeOpacity={0.5}>
                      <Plus
                        name="plus"
                        size={width * 0.025}
                        color="white"
                        style={{ marginTop: height * 0.02 }}
                      />
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontFamily: Fonts.VarelaRoundRegular,
                          fontSize: width * 0.008,
                          marginTop: height * 0.01,
                        }}>
                        Add
                    </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontFamily: Fonts.VarelaRoundRegular,
                          fontSize: width * 0.01,
                        }}>
                        Activity/Reps
                    </Text>
                    </TouchableOpacity>
                  )} */}
                <View
                  style={{
                    width: carouselWidth,
                    height: height * 0.25,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Carousel
                    ref={(ref) => {
                      this.carouselRef = ref;
                    }}
                    data={this.state.dataActivity1}
                    renderItem={(item, index) =>
                      this._renderMyList(item, index)
                    }
                    loop={false}
                    sliderWidth={width * 0.0945}
                    itemWidth={width * 0.085}
                    useScrollView={true}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    swipeThreshold={0}
                  />
                  {/* <FlatList
                    horizontal={true}
                    data={this.state.dataActivity1}
                    renderItem={(item, index) =>
                      this._renderMyList(item, index)
                    }
                    scrollEventThrottle
                  /> */}
                </View>
                {this.state.dataActivity1.length == 30 ||
                (!this.props.emomMinutes == 0
                  ? this.state.dataActivity1.length == this.state.emomMinutes
                  : null) ||
                this.props.circle == true ? (
                  <View />
                ) : (
                  <TouchableOpacity
                    disabled={this.props.disableBtns}
                    onPress={() => this.setState({isModalVisible: true})}
                    style={{
                      width: width * 0.075,
                      height: height * 0.2,
                      backgroundColor: '#ffffff27',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: width * 0.003,
                      marginLeft: width * 0.005,
                    }}
                    activeOpacity={0.5}>
                    <Plus
                      name="plus"
                      size={width * 0.025}
                      color="white"
                      style={{marginTop: height * 0.02}}
                    />
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: Fonts.VarelaRoundRegular,
                        fontSize: width * 0.008,
                        marginTop: height * 0.01,
                      }}>
                      Add
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: Fonts.VarelaRoundRegular,
                        fontSize: width * 0.01,
                      }}>
                      Activity/Reps
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
        <Modal
          animationIn="zoomIn"
          animationOut="zoomOut"
          isVisible={this.state.isModalVisible}
          style={style.modalContainer}>
          <View style={style.modalInner}>
            <View
              style={{
                width: !this.state.meter ? width * 0.75 : width * 0.0,
                height: !this.state.meter ? height * 0.71 : height * 0.0,
                overflow: 'hidden',
              }}>
              <View style={style.boxInner}>
                {/* Box Header */}
                <View style={style.boxHeader}>
                  <View style={style.boxHeaderInner}>
                    <Text style={style.modalHeading}>Select Your Activity</Text>
                    <Searchbar
                      // keyboardType={this.state.keyType}
                      style={{
                        width: width * 0.25,
                        borderWidth: height * 0.0025,
                        borderColor: '#FF6100',
                        backgroundColor: '#000',
                        height: height * 0.08,
                      }}
                      inputStyle={{
                        color: '#FF6100',
                        fontFamily: Fonts.VarelaRoundRegular,
                      }}
                      iconColor="#FF6100"
                      placeholderTextColor="#949494"
                      placeholder="Type Here..."
                      value={this.state.search}
                      onChangeText={(text) => this.searchFilterFunction(text)}
                    />
                    <Pressable
                      android_ripple={{
                        color: '#FF6100',
                        borderless: true,
                      }}
                      onPress={this.toggleModal}>
                      <Icon
                        name={'cancel'}
                        size={width * 0.04}
                        color="#FF6100"
                      />
                    </Pressable>
                  </View>
                </View>
                {/* Box Body */}
                {/* <ScrollView> */}
                <View
                  style={{
                    height: height * 0.58,
                    width: width * 0.75,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {this.state.emomCondition == true && remaingRestValue > 1 ? (
                    <TouchableOpacity
                      style={{
                        width: width * 0.7,
                        height: height * 0.065,
                        borderWidth: height * 0.005,
                        backgroundColor: 'black',
                        borderColor: '#FF6100',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderRadius: width * 0.01,
                        marginVertical: height * 0.005,
                        paddingLeft: width * 0.01,
                      }}
                      onPress={() => {
                        this.handleEditItem('Rest');
                      }}>
                      <Text
                        style={{
                          fontSize: width * 0.019,
                          color: 'white',
                          fontFamily: Fonts.VarelaRoundRegular,
                        }}>
                        Rest
                      </Text>
                    </TouchableOpacity>
                  ) : null}
                  <FlatList
                    data={this.state.dataActivity}
                    renderItem={(item, index) =>
                      this._renderMyListModal(item, index)
                    }
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: this.state.reps == false ? width * 0.0 : width * 0.75,
                height: this.state.reps == false ? height * 0.0 : height * 0.71,
                overflow: 'hidden',
              }}>
              <View style={style.boxInner}>
                {/* Box Header */}
                <View style={style.boxHeader}>
                  <View style={style.boxHeaderInner}>
                    <Text style={style.modalHeading}>Select Reps</Text>
                    {/* <Pressable
                      android_ripple={{
                        color: '#FF6100',
                        borderless: true,
                      }}
                      onPress={this.toggleModal}>
                      <Icon
                        name={'cancel'}
                        size={width * 0.04}
                        color="#FF6100"
                      />
                    </Pressable> */}
                  </View>
                </View>
                {/* Box Body */}
                {/* <ScrollView> */}
                <View
                  style={{
                    height: height * 0.58,
                    width: width * 0.75,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FlatList
                    data={dataReps}
                    renderItem={(item, index) =>
                      this._renderMyListModalReps(item, index)
                    }
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width:
                  this.state.restView == false ? width * 0.0 : width * 0.75,
                height:
                  this.state.restView == false ? height * 0.0 : height * 0.71,
                overflow: 'hidden',
              }}>
              <View style={style.boxInner}>
                {/* Box Header */}
                <View style={style.boxHeader}>
                  <View style={style.boxHeaderInner}>
                    <Text style={style.modalHeading}>Select Rest Time</Text>
                    <Pressable
                      android_ripple={{
                        color: '#FF6100',
                        borderless: true,
                      }}
                      onPress={this.toggleModal}>
                      <Icon
                        name={'cancel'}
                        size={width * 0.04}
                        color="#FF6100"
                      />
                    </Pressable>
                  </View>
                </View>
                {/* Box Body */}
                {/* <ScrollView> */}
                <View
                  style={{
                    height: height * 0.58,
                    width: width * 0.75,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FlatList
                    // horizontal={true}
                    // contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', }}
                    data={
                      remaingRestValue == 2
                        ? [
                            {
                              key: '1',
                              value: 'Rest',
                            },
                          ]
                        : remaingRestValue == 3
                        ? [
                            {
                              key: '1',
                              value: 'Rest',
                            },
                            {
                              key: '2',
                              value: 'Rest',
                            },
                          ]
                        : remaingRestValue == 4
                        ? [
                            {
                              key: '1',
                              value: 'Rest',
                            },
                            {
                              key: '2',
                              value: 'Rest',
                            },
                            {
                              key: '3',
                              value: 'Rest',
                            },
                          ]
                        : remaingRestValue == 5
                        ? [
                            {
                              key: '1',
                              value: 'Rest',
                            },
                            {
                              key: '2',
                              value: 'Rest',
                            },
                            {
                              key: '3',
                              value: 'Rest',
                            },
                            {
                              key: '4',
                              value: 'Rest',
                            },
                          ]
                        : [
                            {
                              key: '1',
                              value: 'Rest',
                            },
                            {
                              key: '2',
                              value: 'Rest',
                            },
                            {
                              key: '3',
                              value: 'Rest',
                            },
                            {
                              key: '4',
                              value: 'Rest',
                            },
                            {
                              key: '5',
                              value: 'Rest',
                            },
                          ]
                    }
                    renderItem={(item, index) =>
                      this._renderMyListRest(item, index)
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          swipeDirection="right"
          backdropColor="black"
          backdropOpacity={0.4}
          onSwipeComplete={this.swipeClose}
          // onBackdropPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
          isVisible={this.state.maxReps}
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
                Type Your Reps Limit
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.5,
                height: height * 0.2,
              }}>
              <TextInput
                placeholder="Type Here"
                keyboardType="number-pad"
                placeholderTextColor="gray"
                onChangeText={(e) => this.setState({maxValue: e})}
                style={{
                  color: 'white',
                  width: width * 0.2,
                  height: height * 0.1,
                  fontFamily: Fonts.VarelaRoundRegular,
                  borderRadius: width * 0.003,
                  borderWidth: width * 0.002,
                  borderColor: '#5F4B2F',
                  padding: width * 0.002,
                  paddingHorizontal: width * 0.004,
                  textAlign: 'center',
                }}
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
                  style={[
                    styles.selectTimeBotton,
                    {backgroundColor: '#FF6100'},
                  ]}>
                  <Text
                    style={[
                      styles.modalHeading,
                      {color: 'white', fontSize: height * 0.025},
                    ]}>
                    Done
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          swipeDirection="right"
          backdropColor="black"
          backdropOpacity={0.4}
          onSwipeComplete={this.swipeClose}
          // onBackdropPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
          isVisible={this.state.addActivity}
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
                Type Your Activity
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.5,
                height: height * 0.2,
              }}>
              <TextInput
                placeholder="Type Here"
                placeholderTextColor="gray"
                onChangeText={(e) => this.setState({addActivityValue: e})}
                style={{
                  color: 'white',
                  width: width * 0.2,
                  height: height * 0.1,
                  fontFamily: Fonts.VarelaRoundRegular,
                  borderRadius: width * 0.003,
                  borderWidth: width * 0.002,
                  borderColor: '#5F4B2F',
                  padding: width * 0.002,
                  paddingHorizontal: width * 0.004,
                  textAlign: 'center',
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.5,
                height: height * 0.1,
              }}>
              <TouchableOpacity onPress={this.getAddActivity}>
                <View
                  style={[
                    styles.selectTimeBotton,
                    {backgroundColor: '#FF6100'},
                  ]}>
                  <Text
                    style={[
                      styles.modalHeading,
                      {color: 'white', fontSize: height * 0.025},
                    ]}>
                    Done
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
  },
  modailContainer: {
    backgroundColor: 'black',
    maxHeight: height * 0.4,
    maxWidth: width * 0.5,
    left: width * 0.2,
    top: height * 0.2,
    borderRadius: width * 0.02,
  },
  modalInner: {
    borderRadius: width * 0.02,
    backgroundColor: 'black',
    height: height * 0.4,
    width: width * 0.5,
    borderWidth: height * 0.002,
    borderColor: '#EDB0A6',
    borderRadius: width * 0.02,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  selectTimeBotton: {
    width: width * 0.2,
    height: height * 0.08,
    margin: height * 0.015,
    justifyContent: 'center',
    paddingHorizontal: width * 0.02,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: width * 0.05,
    // backgroundColor: '#e44f3bd5'
  },
  modalHeading: {
    fontSize: height * 0.04,
    color: 'white',
    fontFamily: Fonts.VarelaRoundRegular,
  },
});
