import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  TextInput,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  ToastAndroid,
  LayoutAnimation,
  UIManager,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Pressable,
  Linking,
  ActivityIndicator,
  Settings,
  BackHandler,
  PermissionsAndroid,
} from 'react-native';
import style from './style';
import SystemSetting from 'react-native-system-setting';
import DateTimePicker from '@react-native-community/datetimepicker';
import BleManager from 'react-native-ble-manager';

import BluetoothSerial from 'react-native-bluetooth-serial-next';
import Buffer from 'buffer';
import RNFS from 'react-native-fs';
// import {AnimatedCircularProgress} from 'react-native-circular-progress';
// import LinearGradient from 'react-native-linear-gradient';
// import Swiper from 'react-native-swiper';
// import CodeInput from 'react-native-confirmation-code-input';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Switch} from 'react-native-paper';
import Memory from './programID/memoryRecall';
import MemorySave from './programID/mermorySave';

// Component
import TimerBox from './Timer/index';
import ProgranId from './programID/index';
import CenterBox from './CenterBox/index';
import LowerBox from './lowerBox/index';
import Calculator2 from './Calculator/index';
import HardwereBotton from './HardwereBotton/index';
import SettingsModal from '../component/settingsModal';
import SetPinModal from '../component/setPinModal';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {Icon} from 'react-native-material-ui';
import Cal from 'react-native-vector-icons/MaterialCommunityIcons';
import Human from 'react-native-vector-icons/MaterialCommunityIcons';
import {RNSerialport} from 'react-native-serialport';
import {Fonts} from '../utils/fonts';
import RNBeep from 'react-native-a-beep';
import {bytesToString} from 'convert-string';

import {Calculator} from 'react-native-calculator';
import Modal from 'react-native-modal';
import clc from 'cli-color';

let currentTime;
const Sound = require('react-native-sound');
let song = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Error while initializing song instance', error);
  }
});

const {height, width} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      min: 10,
      rest: 20,
      min1: 15,
      res1: 25,
      duration: 10,
      uniqueValue: 0,
      onPlaying: false,
      note: false,
      pr: false,
      test: false,
      totalTime: 0,
      amrapTime: 0,
      activity: [],
      timeLap: [],
      actCondition: false,
      activityRound: [],
      roundCondition: false,
      hardValue: 0,
      clearData: false,
      clearDataHome: false,
      roundIndex: 0,
      forTimeRound: 0,
      forTimeRoundCon: false,
      forTimeCon: false,
      circle: false,
      disableBtns: true,
      roundLap: [],
      totalTimeArr: [],
      emomMinutes: 0,
      emomMinutesShow: 0,
      emomMinutesRange: 0,
      programCondition: false,
      criteriaPassed: true,
      stop: false,
      indexCondition: false,
      isSettingVisible: false,
      tabataMinutes: 0,
      tabataRest: 0,
      tabataRounds: 0,
      tabataRoundCon: false,
      tabataCon: false,
      tabataCompleteRounds: 0,
      contactVisible: false,
      otpVisible: false,
      setTime: false,
      currentTime: currentTime,
      BTAvailDevModal: false,
      BTConnectDevModal: false,
      BTDev: null,
      BTConnectedDev: [],
      emptyArray: [],
      isloading: true,
      notfound: false,
      notconnected: false,
      BTValues: 1,
      imageUri: '',
      fullScreen: false,
      showFullScreen: false,
      bleMacId: '',
      bleData: '',
      bleConnected: false,
      serialConnected: false,
      serialService: false,
      runSerial: false,
      isBluetoothOn: false,
      disableSwitch: false,
      settingData: [
        {
          key: '1',
          name: 'Settings',
          value: 'Software Update',
        },
        {
          key: '2',
          name: 'Settings',
          value: 'Time and Date',
        },
        {
          key: '3',
          name: 'Settings',
          value: 'Smart Connect',
          note: 'Note: Only one clicker can be paired',
        },
        {
          key: '4',
          name: 'Settings',
          value: 'Serial Service',
          note: 'Current Status: ',
        },
        {
          key: '5',
          name: 'Settings',
          value: 'Factory Reset',
          note: 'Note: Deletes all data and memory',
        },
        {
          key: '6',
          name: 'Settings',
          value: 'Set Pin',
        },
        {
          key: '7',
          name: 'Settings',
          value: 'Contact Us',
        },
      ],
      innerSettingData: [
        {
          key: '1',
          name: 'Software Update',
          value: 'Connect To Wifi',
        },
        {
          key: '2',
          name: 'Software Update',
          value: 'Scan for Update',
        },
        {
          key: '3',
          name: 'Software Update',
          value: 'Install Update',
        },
        {
          key: '4',
          name: 'Software Update',
          value: 'Remove Last Update',
        },
        {
          key: '1',
          name: 'Time and Date',
          value: 'Set Time and Date',
        },
        {
          key: '2',
          name: 'Time and Date',
          value: 'Daylight Savings On',
        },
        {
          key: '3',
          name: 'Time and Date',
          value: 'Daylight Savings Off',
        },
        {
          key: '1',
          name: 'Smart Connect',
          value: 'New Clicker',
        },
        {
          key: '2',
          name: 'Smart Connect',
          value: 'Unpair Clicker',
        },
        {
          key: '1',
          name: 'Factory Reset',
          value: 'Delete and Reset',
        },
        {
          key: '1',
          name: 'Set Pin',
          value: 'Setup Bootup Pin',
        },
        {
          key: '1',
          name: 'Contact Us',
        },
        {
          key: '1',
          name: 'Serial Service',
          value: 'Reset Serial Service',
        },
        {
          key: '2',
          name: 'Serial Service',
          value: 'Connection Mode',
          item1: 'Serial',
          item2: 'Bluetooth',
          switch: true,
        },
      ],
    };
  }

  backAction = () => {
    return true;
  };

  componentDidMount() {
    this._requestBluetoothPermission();
    this._askPermission();
    this._locationPermission();
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
    // this.createFile();
  }

  componentWillUnmount() {
    if (this.state.bleConnected) {
      this.disconnectBTDevice();
      clearInterval(this.readInterval);
    }
  }

  //* Requesting Bluetooth permission from the user
  _requestBluetoothPermission = () => {
    BleManager.enableBluetooth()
      .then(() => {
        console.log('The bluetooth is already enabled or the user confirmed');
        this.setState({blueE: true});
      })
      .catch(() => {
        Alert.alert(
          'Turn Bluetooth',
          'This App wants to turn on your bluetooth',
          [
            {
              text: 'Cancel',
              onPress: () =>
                console.log('Cancel Pressed on Bluetooth Permissions'),
              style: 'cancel',
            },
            {
              text: 'Settings',
              onPress: () => {
                SystemSetting.switchBluetooth();
              },
            },
          ],
        );
      });
  };

  //* request location permission from the user
  _locationPermission = () => {
    SystemSetting.isLocationEnabled().then((enable) => {
      if (enable) {
        console.log('Location is On');
      } else {
        Alert.alert(
          'Turn Location On',
          'This App wants to turn on your Location',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed on Location Setting'),
              style: 'cancel',
            },
            {
              text: 'Settings',
              onPress: () => {
                SystemSetting.switchLocation();
              },
            },
          ],
        );
      }
    });
  };

  onToggleSwitch = () => {
    this.setState(
      {
        isBluetoothOn: !this.state.isBluetoothOn,
      },
      () => {
        if (this.state.isBluetoothOn) {
          if (this.state.serialConnected) {
            RNSerialport.writeString('B');
          }
          console.log('BT');
        } else {
          if (this.state.serialConnected) {
            RNSerialport.writeString('Z');
          }
          console.log('Serial');
        }
      },
    );
  };

  //* Permissions Module that saves the granted permissions once and for all
  _askPermission = async () => {
    try {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]).then((results) => {
        if (
          results['android.permission.ACCESS_FINE_LOCATION'] &&
          results['android.permission.ACCESS_COARSE_LOCATION'] === 'granted'
        ) {
          this.setState({permissionEnabled: true});
          this.createFile();
        } else if (
          (results['android.permission.ACCESS_FINE_LOCATION'] &&
            results['android.permission.ACCESS_COARSE_LOCATION'] &&
            results['android.permission.CAMERA'] === 'denied') ||
          (results['android.permission.ACCESS_FINE_LOCATION'] &&
            results['android.permission.ACCESS_COARSE_LOCATION'] &&
            results['android.permission.CAMERA'] &&
            results['android.permission.READ_EXTERNAL_STORAGE'] &&
            results['android.permission.WRITE_EXTERNAL_STORAGE'] ===
              'never_ask_again')
        ) {
          ToastAndroid.show(
            'App cannot Start Without Accepting Permission',
            ToastAndroid.SHORT,
          );
          setTimeout(() => {
            RNExitApp.exitApp();
          }, 800);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  checkWifi = () => {
    SystemSetting.isWifiEnabled().then((enable) => {
      this.state.onOff = enable ? 'On' : 'Off';
      if (this.state.onOff == 'On') {
        ToastAndroid.show('Wifi is Connected', ToastAndroid.SHORT);
        this.setState({blueOpt: true});
      } else {
        this.toggleWifi();
        this.setState({blueOpt: false});
      }
    });
  };

  toggleWifi = () => {
    SystemSetting.switchWifi(() => {
      console.log('switch Wifi successfully');
    });
  };

  //handle new Activity send to Device
  handleSend = () => {
    if (this.state.serialConnected) {
      console.log('New Activity Started By Play BUTTON');
      RNSerialport.writeString('PACK');
      console.log(clc.xterm(191)('Send PACK to Hardware'));
    }
  };

  // PLay Timer
  playTimer = () => {
    if (this.state.tabataRounds == 0) {
      if (
        this.state.forTimeRound == 0 &&
        this.state.amrapTime == 0 &&
        this.state.emomMinutes == 0
      ) {
        alert('Please Select Program ');
      } else if (this.state.activity.length == 0) {
        alert('Please Select Activity');
      } else if (!this.state.forTimeRound == 0) {
        this.handleSend();

        setTimeout(() => {
          this.setState({onPlaying: !this.state.onPlaying});
        }, 10 * 1000 + 500);
        this.setState({
          uniqueValue: this.state.uniqueValue + 1,
          circle: true,
          programCondition: true,
        });
        this.timer1 = setTimeout(() => {
          song.play((success) => {
            if (!success) {
              console.log('song didnt play', error);
            }
          });
        }, 1000 * this.state.duration - 3000);
      } else if (!this.state.amrapTime == 0) {
        // console.log('ye wala ager chhala to')
        this.handleSend();
        this.setState({disableSwitch: true});
        setTimeout(() => {
          this.setState({onPlaying: true});
          RNBeep.beep(false);
        }, 10 * 1000 + 500);
        this.setState({
          uniqueValue: this.state.uniqueValue + 1,
          circle: true,
          programCondition: true,
        });
        this.timer1 = setTimeout(() => {
          song.play((success) => {
            if (!success) {
              console.log('song didnt play', error);
            }
          });
        }, 1000 * this.state.duration - 3000);
        setTimeout(() => {
          this.setState(
            {
              onPlaying: false,
              showFullScreen: true,
              // uniqueValue: this.state.uniqueValue + 1,
              // circle: false,
              totalTime: 0,
              amrapTime: 0,
              activity: [],
              programCondition: false,
              timeLap: [],
              // roundIndex:0
            },
            () => {
              console.log(clc.xterm(196)('Program Khatam hogaya Amrap'));
              if (this.state.serialConnected) {
                RNSerialport.writeString('X');
              }
            },
          );
        }, this.state.amrapTime * 1000 + 10 * 1000);
      } else if (!this.state.emomMinutes == 0) {
        this.handleSend();
        this.setState({disableSwitch: true});
        setTimeout(() => {
          this.setState({onPlaying: !this.state.onPlaying});
        }, 10 * 1000 + 500);
        this.setState({
          uniqueValue: this.state.uniqueValue + 1,
          circle: true,
          programCondition: true,
        });
        this.timer1 = setTimeout(() => {
          song.play((success) => {
            if (!success) {
              console.log('song didnt play', error);
            }
          });
        }, 1000 * this.state.duration - 3000);
        setTimeout(() => {
          this.setState({
            onPlaying: false,
            showFullScreen: true,
            // circle: false,
            programCondition: false,
            totalTime: 0,
            emomMinutes: 0,
            timeLap: [],
            // roundIndex:0,
            hardValue: 0,
          });
        }, this.state.emomMinutes * 1000 + 10 * 1000);
      }
    } else {
      this.handleSend();
      this.setState({disableSwitch: true});
      setTimeout(() => {
        this.setState({onPlaying: !this.state.onPlaying});
      }, 10 * 1000 + 500);
      this.setState({
        uniqueValue: this.state.uniqueValue + 1,
        circle: true,
        programCondition: true,
      });
      this.timer1 = setTimeout(() => {
        song.play((success) => {
          if (!success) {
            console.log('song didnt play', error);
          }
        });
      }, 1000 * this.state.duration - 3000);
    }
  };

  _renderSettingList = ({item}) => (
    <TouchableOpacity onPress={() => this.filterList(item)}>
      <View style={style.mainSettingListContainer}>
        <Text style={style.settingListText}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderInnerSettingList = ({item}) =>
    item.switch ? (
      <View
        style={[
          style.innerSettingListContainer,
          {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Text
          style={[
            style.settingListText,
            {
              alignSelf: 'flex-start',
            },
          ]}>
          {item.key}. {item.value}
        </Text>
        <View style={style.innerTextContainer}>
          <Text style={style.settingListText}>{item.item1}</Text>
          <Switch
            disabled={this.state.disableSwitch}
            value={this.state.isBluetoothOn}
            onValueChange={this.onToggleSwitch}
            color="#FF6100"
            trackColor={{true: '#803100', false: '#803100'}}
            thumbColor={'#FF6100'}
          />
          <Text style={style.settingListText}>{item.item2}</Text>
        </View>
      </View>
    ) : (
      <TouchableOpacity onPress={() => this.DoSetting(item)}>
        <View style={style.innerSettingListContainer}>
          <Text style={style.settingListText}>
            {item.key}. {item.value}
          </Text>
        </View>
      </TouchableOpacity>
    );

  _renderBTList = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.connectBTDevice(item)}>
        <View style={style.btListContainer}>
          <Text style={style.settingListText}>
            {item.name == null ? 'N/A' : item.name}
          </Text>
          <Text
            style={[
              style.settingListText,
              {
                fontSize: width * 0.014,
              },
            ]}>
            {item.id}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  _renderBTConnectedList = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.disconnectBTDevice(item)}>
        <View style={style.connectedBtListContainer}>
          <Text style={style.settingListText}>{item.name}</Text>
          <Text
            style={[
              style.settingListText,
              {
                fontSize: width * 0.014,
              },
            ]}>
            {item.id}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  filterList = (key) => {
    this.setState({openTheKeyboard: true});
    let filteredList = [];
    this.setState({
      isInnerSettingVisible: true,
      mainName: key.value,
      settingsNote: key.note,
    });
    this.state.innerSettingData.filter((v) => {
      if (v.name == key.value) {
        filteredList.push(v);
        this.setState({filteredList});
        if (key.value === 'Serial Service') {
          this.setState({
            settingsNote: `${key.note}${
              this.state.serialService ? ' Active' : ' De-Active'
            }`,
          });
        }
        if (key.value == 'Contact Us') {
          this.setState({contactVisible: true});
        }
      }
    });
  };

  setNewPin = (code) => {
    this.setState({
      setPin: false,
      confirmPin: true,
      newPin: code,
    });
  };

  cofirmNewPin = (code) => {
    if (this.state.newPin == code) {
      this.setState({
        confirmPin: false,
      });
    } else {
      alert('PIN does not match.!');
    }
  };

  backToNewPin = () => {
    console.log('TTTT');
    this.setState({
      setPin: true,
      confirmPin: false,
    });
  };

  DoSetting = async (key) => {
    if (key.value == 'Connect To Wifi') {
      this.checkWifi();
      // this.toggleWifi()
      // console.log('Key Batao', key)
    } else if (key.value == 'Set Time and Date') {
      Linking.sendIntent('android.settings.DATE_SETTINGS');
      // console.log('Get Current Time.',this.state.currentTime)
      // this.setState({
      //   setTime: true
      // })
    } else if (key.value == 'New Clicker') {
      this.scanBTAvailDev();
    } else if (key.value == 'Unpair Clicker') {
      // this.setState({notconnected: false});
      // setTimeout(() => {
      //   if (this.state.BTConnectedDev[0] === undefined) {
      //     this.setState({notconnected: true});
      //   }
      // }, 100);
      this.getConnectedDevices();
    } else if (key.value == 'Setup Bootup Pin') {
      this.setState({
        setPin: true,
        otpVisible: true,
      });
      // if (this.state.openTheKeyboard == true) {
      //   console.log('Chal rha hai ya nhi.?')
      //   this.textInputRef.focus()
      //   this.setState({ openTheKeyboard: false });
      // }
    } else if (key.value == 'Reset Serial Service') {
      if (!this.state.serialService) {
        this.setState({runSerial: true});
        this.closeSettingsModal();
        ToastAndroid.show('Serial Service Started', ToastAndroid.SHORT);
      } else {
        alert('Service already running');
      }
      // console.log('Need to Reset Service');
    }
  };

  getConnectedDevices = async () => {
    try {
      let countsArr = [];
      this.setState({notconnected: false});
      let peripheralsArray = await BluetoothSerial.list();
      countsArr = peripheralsArray.filter((item) => {
        if (item.name !== null && item.name.toUpperCase().includes('COUNTS')) {
          return item;
        }
      });
      if (countsArr.length == 0) {
        this.setState({notconnected: true});
        console.log('no connected devices found');
        console.log('0 length pr', peripheralsArray);
      } else {
        console.log('> 0 length pr', peripheralsArray);
        this.setState({BTConnectedDev: countsArr});
        this.setState({notconnected: false});
      }
    } catch (e) {
      console.log('Error while GetConnected', e);
    }
    this.setState({BTConnectDevModal: true});
  };

  unPairDevice = async (item) => {
    BluetoothSerial.unpairDevice(item.id)
      .then((value) => {
        console.log('unPaired Device', value);
      })
      .catch((e) => {
        console.log('Error', e);
      });
  };

  scanBTAvailDev = async () => {
    this.setState({
      notfound: false,
      isloading: true,
      BTAvailDevModal: true,
      BTDev: [],
    });
    try {
      let countsArr = [];
      const unpaired = await BluetoothSerial.listUnpaired();
      console.log('Upaired list', unpaired);
      countsArr = unpaired.filter((item) => {
        if (item.name !== null && item.name.toUpperCase().includes('COUNTS')) {
          return item;
        }
      });
      this.setState({BTDev: countsArr});
      this.setState({isloading: false});
      if (this.state.BTDev[0] === undefined) {
        this.setState({notfound: true});
      }
    } catch (e) {
      console.log('Error aya at list', e);
    }
  };

  startRead = async (item) => {
    // const yourDevice = BluetoothSerial.device(item.id);
    console.log(clc.xterm(42)('Reading Started'));
    this.readInterval = setInterval(() => {
      BluetoothSerial.isConnected(item.id).then((state) => {
        if (state) {
          BluetoothSerial.readFromDevice(item.id).then((data) => {
            if (data != '') {
              console.log('Your Bluetooth data:', data);
              this.setState({bleData: data});
              setTimeout(() => {
                this.setState({bleData: ''});
              }, 10);
            }
          });
        } else {
          clearInterval(this.readInterval);
          console.log('Reading Stopped Disconnected');
        }
      });
    }, 1000);
  };

  writeToDevice = async () => {
    BluetoothSerial.write('Hellow', this.state.bleMacId)
      .then((state) => {
        console.log('Write Successfully');
      })
      .catch((e) => {
        console.log('Error while writing');
      });
  };

  connectBTDevice = (item) => {
    //FIXME: if Connect does not work swtich to pairing method
    // const yourDevice = BluetoothSerial.device(item.id);
    this.setState({isloading: true});

    BluetoothSerial.connect(item.id)
      .then((state) => {
        console.log('Connected', state);
        this.setState({
          bleMacId: item.id,
          isloading: false,
          bleConnected: true,
          BTAvailDevModal: false,
        });
        ToastAndroid.show('Connected Successfully', ToastAndroid.SHORT);
        this.startRead(item);
        // setInterval(() => {
        //   console.log('interval chala');
        //   // this.retrieveBleServices(item);
        // }, 2000);
      })
      .catch((error) => {
        // Failure code
        console.log(error);
      });
  };

  disconnectBTDevice = (item) => {
    //FIXME: if Disconnect does not work swtich to unPairing method
    this.setState({isloading: true});

    BluetoothSerial.disconnect(
      typeof item == 'undefined' ? this.state.bleMacId : item.id,
    )
      .then((state) => {
        // Success code
        clearInterval(this.readInterval);
        console.log(clc.xterm(166)('Reading Stopped via Disconnected', state));
        this.unPairDevice(item);
        ToastAndroid.show('Disconnected', ToastAndroid.SHORT);
        this.setState({
          notconnected: true,
          isloading: false,
          bleMacId: '',
          bleConnected: false,
        });
        this.getConnectedDevices();
      })
      .catch((e) => {
        // Failure code
        console.log(e);
      });
  };

  createFile = () => {
    console.log('chal rha hai', RNFS.ExternalStorageDirectoryPath);
    const AppFolder = 'Counts/snaps';
    var path = RNFS.ExternalStorageDirectoryPath + '/' + AppFolder;
    console.log('path============>', path);

    RNFS.mkdir(path)
      .then(() => {
        console.log('Done and done folder');
        ToastAndroid.show('Created Folder', ToastAndroid.SHORT);
      })
      .catch((e) => {
        console.log('error aya folder create me', e);
        ToastAndroid.show('Folder not Created, Error', ToastAndroid.SHORT);
      });
  };

  closeSettingsModal = () => {
    this.setState({
      isInnerSettingVisible: false,
      contactVisible: false,
    });
  };

  handleSerialConnected = (child) => {
    this.setState({serialConnected: child});
  };

  handleTheGirlsCriteria = (child) => {
    this.setState({theGirlsCriteria: child});
  };

  handleMinutesTotal = (child) => {
    this.setState({totalTime: child});
  };
  handleDisableActivity = (child) => {
    // console.log(child, 'disable activity ka child')
    this.setState({disableBtns: child});
  };
  handleCriteriaName = (child) => {
    // console.log(child, 'Criteria name is child')
    this.setState({criteriaValue: child});
    console.log('Kia hai Creteirads', child);
  };
  handleTime = (child) => {
    this.setState({amrapTime: child});
  };
  handleForTime = (child) => {
    this.setState({forTimeRound: child});
    if (!child == 0) {
      setTimeout(() => {
        this.setState({forTimeRoundCon: true});
        this.setState({criteriaPassed: false});
        setTimeout(() => {
          this.setState({criteriaPassed: true});
        }, 1000);
      }, 200);
    }
  };
  handleActivity = (child) => {
    this.setState({activity: child});
  };
  handleRoundIndex = (child) => {
    this.setState({roundIndex: child});
  };
  handleFullScreen = (child) => {
    this.setState({fullScreen: child});
  };
  handleActivityRound = (child) => {
    let {activityRound} = this.state;
    activityRound.push(child);
    this.setState({activityRound});
  };
  handleTimeLap = (child) => {
    this.setState({timeLap: child});
  };
  handlePassingMinutes = (child) => {
    this.setState({tabataMinutes: child});
    // console.log(child, 'child minutes')
  };
  handlePassingRest = (child) => {
    this.setState({tabataRest: child});
    // console.log(child, 'child rest')
  };
  handlePassingRound = (child) => {
    this.setState({tabataRounds: child});
    if (!child == 0) {
      setTimeout(() => {
        this.setState({tabataRoundCon: true});
        // this.setState({ criteriaPassed: false })
        // setTimeout(() => {
        //   this.setState({ criteriaPassed: true })
        // }, 1000);
      }, 200);
    }
    // console.log(child, 'child round ')
  };
  countActivityWithTime = (child) => {
    this.setState({actCondition: child});
    // console.log(child,'ye chala perfect')
    setTimeout(() => {
      this.setState({actCondition: false});
    }, 50);
  };
  handleDataClear = (child) => {
    this.setState({clearData: child});
  };
  handleHardValue = (child) => {
    this.setState({hardValue: child});
    console.log(this.state.hardValue, 'hardValue Home');
  };
  countRound = (child) => {
    this.setState({roundCondition: child});
    setTimeout(() => {
      this.setState({roundCondition: false});
    }, 100);
  };
  handleRoundLap = (child) => {
    this.setState({roundLap: child});
  };
  handleTotalTimeArr = (child) => {
    this.setState({totalTimeArr: child});
  };
  handleEmom = (child) => {
    this.setState({emomMinutes: child});
  };
  handleEmomMinutesShow = (child) => {
    this.setState({emomMinutesShow: child});
  };
  handleIndexCondition = (child) => {
    this.setState({indexCondition: child});
  };
  handleEmomMinutesRange = (child) => {
    this.setState({emomMinutesRange: child});
  };
  handleServiceStatus = (child) => {
    this.setState({serialService: child});
  };
  handleRunSerial = (child) => {
    this.setState({runSerial: child});
  };
  stopTimer = (child) => {
    if (this.state.indexCondition == true) {
      this.setState({stop: child});
      console.log('CHAla Stop Timer>>>>>><<<<<<<<< HOME');
      // setTimeout(() => {
      //   if (this.state.serialConnected) {
      //     RNSerialport.writeString('K');
      //     console.log(clc.xterm(175)('Sent K to serial'));
      //   }
      // }, 1500);
      setTimeout(() => {
        this.setState({stop: false});
      }, 50);
    }
  };
  handleTabataCompleteRounds = (child) => {
    this.setState({tabataCompleteRounds: child});
  };
  handleScreenShot = (child) => {
    this.setState({imageUri: child});
  };
  render() {
    currentTime = new Date().getTime();
    // let currentTime = new Date().getTime();
    const {
      duration,
      min,
      rest,
      min1,
      rest1,
      roundIndex,
      forTimeRound,
      uniqueValue,
      emomMinutesShow,
      emomMinutesRange,
      tabataRounds,
      tabataCompleteRounds,
      contactVisible,
    } = this.state;
    // console.log(forTimeRound, 'forTimeRound Home')

    if (this.state.clearData == true && this.state.clearDataHome == false) {
      this.setState({
        criteriaValue: null,
        activity: [],
        timeLap: [],
        clearDataHome: true,
        forTimeRound: 0,
        roundIndex: 0,
        circle: false,
        programCondition: false,
        uniqueValue: 0,
        hardValue: 0,
        emomMinutes: 0,
        forTimeRoundCon: false,
        emomMinutesShow: 0,
        note: false,
        pr: false,
        tabataRoundCon: false,
        tabataMinutes: 0,
        tabataRest: 0,
        tabataRounds: 0,
        tabataCompleteRounds: 0,
        showFullScreen: false,
      });
      setTimeout(() => {
        this.setState({clearDataHome: false});
      }, 50);
    }
    if (roundIndex == forTimeRound && this.state.forTimeRoundCon == true) {
      this.setState({
        onPlaying: false,
        activity: [],
        programCondition: false,
        showFullScreen: true,
        timeLap: [],
        forTimeRoundCon: false,
        forTimeCon: true,
      });
      setTimeout(() => {
        this.setState({forTimeCon: false});
      }, 100);
    }
    if (
      tabataCompleteRounds == tabataRounds &&
      this.state.tabataRoundCon == true
    ) {
      this.setState({
        onPlaying: false,
        activity: [],
        programCondition: false,
        timeLap: [],
        tabataRoundCon: false,
        tabataCon: true,
      });
      setTimeout(() => {
        this.setState({tabataCon: false});
      }, 100);
    }
    takeSnap = () => {
      // this.setState({ isModalVisible: !this.state.isModalVisible })
      // To capture Screenshot
      captureScreen({
        // Either png or jpg (or webm Android Only), Defaults: png
        format: 'jpg',
        // Quality 0.0 - 1.0 (only available for jpg)
        quality: 0.8,
      }).then(
        //callback function to get the result URL of the screnshot
        (uri) => {
          this.writeImage(uri);
          // this.createFile();
          console.log('URI me kiya mila.. ?', uri);
          this.setState((prevState) => ({
            imageArray: [
              ...prevState.imageArray,
              {imgURI: uri, date: new Date().toISOString()},
            ],
          }));
          // store.dispatch(
          //   snapshots({imgURI: uri, date: new Date().toISOString()}),
          // );
          this.setState({imageURI: uri, savedImagePath: uri}, () => {
            this.props.screeShot(this.state.imageArray);
          });
        },
        (error) => console.error('Oops, Something Went Wrong', error),
      );
      console.log(this.state.savedImagePath, 'hello');
    };
    return (
      <ScrollView
        // onPress={() => Keyboard.dismiss()}
        style={{backgroundColor: 'black'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
          }}>
          <StatusBar
            backgroundColor="black"
            barStyle="dark-content"
            hidden={true}
            showHideTransition={'fade'}
          />
          <View
            style={[
              style.container,
              {
                height: this.state.fullScreen ? 0 : height * 0.28,
              },
            ]}>
            <View
              style={[
                style.innerContainer,
                {
                  height: this.state.fullScreen ? 0 : height * 0.26,
                },
              ]}>
              <TimerBox
                criteriaValue={this.state.criteriaValue}
                minutesTotal={this.handleMinutesTotal}
                playOnOrOff={this.state.onPlaying}
                amrap={this.state.amrapTime}
                timeLap={this.handleTimeLap}
                roundLap={this.handleRoundLap}
                forTimeRound={this.state.forTimeRound}
                actCondition={this.state.actCondition}
                roundCondition={this.state.roundCondition}
                forTimeRoundCon={this.state.forTimeCon}
                clearData={this.state.clearData}
                activity={this.state.activity}
                emomMinutes={this.state.emomMinutes}
                totalTimeArr={this.handleTotalTimeArr}
                stop={this.state.stop}
                tabataCon={this.state.tabataCon}
                tabataRounds={this.state.tabataRounds}
                serialConnected={this.state.serialConnected}
              />
              <View
                style={{
                  width: width * 0.2,
                  height: height * 0.255,
                  justifyContent: 'space-between',
                }}>
                <ProgranId
                  minutes={this.handleTime}
                  criteriaName={this.handleCriteriaName}
                  disableActivity={this.handleDisableActivity}
                  playOnOrOff={this.state.onPlaying}
                  clearAll={this.handleDataClear}
                  forTime={this.handleForTime}
                  emomMinutes={this.handleEmom}
                  circle={this.state.programCondition}
                  stopTimer={this.stopTimer}
                  tabataMinutes={this.handlePassingMinutes}
                  tabataRest={this.handlePassingRest}
                  tabataRounds={this.handlePassingRound}
                  serialConnected={this.state.serialConnected}
                  bluetoothOn={this.state.isBluetoothOn}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {this.state.showFullScreen ? (
                    <MemorySave screeShot={this.handleScreenShot} />
                  ) : null}
                  <Memory
                    setContainerWidth={this.state.showFullScreen}
                    imageUri={this.state.imageUri}
                  />
                </View>
              </View>
              <View style={style.countDownTimerContainer}>
                <View style={style.header2}>
                  <View style={style.barView} key={this.state.uniqueValue}>
                    <CountdownCircleTimer
                      isPlaying={this.state.circle}
                      size={height * 0.19}
                      strokeWidth={height * 0.015}
                      duration={duration}
                      colors="#0083FF"
                      trailColor="#ADADAD">
                      {({remainingTime, animatedColor}) =>
                        this.state.circle == false ? (
                          <Pressable
                            onPress={this.playTimer}
                            android_ripple={{
                              color: 'white',
                              radius: width * 0.005,
                              borderless: true,
                            }}>
                            <Image
                              source={require('../../image/play.jpg')}
                              style={{
                                width: height * 0.14,
                                height: height * 0.14,
                              }}
                            />
                          </Pressable>
                        ) : (
                          <Animated.Text
                            style={{
                              fontSize:
                                remainingTime == 0
                                  ? width * 0.02
                                  : width * 0.035,
                              color: '#FF6100',
                              fontFamily: Fonts.VarelaRoundRegular,
                              textAlign: 'center',
                            }}>
                            {
                              remainingTime == 0 && !forTimeRound == 0
                                ? 'Round\n' + roundIndex + ' / ' + forTimeRound
                                : remainingTime == 0 && !tabataRounds == 0
                                ? 'Round\n' +
                                  tabataCompleteRounds +
                                  ' / ' +
                                  tabataRounds
                                : remainingTime == 0 && !emomMinutesShow == 0
                                ? 'Minute\n' +
                                  (emomMinutesShow - 1) +
                                  ' of ' +
                                  emomMinutesRange
                                : remainingTime == 0
                                ? 'Round\n' + roundIndex
                                : remainingTime
                              // remainingTime == 0 ? 'Round\n'+roundIndex : remainingTime + (!forTimeRound == 0 && remainingTime == 0 ? "/"+ forTimeRound : null)
                            }
                          </Animated.Text>
                        )
                      }
                    </CountdownCircleTimer>
                  </View>
                </View>
                <View style={style.header3Inner}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: width * 0.1,
                    }}>
                    <Pressable
                      android_ripple={{
                        color: '#FF6100',
                        borderless: true,
                        radius: width * 0.01,
                      }}
                      style={style.sliderPrContainer}
                      onPress={() =>
                        this.setState({
                          test: !this.state.test,
                        })
                      }>
                      <Cal
                        name={'calculator-variant'}
                        size={width * 0.045}
                        color="white"
                      />
                    </Pressable>
                    <Pressable
                      android_ripple={{
                        color: '#FF6100',
                        borderless: true,
                        radius: width * 0.01,
                      }}
                      style={style.sliderPrContainer}
                      onPress={() =>
                        this.setState({
                          isSettingVisible: !this.state.isSettingVisible,
                        })
                      }>
                      <Icon
                        name={'settings'}
                        size={width * 0.045}
                        color="white"
                      />
                    </Pressable>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: width * 0.1,
                    }}>
                    <Pressable
                      android_ripple={{
                        color: '#FF6100',
                        borderless: true,
                        radius: width * 0.01,
                      }}
                      onPress={() => this.setState({note: !this.state.note})}
                      style={style.sliderPrContainer}>
                      <Icon
                        name={'event-note'}
                        size={width * 0.045}
                        color="white"
                      />
                    </Pressable>
                    <Pressable
                      android_ripple={{
                        color: '#FF6100',
                        borderless: true,
                        radius: width * 0.01,
                      }}
                      onPress={() => this.setState({pr: !this.state.pr})}
                      style={style.sliderPrContainer}>
                      <Human
                        name={'human-handsup'}
                        size={width * 0.045}
                        color="white"
                      />
                      <Icon
                        name={'done'}
                        size={width * 0.015}
                        color="white"
                        style={{
                          position: 'absolute',
                          right: width * 0.0,
                          top: height * 0.024,
                        }}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <CenterBox
            note={this.state.note}
            pr={this.state.pr}
            activity={this.state.activity}
            activityRound={this.state.activityRound}
            timeLap={this.state.timeLap}
            roundLap={this.state.roundLap}
            actCondition={this.state.actCondition}
            playOnOrOff={this.state.onPlaying}
            amrap={this.state.amrapTime}
            roundCondition={this.state.roundCondition}
            clearData={this.state.clearData}
            roundIndex={this.handleRoundIndex}
            forTimeCon={this.state.forTimeCon}
            forTimeRound={this.state.forTimeRound}
            stop={this.state.stop}
            forTimeRoundCon={this.state.forTimeRoundCon}
            emomMinutes={this.state.emomMinutes}
            emomMinutesShow={this.handleEmomMinutesShow}
            totalTimeArr={this.state.totalTimeArr}
            indexCondition={this.handleIndexCondition}
            tabataMinutes={this.state.tabataMinutes}
            tabataRest={this.state.tabataRest}
            tabataRounds={this.state.tabataRounds}
            tabataCon={this.state.tabataCon}
            tabataRoundCon={this.state.tabataRoundCon}
            tabataCompleteRounds={this.handleTabataCompleteRounds}
            fullScreen={this.handleFullScreen}
            screeShot={this.handleScreenShot}
            showFullScreen={this.state.showFullScreen}
            serialConnected={this.state.serialConnected}
          />
          <LowerBox
            amrap={this.state.amrapTime}
            activitypassed={this.state.criteriaPassed}
            playOnOrOff={this.state.onPlaying}
            activity={this.handleActivity}
            activityRound={this.handleActivityRound}
            disableBtns={this.state.disableBtns}
            circle={this.state.circle}
            hardValue={this.state.hardValue}
            hardValueDone={this.countActivityWithTime}
            roundCondition={this.state.roundCondition}
            stop={this.state.stop}
            clearData={this.state.clearData}
            forTimeRoundCon={this.state.forTimeCon}
            emomMinutes={this.state.emomMinutes}
            emomMinutesRange={this.handleEmomMinutesRange}
            tabataCon={this.state.tabataCon}
            fullScreen={this.state.fullScreen}
            serialConnected={this.state.serialConnected}
            bluetoothOn={this.state.isBluetoothOn}
          />
          <HardwereBotton
            hardValue={this.handleHardValue}
            BTValues={this.state.BTValues}
            countRound={this.countRound}
            playOnOrOff={this.state.onPlaying}
            amrap={this.state.amrapTime}
            actCondition={this.state.actCondition}
            forTimeRoundCon={this.state.forTimeCon}
            stop={this.state.stop}
            emomMinutes={this.state.emomMinutes}
            activity={this.state.activity}
            tabataCon={this.state.tabataCon}
            fullScreen={this.state.fullScreen}
            bleMacId={this.state.bleMacId}
            bleData={this.state.bleData}
            isConnected={this.state.bleConnected}
            handleServiceStatus={this.handleServiceStatus}
            serialConnected={this.handleSerialConnected}
            playTimer={this.playTimer}
            runSerial={this.state.runSerial}
            handleRunSerial={this.handleRunSerial}
            stopTimer={this.stopTimer}
            bluetoothOn={this.state.isBluetoothOn}
          />
          <Modal
            animationIn="slideInDown"
            animationOut="slideOutUp"
            onBackdropPress={() =>
              this.setState({isModalVisible: !this.state.isModalVisible})
            }
            isVisible={this.state.isModalVisible}
            // isVisible={true}
            style={style.modalContainer}>
            <View style={style.modalInner}>
              <Pressable
                android_ripple={{
                  color: '#FF6100',
                  borderless: true,
                }}
                style={{
                  position: 'absolute',
                  right: width * 0.008,
                  top: height * 0.009,
                }}
                onPress={() =>
                  this.setState({isModalVisible: !this.state.isModalVisible})
                }>
                <Icon
                  name={'cancel'}
                  size={width * 0.025}
                  color="#FF6100"
                  onPress={this.toggleModal}
                />
              </Pressable>
              <Calculator2 />
            </View>
          </Modal>
          <SettingsModal
            // isVisible={true}
            isVisible={this.state.isSettingVisible}
            onSwipeStart={() => this.setState({isSettingVisible: false})}
            onBackdropPress={() => this.setState({isSettingVisible: false})}
            onPress={() => this.setState({isSettingVisible: false})}
            headerIcon={
              <Icon name={'settings'} size={width * 0.04} color="white" />
            }
            headerName={'Settings'}
            listItem={
              <FlatList
                contentContainerStyle={{justifyContent: 'center'}}
                data={this.state.settingData}
                renderItem={this._renderSettingList}
              />
            }
          />
          <SettingsModal
            // isVisible={true}
            isVisible={this.state.isInnerSettingVisible}
            onSwipeStart={this.closeSettingsModal}
            onBackdropPress={this.closeSettingsModal}
            onPress={this.closeSettingsModal}
            headerName={this.state.mainName}
            listItem={
              <FlatList
                contentContainerStyle={{
                  width: !this.state.contactVisible ? width * 0.26 : 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                data={this.state.filteredList}
                renderItem={this._renderInnerSettingList}
              />
            }
            note={
              <Text style={{color: 'white', fontSize: width * 0.015}}>
                {this.state.settingsNote}
              </Text>
            }
            ContactScreen={
              <View
                style={{
                  width: this.state.contactVisible ? width * 0.26 : 0,
                  height: this.state.contactVisible ? height * 0.44 : 0,
                  overflow: 'hidden',
                  borderWidth: this.state.contactVisible ? width * 0.001 : 0,
                  borderColor: 'white',
                  padding: this.state.contactVisible ? width * 0.025 : 0,
                  borderRadius: width * 0.05,
                }}>
                <View
                  style={{
                    marginVertical: height * 0.025,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: width * 0.03,
                      fontWeight: 'bold',
                      fontFamily: Fonts.VarelaRoundRegular,
                    }}>
                    Counts Inc.
                  </Text>
                </View>
                <Text style={{color: 'white', fontSize: width * 0.015}}>
                  Address
                </Text>
                <Text style={{color: 'white', fontSize: width * 0.015}}>
                  City
                </Text>
                <Text style={{color: 'white', fontSize: width * 0.015}}>
                  State/Country
                </Text>
                <View style={{marginVertical: height * 0.025}}>
                  <Text style={{color: 'white', fontSize: width * 0.015}}>
                    Email:
                  </Text>
                </View>
              </View>
            }
          />
          <Modal
            isVisible={this.state.BTAvailDevModal}
            onBackdropPress={() => this.setState({BTAvailDevModal: false})}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={style.BtModalContainer}>
              <View style={style.btModalInnerCotainer}>
                <Text
                  style={[
                    style.settingListText,
                    {
                      textAlign: 'center',
                      fontSize: width * 0.022,
                    },
                  ]}>
                  Available Devices
                </Text>
                <ActivityIndicator
                  animating={this.state.isloading}
                  size={width * 0.03}
                  color="#FF6100"
                />
              </View>
              {this.state.notfound ? (
                <Text style={style.noBtDevicesText}>
                  No nearby devices were found
                </Text>
              ) : (
                <FlatList
                  data={this.state.BTDev}
                  renderItem={this._renderBTList}
                />
              )}
              <TouchableOpacity onPress={this.scanBTAvailDev}>
                <View style={style.btScanBtnContainer}>
                  <Text
                    style={[
                      style.settingListText,
                      {
                        textAlign: 'center',
                        fontSize: width * 0.02,
                      },
                    ]}>
                    Scan
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal
            isVisible={this.state.BTConnectDevModal}
            onBackdropPress={() => this.setState({BTConnectDevModal: false})}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={style.BtModalContainer}>
              <View style={style.btModalInnerCotainer}>
                <Text
                  style={[
                    style.settingListText,
                    {
                      textAlign: 'center',
                      fontSize: width * 0.022,
                    },
                  ]}>
                  Connected Devices
                </Text>
              </View>
              {this.state.notconnected ? (
                <Text style={style.noBtDevicesText}>
                  No devices were connected
                </Text>
              ) : (
                <FlatList
                  data={this.state.BTConnectedDev}
                  renderItem={this._renderBTConnectedList}
                />
              )}
            </View>
          </Modal>
          {/* <Modal
            isVisible={true}
            // isVisible={this.state.setPin}
            // onBackdropPress={() => this.setState({ setPin: false })}
            style={{
              maxHeight: height * 4,
              maxWidth: width * .5,
              left: width * .2,
              alignItems: 'center',
              // top:height * .02
            }}>
            <View style={{
              width: width * .5,
              height: height * .4,
              borderWidth: height * .005,
              borderColor: '#5F4B2F',
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View>
                <TextInput
                keyboardType='decimal-pad'
                secureTextEntry
                value={this.state.text}
                maxLength={4}
                onChangeText={text => this.setState({ text })}
                style={{
                  width: width * .2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignSelf: 'center',
                  textAlign: 'center',
                  borderWidth: height * .0025,
                  borderColor: '#EDB0A6',
                  backgroundColor: '#000',
                  height: height * .08,
                  color: 'white'
                }}
                selectionColor={'white'}
                underlineColorAndroid='#000'
                />
              </View>
              <View style={{
                // justifyContent: 'center',
                alignItems: 'center',
                top: height * .1
              }}>
                <Text style={{ color: 'white' }} >Enter a PIN Code</Text>
                <CodeInput
                  ref="codeInputRef2"
                  keyboardType="numeric"
                  codeLength={5}
                  className='border-circle'
                  // compareWithCode='12345'
                  // autoFocus={false}
                  codeInputStyle={{ fontWeight: '800' }}
                  onFulfill={(code) => console.log('Kiya Mila', code)}
                // onFulfill={(isValid, code) => this._onFinishCheckingCode2(isValid, code)}
                />
              </View>
              <OTPInputView
                onCodeFilled={(pinSet) => this.setNewPin(pinSet)}
                style={{ width: width * .25, height: height * .15 }}
                pinCount={4}
                autoFocusOnLoad={true}
                secureTextEntry
                codeInputFieldStyle={{
                  width: 30,
                  height: 45,
                  borderWidth: 0,
                  borderBottomWidth: 1,
                }}
                codeInputHighlightStyle={{
                  borderColor: "#EDB0A6",
                }} />
            </View>
          </Modal> */}
          <SetPinModal
            // isVisible={true}
            isVisible={this.state.setPin}
            onBackPress={() => this.setState({setPin: false})}
            label={'Enter a PIN Code'}
            onFulfill={(code) => this.setNewPin(code)}
          />
          <SetPinModal
            isVisible={this.state.confirmPin}
            onBackPress={() => this.backToNewPin()}
            label={'Confirm your PIN Code'}
            onFulfill={(code) => this.cofirmNewPin(code)}
          />
          {/* <Modal
            isVisible={this.state.setTime}
            // onBackdropPress={() => this.setState({ setTime: false })}
            style={{
              maxHeight: height * 4,
              maxWidth: width * .5,
              left: width * .2,
              alignItems: 'center'
              // top:height * .02
            }}>
            <View style={{
              width: width * .5,
              height: height * .4,
              borderWidth: height * .005,
              borderColor: '#5F4B2F',
              backgroundColor: 'black',
              justifyContent: 'space-evenly',
              // alignItems: 'center',
            }}> */}
          {this.state.setTime == true && (
            <DateTimePicker
              testID="dateTimePicker"
              // value={new Date(1598051730000)}
              value={new Date(currentTime)}
              mode={'time'}
              is24Hour={true}
              display="spinner"
              onChange={() => this.setState({setTime: false})}
              locale="es-ES"
            />
          )}
          {/* </View>
          </Modal> */}
          {/* <Modal
            // isVisible={true}
            isVisible={this.state.confirmPin}
            // onBackdropPress={() => this.setState({ confirmPin: false })}
            style={{
              maxHeight: height * 4,
              maxWidth: width * .5,
              left: width * .2,
              alignItems: 'center'
              // top:height * .02
            }}>
            <View style={{
              width: width * .5,
              height: height * .4,
              borderWidth: height * .005,
              borderColor: '#5F4B2F',
              backgroundColor: 'black',
              justifyContent: 'space-evenly',
              // alignItems: 'center',
            }}>
              <View
                style={{
                  left: width * 0.01,
                  bottom: height * 0.04,
                }}>
                <TouchableOpacity onPress={() => this.backToNewPin()}>
                  <Icon
                    name={'arrow-back'}
                    size={width * 0.025}
                    color="#FF6100"
                  />
                </TouchableOpacity>
              </View>
              <View style={{
                // justifyContent: 'center',
                alignItems: 'center',
                bottom: height * .05
              }}>
                <Text style={{ color: 'white' }} >Confirm your PIN Code</Text>
                <OTPInputView
                  onCodeFilled={(pinConfirm) => this.cofirmNewPin(pinConfirm)}
                  style={{ width: width * .25, height: height * .15 }}
                  pinCount={4}
                  secureTextEntry
                  codeInputFieldStyle={{
                    width: 30,
                    height: 45,
                    borderWidth: 0,
                    borderBottomWidth: 1,
                  }}
                  codeInputHighlightStyle={{
                    borderColor: "#EDB0A6",
                  }} />
              </View>
            </View>
          </Modal> */}
        </View>
      </ScrollView>
    );
  }
}
