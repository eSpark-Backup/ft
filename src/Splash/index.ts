import React, {Component} from 'react';
import {Text} from 'react-native';

import Splash from './Splash';
import Login from '../Home/index';
import Agreement from '../Agreement/index';
import Navigator from '../navigation/stack-navigator';
import RNFS from 'react-native-fs';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../Store';

class Main extends Component {
  componentDidMount() {
    console.log('splash');
    // this.createFile();
  }
  // createFile = () => {
  //   console.log('chal rha hai', RNFS.ExternalStorageDirectoryPath);
  //   const AppFolder = 'Counts/snaps';
  //   var path = RNFS.ExternalStorageDirectoryPath + '/' + AppFolder;
  //   console.log('path============>', path);

  //   RNFS.mkdir(path)
  //     .then(() => {
  //       console.log('Done and done folder');
  //     })
  //     .catch((e) => {
  //       console.log('error aya folder create me', e);
  //     });
  // };
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'Splash'};
    // console.log('start doing some tasks for about 3 seconds')
    setTimeout(() => {
      // console.log('Done some tasks for about 3 seconds')
      this.setState({currentScreen: 'Agreement'});
    }, 5000);
  }
  render() {
    const {currentScreen} = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Navigator />;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {currentScreen === 'Splash' ? <Splash /> : <Navigator />}
        </PersistGate>
      </Provider>
    );
  }
}

export default Main;
