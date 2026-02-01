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
  ToastAndroid,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import style from './style';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../../../utils/fonts';
import { IconToggle } from 'react-native-material-ui';
import { selectProgram } from '../../../Store/actions/program';
import { store } from '../../../Store';
import Modal from 'react-native-modal';
import { captureScreen } from 'react-native-view-shot';
import { snapshots } from '../../../Store/actions/snapshots';
import RNFS from 'react-native-fs';
import Save from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 80,
      isModalVisible: false,
      imageURI: '',
      imageArray: [],
      savedImagePath: [],
    };
  }

  changeLayoutMeter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState({ meter: !this.state.meter });
  };

  componentDidMount() {
    console.log('Ab chala Yeh..!');
    this.setState({ imageArray: store.getState().snapshots });
    // store.dispatch(snapshots([]))
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
            { imgURI: uri, date: new Date().toISOString() },
          ],
        }));
        // store.dispatch(
        //   snapshots({imgURI: uri, date: new Date().toISOString()}),
        // );
        this.setState({ imageURI: uri, savedImagePath: uri }, () => {
          this.props.screeShot(this.state.imageArray);
        });
      },
      (error) => console.error('Oops, Something Went Wrong', error),
    );
    console.log(this.state.savedImagePath, 'hello');
  };

  writeImage = (img) => {
    const path =
      RNFS.ExternalStorageDirectoryPath +
      `/Counts/snaps/${img.match(/[\w.]+$/)}`;
    console.log('kli', img);
    console.log(`image name ${img.match(/[\w.]+$/)}`);
    RNFS.copyFile(img, path)
      .then(() => {
        console.log('hogaya! save folder me');
        ToastAndroid.show('ScreenShot Saved', ToastAndroid.SHORT);
      })
      .catch((err) => {
        console.log('aya error', err.message);
        ToastAndroid.show('ScreenShot Saving Failed', ToastAndroid.SHORT);
      });
  };

  _renderMyList = ({ item }) => (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          width: width * 0.16,
          height: height * 0.165,
          borderWidth: height * 0.005,
          backgroundColor: '#565656',
          borderColor: '#EDB0A6',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: width * 0.01,
          borderRadius: width * 0.01,
          marginBottom: height * 0.012,
        }}
        onPress={() => console.log(store.getState().program, '.?')}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: height * 0.05,
            color: 'white',
            bottom: height * 0.005,
          }}>
          +
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: height * 0.023,
            bottom: height * 0.012,
            color: 'white',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
  render() {
    return (
      <View>
        {/* <View style={style.header3Inner}> */}
        <TouchableOpacity style={[style.dateLog, {
          width: this.props.fullScreen ? width * .15 : width * 0.098,
          flexDirection: 'row',
          right: this.props.fullScreen ? width * .05 : 0

        }]} onPress={this.takeSnap}>
          <Text style={style.dateLogText}>Memory Save</Text>
          <Save
            name={'save'}
            size={width * 0.015}
            color="white"
          />
        </TouchableOpacity>
        {/* </View> */}
      </View>
    );
  }
}
