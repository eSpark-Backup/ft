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
  Pressable,
  Alert,
  DeviceEventEmitter,
  ToastAndroid,
  Modal,
  Button,
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
import {RNSerialport, definitions, actions} from 'react-native-serialport';
import {Toolbar, Icon, IconToggle} from 'react-native-material-ui';
import clc from 'cli-color';
const {height, width} = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      botton: [
        {
          id: '1',
        },
        {
          id: '2',
        },
        {
          id: '3',
        },
        {
          id: '4',
        },
        {
          id: '5',
        },
        {
          id: '6',
        },
        {
          id: '7',
        },
        {
          id: '8',
        },
        {
          id: '9',
        },
        {
          id: '10',
        },
      ],
      bluetoothButton: [
        {
          id: 'true',
        },
        {
          id: 'false',
        },
      ],
      hardValue: 0,
      isShow: false,
      forTimeRoundCon: false,
      activity: [],
      index: 0,
      emomCondition: false,
      actCondition: false,
      runningCondtion: false,

      // Ye states hain jahan hamara usb related
      servisStarted: false,
      connected: false,
      usbAttached: false,
      output: '',
      outputArray: [],
      baudRate: '115200',
      interface: '-1',
      sendText: 'HELLO',
      returnedDataType: definitions.RETURNED_DATA_TYPES.HEXSTRING,
      activiyValue: 1,
      bluetoothIndex: 1,
      serialIndex: 1,
      temp: 1,
      serialModal: false,
    };
    //* ye hamare listener lage hain functions pr jo check karte rehte hai usb port pr
    this.startUsbListener = this.startUsbListener.bind(this);
    this.stopUsbListener = this.stopUsbListener.bind(this);

    // this.activiyValue = 1;
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentDidMount() {
    // ye function usb listener activate kardeta hain
    this.startUsbListener();
  }

  componentWillUnmount() {
    // ye function screen ke hatne ke baad usb listener khatam kardeta ha
    this.stopUsbListener();
  }

  // ye function usb listner active kar raha hai jis me saari services start hoti ha
  startUsbListener() {
    DeviceEventEmitter.addListener(
      actions.ON_SERVICE_STARTED,
      this.onServiceStarted,
      this,
    );
    DeviceEventEmitter.addListener(
      actions.ON_SERVICE_STOPPED,
      this.onServiceStopped,
      this,
    );
    DeviceEventEmitter.addListener(
      actions.ON_DEVICE_ATTACHED,
      this.onDeviceAttached,
      this,
    );
    DeviceEventEmitter.addListener(
      actions.ON_DEVICE_DETACHED,
      this.onDeviceDetached,
      this,
    );
    DeviceEventEmitter.addListener(actions.ON_ERROR, this.onError, this);
    DeviceEventEmitter.addListener(
      actions.ON_CONNECTED,
      this.onConnected,
      this,
    );
    DeviceEventEmitter.addListener(
      actions.ON_DISCONNECTED,
      this.onDisconnected,
      this,
    );
    DeviceEventEmitter.addListener(actions.ON_READ_DATA, this.onReadData, this);
    RNSerialport.setReturnedDataType(this.state.returnedDataType);
    RNSerialport.setAutoConnectBaudRate(parseInt(this.state.baudRate, 10));
    RNSerialport.setInterface(parseInt(this.state.interface, 10));
    RNSerialport.setAutoConnect(true);
    RNSerialport.startUsbService();
  }
  // ye function screen ke hatne ke baad usb listener khatam kardeta ha
  stopUsbListener = async () => {
    DeviceEventEmitter.removeAllListeners();
    const isOpen = await RNSerialport.isOpen();
    if (isOpen) {
      Alert.alert('isOpen', isOpen);
      RNSerialport.disconnect();
    }
    RNSerialport.stopUsbService();
  };
  // ye function sirf state change kar rahe hain har usb action pr
  onServiceStarted(response) {
    this.setState({servisStarted: true});
    if (response.deviceAttached) {
      this.onDeviceAttached();
    }
  }
  // ye function sirf state change kar rahe hain har usb action pr
  onServiceStopped() {
    this.setState({servisStarted: false});
  }
  // ye function sirf state change kar rahe hain har usb action pr
  onDeviceAttached() {
    this.setState({usbAttached: true});
  }
  // ye function sirf state change kar rahe hain har usb action pr
  onDeviceDetached() {
    this.setState({usbAttached: false});
  }
  // ye function sirf state change kar rahe hain har usb action pr
  onConnected() {
    this.setState({connected: true});
  }
  // ye function sirf state change kar rahe hain har usb action pr
  onDisconnected() {
    this.setState({connected: false});
  }
  //* ye function data read karta hai usb se jo aarha hai aur output state pr save kar raha hai */
  onReadData(data) {
    if (
      this.state.returnedDataType === definitions.RETURNED_DATA_TYPES.INTARRAY
    ) {
      const payload = RNSerialport.intArrayToUtf16(data.payload);
      this.setState({output: payload});
    } else if (
      this.state.returnedDataType === definitions.RETURNED_DATA_TYPES.HEXSTRING
    ) {
      const payload = RNSerialport.hexToUtf16(data.payload);
      this.setState({output: payload});
    }
    const numData = parseInt(this.state.output);
    try {
      if (this.state.output === 'R') {
        this.countRound();
        this.handleSend();
      } else if (Number.isInteger(numData)) {
        if (this.state.serialIndex > 0) {
          if (numData == this.state.temp) {
            //? Expected Result output only
            setTimeout(() => {
              this.hardwereBottonWork(numData);
              console.log(clc.bgRed('hello ye chala+++++++++++++++', numData));
              console.log(
                clc.bgRed('what is serial Index', this.state.serialIndex),
              );
            }, 800);
          } else {
            console.log(clc.greenBright('Didnt Get Expected Value', numData));
            console.log('Need thi Value', this.state.temp);
          }
        }
      } else {
        RNSerialport.writeString('NACK');
        console.log(clc.yellowBright('Ghalat Cheez'));
      }
    } catch (e) {
      console.log('Error', e);
    }
  }
  // ye function error aane ki surat pr console kar raha hai
  onError(error) {
    console.error(error);
  }
  // ye data jo read ho raha hai agr hex ya int array me aa raha hai tou wo usko string me convert kare ga
  handleConvertButton() {
    let data = '';
    if (
      this.state.returnedDataType === definitions.RETURNED_DATA_TYPES.HEXSTRING
    ) {
      data = RNSerialport.hexToUtf16(this.state.output);
    } else if (
      this.state.returnedDataType === definitions.RETURNED_DATA_TYPES.INTARRAY
    ) {
      data = RNSerialport.intArrayToUtf16(this.state.outputArray);
    } else {
      return;
    }
    this.setState({output: data});
  }
  // ye function read data ki state clear kar raha hai
  handleClearButton() {
    this.setState({output: ''});
    this.setState({outputArray: []});
  }
  // ye function data string me data send kar rhaa hai

  handleSend = () => {
    RNSerialport.writeString('ACK');
  };
  //! ----------------------------------------- yahan tk hoa hai kaam serial device reading ka ----------------------------------------------------- !//

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      activity: nextProps.activity,
    });
  }
  checkActivity = () => {
    // console.log('activity VAlue ka bata', this.state.activiyValue)
    if (this.state.activiyValue == this.state.activity.length) {
      this.setState({activiyValue: 1});
      this.setState({bluetoothIndex: 1});
      this.setState({serialIndex: 1});
      this.setState({temp: 1});
      RNSerialport.writeString('N');
      console.log(clc.xterm(172)('Reset Temp'));
      setTimeout(() => {
        this.setState({actCondition: false});
      }, 100);
    } else {
      this.setState({activiyValue: this.state.activiyValue + 1});
      this.setState({bluetoothIndex: this.state.bluetoothIndex + 1});
      this.setState({serialIndex: this.state.serialIndex + 1});
      setTimeout(() => {
        this.setState({actCondition: false});
      }, 100);
    }
  };
  bluetoothButtonWork = (value) => {
    if (value === 'true') {
      if (this.state.bluetoothIndex > 10) {
        this.setState({bluetoothIndex: 1});
        console.log('Bluetooth Index ka bata', this.state.bluetoothIndex);
        setTimeout(() => {
          this.hardwereBottonWork(this.state.bluetoothIndex);
          console.log('Bluetooth Index ka bata', this.state.bluetoothIndex);
        }, 200);
      } else {
        this.hardwereBottonWork(this.state.bluetoothIndex);
      }
      console.log('Bluetooth Mila', value);
    } else {
      console.log('Bluetooth Mila', value);
    }
  };
  hardwereBottonWork = (value) => {
    // this.activiyValue = 21
    if (this.state.isShow == true && this.state.emomCondition == false) {
      if (this.state.runningCondtion == true) {
        this.setState({
          temp: this.state.temp + 1,
        });
        this.setState({runningCondtion: false});
        setTimeout(() => {
          this.setState({runningCondtion: true});
        }, 1500);
        // if (this.state.activiyValue > 10 && this.state.activiyValue < 21) {
        //   // console.log('10 wali')
        //   const total = (Number(value) + 10).toString();
        //   // console.log('total Value 10', total)
        //   setTimeout(() => {
        //     this.props.hardValue(total);
        //   }, 5);
        //   setTimeout(() => {
        //     this.props.hardValue(0);
        //   }, 500);
        //   // this.checkActivity()
        // } else if (this.state.activiyValue > 20) {
        //   // console.log('20 wali')
        //   // console.log('total Value 21', total)
        //   const total = (Number(value) + 20).toString();
        //   setTimeout(() => {
        //     this.props.hardValue(total);
        //   }, 5);
        //   setTimeout(() => {
        //     this.props.hardValue(0);
        //   }, 500);
        //   // this.checkActivity()
        // } else {
        // console.log('else wali')
        setTimeout(() => {
          this.props.hardValue(value);
        }, 5);
        setTimeout(() => {
          this.props.hardValue(0);
        }, 500);
        // this.checkActivity()
        // }
      } else {
        ToastAndroid.show(
          'Alert!! Wait a second press again',
          ToastAndroid.SHORT,
        );
        setTimeout(() => {
          this.setState({runningCondtion: true});
        }, 2000);
        // Alert.alert('Alert!!', 'Wait A Second Press Again', [
        //   {
        //     text: 'Okay',
        //   },
        // ]);
      }
    }
  };
  countRound = () => {
    if (this.state.isShow == true && this.state.emomCondition == false) {
      if (this.state.runningCondtion == true) {
        console.log(clc.xterm(172)('Reset Temp'));
        RNSerialport.writeString('N');
        this.setState({runningCondtion: false, temp: 1});
        setTimeout(() => {
          this.setState({runningCondtion: true});
        }, 1500);
        this.props.countRound(true);
        setTimeout(() => {
          this.props.countRound(false);
        }, 200);
      }
    }
  };
  _renderBlutoothList = ({item, index}) => {
    return (
      <View key={index}>
        <TouchableOpacity
          style={{
            width: height * 0.13,
            height: height * 0.13,
            backgroundColor: '#A6A6A6',
            borderRadius: width * 0.1,
            borderWidth: width * 0.003,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: height * 0.001,
          }}
          activeOpacity={0.5}
          onPress={() => {
            this.bluetoothButtonWork(item.id);
          }}>
          <Text style={{fontSize: height * 0.025, color: 'black'}}>
            {item.id}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  _renderMyList = ({item, index}) => {
    // console.log("indexindexindex",index+1)
    return (
      <View key={index}>
        <TouchableOpacity
          style={{
            width: height * 0.13,
            height: height * 0.13,
            backgroundColor: '#A6A6A6',
            borderRadius: width * 0.1,
            borderWidth: width * 0.003,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: height * 0.001,
          }}
          activeOpacity={0.5}
          onPress={() => {
            this.hardwereBottonWork(item.id);
          }}>
          <Text style={{fontSize: height * 0.025, color: 'black'}}>
            {item.id}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  emomTimerFn = () => {
    // let { hardValue, isShow, activity, index } = this.state;
    // let count = index;
    this.setState({index: this.state.index + 1});
    setTimeout(() => {
      this.props.hardValue(this.state.index);
      setTimeout(() => {
        this.props.hardValue(0);
      }, 150);
    }, 50);
  };
  checkValueWithLenght = () => {
    const {isShow, hardValue, activity, index} = this.state;
    if (index == activity.length) {
      this.setState({index: 0});
      // console.log('0 HOA HAI YA NHI')
    }
  };

  render() {
    // console.log(this.state.index ,'index hardwere')
    console.log(this.props.BTValues, 'BT hardwere');
    //todo: Serial Communication with Embedded
    console.log('Service Started? ', this.state.servisStarted);
    console.log('Usb attached? ', this.state.usbAttached);
    console.log('Usb connected? ', this.state.connected);
    console.log('Data Read ?: ', this.state.output);
    if (this.props.playOnOrOff == true && this.state.isShow == false) {
      this.setState({isShow: true});
      setTimeout(() => {
        this.setState({runningCondtion: true});
      }, 4000);
      if (this.props.amrap == 0) {
        null;
      } else {
        setTimeout(() => {
          this.setState({isShow: false, runningCondtion: false});
          this.setState({activiyValue: 1});
        }, 1000 * this.props.amrap - 1 * 1000);
      }
      if (this.props.emomMinutes == 0) {
        null;
      } else {
        this.setState({emomCondition: true});
        const timer1 = setInterval(() => {
          this.emomTimerFn();
          setTimeout(() => {
            this.checkValueWithLenght();
          }, 200);
        }, 1000 * (6 * 10));
        setTimeout(() => {
          this.setState({
            isShow: false,
            index: 0,
            emomCondition: false,
            runningCondtion: false,
          });
          this.setState({activiyValue: 1});
          clearInterval(timer1);
        }, 1000 * this.props.emomMinutes);
      }
    }
    if (
      this.props.forTimeRoundCon == true &&
      this.state.forTimeRoundCon == false
    ) {
      this.setState({
        forTimeRoundCon: true,
        isShow: false,
        runningCondtion: false,
      });
      setTimeout(() => {
        this.setState({forTimeRoundCon: false});
      }, 100);
    }
    if (this.props.actCondition == true && this.state.actCondition == false) {
      this.setState({actCondition: true});
      setTimeout(() => {
        this.checkActivity();
      }, 20);
      // this.addButtonValues()
    }
    return (
      <View
        style={[
          style.centerContainer,
          {
            height: this.props.fullScreen ? 0 : height * 0.15,
            overflow: 'hidden',
          },
        ]}>
        <Modal
          visible={this.state.serialModal}
          animationType="slide"
          onRequestClose={() => this.setState({serialModal: false})}>
          <View
            style={{
              backgroundColor: '#fff',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 25}}>Output:</Text>
            <View
              style={{
                width: width * 0.9,
                height: height / 2,
                borderColor: '#000',
                borderWidth: 1,
              }}>
              <Text style={{fontSize: 20}}>{this.state.output}</Text>
            </View>
            <Button
              title="Clear Output"
              onPress={() => this.setState({output: ''})}
            />
          </View>
        </Modal>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // width: width * .957,
            // height: this.props.fullScreen ? 0 : height * .15,
            // overflow:'hidden'
          }}>
          <TouchableOpacity
            style={{
              width: height * 0.13,
              height: height * 0.13,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FF6100',
              borderRadius: width * 0.003,
              borderRadius: width * 0.1,
            }}
            onPress={() => console.log('value')}>
            <Text
              style={{
                fontSize: height * 0.025,
                color: 'black',
                fontFamily: Fonts.VarelaRoundRegular,
                textAlign: 'center',
              }}>
              Undo Activity
            </Text>
          </TouchableOpacity>
          <FlatList
            horizontal={true}
            contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}
            data={this.state.botton}
            renderItem={(item, index) => this._renderMyList(item, index)}
            // keyExtractor={(item,) => item.id}
          />
          <FlatList
            horizontal={true}
            // contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}
            data={this.state.bluetoothButton}
            renderItem={(item, index) => this._renderBlutoothList(item, index)}
            // keyExtractor={(item,) => item.id}
          />
          <TouchableOpacity
            style={{
              width: height * 0.13,
              height: height * 0.13,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FF6100',
              borderRadius: width * 0.003,
              borderRadius: width * 0.1,
            }}
            onLongPress={() => this.setState({serialModal: true})}
            onPress={this.countRound}>
            <Text
              style={{
                fontSize: height * 0.025,
                color: 'black',
                fontFamily: Fonts.VarelaRoundRegular,
              }}>
              Round
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
