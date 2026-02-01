import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    LayoutAnimation,
    Pressable,
    TouchableWithoutFeedback,
    TextInput,
    Keyboard
} from 'react-native';
import style from './style';
import Plus from 'react-native-vector-icons/Feather';
import styles from './countStyle';

import { Fonts } from '../../../utils/fonts';
import RNPickerSelect from "react-native-picker-select";
import { Toolbar, Icon, IconToggle } from 'react-native-material-ui';
const { height, width } = Dimensions.get('window');
import Modal from 'react-native-modal'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 80,
            meter: false,
            selectTimeDown: false,
            isModalVisible: false,
        }
    }
    changeLayoutMeterDown = () => {
        this.props.selectTimeDown(!this.state.selectTimeDown)
    };
    render() {

        return (
            <View style={[style.timeSelectScreen, { backgroundColor: "black" }]}>
                <View style={styles.headerContainer}>
                    <View style={styles.bottonAndHeadingView}>
                        <Pressable style={styles.backBotton}
                            android_ripple={{
                                color: 'white',
                                borderless: true,
                                radius: height * .1,
                            }}
                            onPress={this.changeLayoutMeter}
                        >
                            <Icon name='navigate-before' size={height * .08} color='white' />
                        </Pressable>
                    <Text style={styles.countHeading}>
                        Count-Down Timer
                    </Text>
                    </View>
                    <Text style={styles.limit} >
                        Time Limit
                    </Text>
                </View>
                <View style={styles.centerContainer}>
                    
                    {/* <FlatList
                        // horizontal={true}
                        style={{ marginTop: width * .01 }}
                        data={this.state.data}
                        renderItem={this._renderMyList}
                    /> */}
                </View>
                <View style={styles.additionalTimerContainer}>
                    <Pressable style={styles.additionalTimerBotton}
                        android_ripple={{
                            color: 'white',
                            radius: width * .1,
                        }}
                        onPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
                    >
                        <Plus name='plus-circle' size={width * .03} color='white' />
                        <Text style={styles.addTime}>
                            Add Additional Timer
                        </Text>
                    </Pressable>
                    <Modal
                        animationIn="slideInLeft"
                        animationOut="slideOutRight"
                        swipeDirection="right"
                        backdropColor='black'
                        backdropOpacity={0.4}
                        onSwipeComplete={() => this.setState({ isModalVisible: false })}
                        // onBackdropPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
                        isVisible={this.state.isModalVisible}
                        style={styles.modailContainer}>
                        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                            <View style={styles.modalInner}>
                                <View style={styles.inserTextinputView}>
                                    <TextInput
                                        placeholder='Type Time'
                                        placeholderTextColor="white"
                                        keyboardType="number-pad"
                                        maxLength={3}
                                        style={styles.inserTextinput}
                                        onChangeText={e => this.setState({ time: e })}
                                    />
                                </View>
                                <RNPickerSelect
                                    placeholder={{
                                        label: 'Timer',
                                    }}
                                    onValueChange={value => this.valueChange(value)}
                                    style={{
                                        inputAndroid: styles.rnPicker
                                    }}
                                    items={[
                                        { label: 'Minutes', value: 'Minutes' },
                                        { label: 'Seconds', value: 'Seconds' },
                                        { label: 'Rest', value: 'Rest' },

                                    ]}
                                    useNativeAndroidPickerStyle={false}
                                />
                                <TouchableOpacity onPress={this.submitCondition}>
                                    <View style={[styles.selectTimeBotton, { backgroundColor: '#FF6100' }]} >
                                        <Text style={[style.modalHeading, { color: 'white', fontSize: height * .025 }]}>SELECT TIMER</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                    <TouchableOpacity onPress={this.changeLayoutMeterDown}>
                        <View style={[style.timeSelectBtn, { backgroundColor: '#FF6100' }]} >
                            <Text style={[style.modalHeading, { color: 'white', fontSize: height * .04 }]}>SELECT TIMER</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

};