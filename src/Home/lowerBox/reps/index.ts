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
    FlatList
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
import Run from 'react-native-vector-icons/MaterialCommunityIcons';
import { store } from '../../../Store';
import Modal from 'react-native-modal'
const dataActivity = [
    {
        name: 'Reps',
    },
    {
        name: 'Reps',

    },
    {
        name: 'Reps',

    },
    {
        name: 'Reps',

    },
    {
        name: 'Reps',

    },
    {
        name: 'Reps',

    },
    {
        name: 'Reps',

    },
    {
        name: 'Reps',

    },
    {
        name: 'Reps',

    },
    {
        name: 'Reps',

    },
    {
        name: 'Reps',

    },
    {
        name: 'Reps',

    },
];
const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 80,
            isModalVisible: false,
        }
    }
    changeLayoutMeter = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState({ meter: !this.state.meter });
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })

    };
    _renderMyList = ({ item }) => (
        <View style={{ flex: 1, }}>
            <TouchableOpacity
                style={{
                    width: width * 0.10,
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
                        top: height * .007
                        // bottom: height * 0.005,
                    }}>
                    <Run name="run" size={width * .03}></Run>
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
            <View >
                <View style={{flex: 1}}>
                    <TouchableOpacity
                        style={{
                            width: width * 0.07,
                            height: height * 0.105,
                            borderWidth: height * 0.005,
                            backgroundColor: '#565656',
                            borderColor: '#EDB0A6',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            marginHorizontal: width * 0.01,
                            borderRadius: width * 0.01,
                            marginBottom: height * 0.012,
                        }}
                        onPress={this.toggleModal}// onPress={() => console.log(store.getState().program, '.?')}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: height * 0.05,
                                color: 'white',
                                top: height * .005
                                // bottom: height * 0.005,
                            }}>
                            <Run name="run" size={width * .02}></Run>
                            </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: height * 0.023,
                                bottom: height * 0.007,
                                color: 'white',
                            }}>
                            {/* {item.name} */}
                            Reps
                        </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={style.chooseProgramView} onPress={this.toggleModal}>
                        <Text style={style.chooseProgram}>Program ID</Text>
                    </TouchableOpacity> */}
                </View>
                <Modal
                    animationIn="flipInX"
                    animationOut="flipOutX"
                    isVisible={this.state.isModalVisible}
                    style={style.modalContainer}>
                    <View style={style.modalInner}>
                        <View style={style.boxConatainer}>
                            <View style={style.boxInner}>
                                {/* Box Header */}
                                <View style={style.boxHeader}>
                                    <View style={style.boxHeaderInner}>
                                        <Text style={style.modalHeading}> Select Your Reps</Text>
                                        <IconToggle name={'cancel'} size={width * .04} color='#FF6100' onPress={this.toggleModal} />
                                    </View>
                                </View>
                                {/* Box Body */}
                                {/* <ScrollView> */}
                                <View style={{
                                    height: height * .61,
                                    width: width * .75,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <FlatList
                                        // horizontal={true}
                                        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', }}
                                        data={dataActivity}
                                        renderItem={this._renderMyList}
                                    />
                                </View>
                                {/* </ScrollView> */}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View >
        );
    }

};



