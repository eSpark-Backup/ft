import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    LayoutAnimation,
} from 'react-native';
import style from './style';
import Plus from 'react-native-vector-icons/Feather';
import { Fonts } from '../../../utils/fonts';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 80,
            meter: false,
            selectClock: false,
            isModalVisible: false,
            currentTime: null,
        }
    }
    changeLayoutClock = () => {
        this.props.selectClock(!this.state.selectClock)
    };
    componentWillMount(){
        this.getCurrentTime();
    }
    getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let am_pm = 'PM';
    
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
    
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
    
        if (hour > 12) {
          hour = hour - 12;
        }
    
        if (hour == 0) {
          hour = 12;
        }
    
        if (new Date().getHours() < 12) {
          am_pm = 'AM';
        }
    
        this.setState({ currentTime: hour + ':' + minutes + ' ' + am_pm });
        
      }
      componentWillUnmount() {
        clearInterval(this.timer);
      }
    
      componentDidMount() {
        this.timer = setInterval(() => {
          this.getCurrentTime();
        }, 1000);
      }
    render() {

        return (
            <View style={[style.timeSelectScreen, { backgroundColor: "black" }]}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: height * .05,
                    alignItems: 'center',
                    width: width * .29,
                }}>
                    <Text style={[style.countHeading,{fontSize: height * .09}]} >
                        Clock
                            </Text>
                </View>
                <View style={{
                  flex:1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: height * .05,
                    width: width * .59,
                }}>
                    <Text style={{fontSize:height * .09,color:'white'}} >
                        {this.state.currentTime}
                    </Text>
                </View>
                <View style={{
                    flex:1,
                    justifyContent: 'flex-end',
                }}>
                <TouchableOpacity onPress={this.changeLayoutClock}>
                    <View style={[style.timeSelectBtn]} >
                        <Text style={[style.modalHeading, { color: 'black', fontSize: height * .04 }]}>SELECT TIMER</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        );
    }

};