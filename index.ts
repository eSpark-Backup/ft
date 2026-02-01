/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Splash/index';
// import App from './countDownTimer';
import {name as appName} from './app.json';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
