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
import { selectProgram, selectActivity } from '../../../Store/actions/program';
import { store } from '../../../Store';
import { activity } from '../../../config/activities';
import Run from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal'

const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 80,
            isModalVisible: false,
            index: 1,
            masterDataActivity: [],
            search: '',
            isDataNull: false,


        }
    }
    componentDidMount() {
        this.handleFilterCriteria(store.getState()?.program.key);

        this.unsubscribe = store.subscribe(() => {
            // console.log('0009999', store.getState());
            this.handleFilterCriteria(store.getState()?.program.key);
        });
    }

    changeLayoutMeter = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState({ meter: !this.state.meter });
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })

    };
    handleFilterCriteria(key) {
        let dataActivity = [];

        activity.filter((v) => {
            if (v.key == key) {
                dataActivity.push(v);

                this.setState({ dataActivity });
                // this.setState({ masterDataActivity: dataActivity })

            }
        });
    }

    // searchFilterFunction = (text) => {
    //     // Check if searched text is not blank
    //     if (text) {
    //         // Inserted text is not blank
    //         // Filter the masterDataSource
    //         // Update FilteredDataSource
    //         const newData = this.state.masterDataActivity.filter(
    //             function (item) {
    //                 const itemData = item.value
    //                     ? item.value.toUpperCase()
    //                     : ''.toUpperCase();
    //                 const textData = text.toUpperCase();
    //                 return itemData.indexOf(textData) > -1;
    //             });
    //         if (newData.length == 0) {
    //             Keyboard.dismiss()
    //             this.setState({ isDataNull: true })
    //         } else {
    //             this.setState({ isDataNull: false })
    //         }
    //         this.setState({ dataActivity: newData })
    //         this.setState({ search: text })
    //         // setFilteredDataSource(newData);
    //         // setSearch(text);
    //     } else {
    //         // Inserted text is blank
    //         // Update FilteredDataSource with masterDataSource
    //         this.setState({ dataActivity: this.state.masterDataActivity })
    //         this.setState({ search: text })
    //         // setFilteredDataSource(masterDataSource);
    //         // setSearch(text);
    //     }
    // };
    handleSelectProgram = (item) => {
        store.dispatch(selectActivity(item));
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    _renderMyList = ({ item, index }) => (
        <View style={{ flex: 1, }} key={index}>
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
                onPress={() => this.handleSelectProgram(item)} >
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
                    {item.value}
                </Text>
            </TouchableOpacity>

        </View>
    );
    render() {
        const { dataActivity } = this.state;

        return (
            <View >
                <View style={{ flex: 1 }}>
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
                                fontSize: height * 0.023,
                                top: height * .003,
                                color: 'white',
                            }}>
                            {store.getState().program
                                ? store.getState().program.value
                                : 'Programs'}
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: height * 0.04,
                                color: 'white',
                                // bottom: height * 0.005,
                            }}>
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
                                        <Text style={style.modalHeading}>Select Your Activity</Text>
                                        {/* <Searchbar
                                            // keyboardType={this.state.keyType}
                                            style={{ width: width * .25, borderWidth: height * .0025, borderColor: '#FF6100', backgroundColor: '#000', height: height * .08 }}
                                            inputStyle={{ color: '#FF6100', fontFamily: Fonts.VarelaRoundRegular }}
                                            iconColor='#FF6100'
                                            placeholderTextColor='#949494'
                                            placeholder="Type Here..."
                                            value={this.state.search}
                                            onChangeText={(text) => this.searchFilterFunction(text)}
                                        /> */}
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
                                        // contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', }} 
                                        data={dataActivity}
                                        renderItem={(item, index) =>
                                            this._renderMyList(item, index)}
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



