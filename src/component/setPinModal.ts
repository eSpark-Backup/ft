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
    UIManager,
    FlatList,
    TouchableWithoutFeedback,
    Keyboard,
    Animated,
    Pressable,
    NativeModules,
} from 'react-native';
import Modal from 'react-native-modal';

import { Icon } from 'react-native-material-ui';
import { Justin } from '../service/TheGirls/TheHeroes';
import { Fonts } from '../utils/fonts'
import CodeInput from 'react-native-confirmation-code-input';



const { height, width } = Dimensions.get('window');
const setPinModal = ({ isVisible, onFulfill, listItem, onPress, headerName, onSwipeStart, onBackPress, headerIcon, ContactScreen, label }) => {



    return (

        <Modal
            isVisible={isVisible}
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
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                <View
                    style={{
                        right: width * 0.22,
                        top: height * 0.04,
                    }}>
                    <TouchableOpacity onPress={onBackPress}>
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
                    top: height * .1
                }}>
                    <Text style={{ color: 'white' }} >{label}</Text>
                    <CodeInput
                        codeLength={5}
                        secureTextEntry
                        autoFocus={true}
                        activeColor='#fff'
                        inactiveColor='#EDB0A6'
                        keyboardType="numeric"
                        className='border-circle'
                        codeInputStyle={{ fontWeight: '800' }}
                        onFulfill={onFulfill}
                    // compareWithCode='12345'
                    // onFulfill={(isValid, code) => this._onFinishCheckingCode2(isValid, code)}
                    />
                </View>
            </View>
        </Modal>
    )
};

export default setPinModal;