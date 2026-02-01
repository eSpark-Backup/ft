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
  Keyboard
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-material-ui';
import Modal from 'react-native-modal';
import { Searchbar } from 'react-native-paper';

import { criteria1 } from '../../../config/criteria1';
import { Fonts } from '../../../utils/fonts';
import { selectProgram, selectCriteria1 } from '../../../Store/actions/program';
import { store } from '../../../Store';
import style from './style';

const { height, width } = Dimensions.get('window');


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 80,
      isModalVisible: false,
      criteriaName: null,
      masterDataActivity: [],
      search: '',
      isDataNull: false,
      keyType: '',
    };
  }

  componentDidMount() {
    this.handleFilterCriteria(store.getState()?.program.key);
    this.setState({ isModalVisible: this.props.isModalVisible });
    this.unsubscribe = store.subscribe(() => {
      this.handleFilterCriteria(store.getState()?.program.key);
    });
    this.keyboardChange()
  }
  keyboardChange = () => {
    if (this.props.selectedProgram === 'Open') {
      this.setState({ keyType: 'decimal-pad' })
    }
    else {
      this.setState({ keyType: 'default' })
    }
  }
  searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = this.state.masterDataActivity.filter(
        function (item) {
          const itemData = item.value
            ? item.value.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      if (newData.length == 0) {
        Keyboard.dismiss()
        this.setState({ isDataNull: true })
      } else {
        this.setState({ isDataNull: false })
      }
      this.setState({ dataActivity: newData })
      this.setState({ search: text })
      // setFilteredDataSource(newData);
      // setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      this.setState({ dataActivity: this.state.masterDataActivity })
      this.setState({ search: text })
      // setFilteredDataSource(masterDataSource);
      // setSearch(text);
    }
  };

  handleFilterCriteria(key) {
    let dataActivity = [];
    criteria1.filter((v) => {
      if (v.target == key) {
        dataActivity.push(v);
        this.setState({ dataActivity });
        this.setState({ masterDataActivity: dataActivity })
      }
      // console.log('Master activity',this.state.masterDataActivity)
      // if (v.target == "The Heroes") {
      //   console.log('Kiya hai YEH', v)
      // }
    });
  }

  changeLayoutMeter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState({ meter: !this.state.meter });
  };
  toggleModal = () => {
    this.setState({ disableActivity: true }, () => this.props.disableActivity(this.state.disableActivity));
    this.setState({ isModalVisible: !this.state.isModalVisible }, () =>
      this.props.modalFalse(false),
    );
  };
  _renderMyList = ({ item, index }) => {
    // console.log('Sort Values',item)
    return (
      <View style={{ flex: 1 }} key={index}>
        <TouchableOpacity
          style={{
            width: width * 0.7,
            height: height * 0.06,
            borderWidth: height * 0.005,
            backgroundColor: '#565656',
            borderColor: '#EDB0A6',
            margin: width * 0.01,
            borderRadius: width * 0.005,
            marginBottom: height * 0.012,
            paddingLeft: width * 0.01,
          }}
          onPress={() => {
            console.log('afsd', item);
            this.setState({ isModalVisible: false }, () => {
              this.props.receiveDataFromChild(true, item);
              this.props.modalFalse(false);
              this.props.criteriaName(item.value);
              store.dispatch(selectCriteria1(item));
            });
          }}>
          <Text
            style={{
              fontSize: height * 0.033,
              // bottom: height * 0.012,
              color: 'white',
            }}>
            {item.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    const { dataActivity } = this.state;

    return (
      <View>
        {/* <View style={style.header3Inner}>
          <TouchableOpacity
            style={style.chooseCriteria}
            onPress={this.toggleModal}>
            <Text style={style.chooseCriteriaText}>Criteria</Text>
          </TouchableOpacity>
        </View> */}
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
                    <Text style={style.modalHeading}>
                      {' '}
                      Select Your {this.props.selectedProgram}
                    </Text>
                    <Searchbar
                      keyboardType={this.state.keyType}
                      style={{ width: width * .25, borderWidth: height * .0025, borderColor: '#FF6100', backgroundColor: '#000', height: height * .08 }}
                      inputStyle={{ color: '#FF6100', fontFamily: Fonts.VarelaRoundRegular }}
                      iconColor='#FF6100'
                      placeholderTextColor='#949494'
                      placeholder="Type Here..."
                      value={this.state.search}
                      onChangeText={(text) => this.searchFilterFunction(text)}
                    />
                    <TouchableOpacity onPress={this.toggleModal}>
                      <Icon
                        name={'cancel'}
                        size={width * 0.04}
                        color="#FF6100"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Box Body */}
                {/* <ScrollView> */}
                <View
                  style={{
                    height: height * 0.58,
                    width: width * 0.75,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>

                  {this.state.isDataNull ?
                    <Text
                      style={{ color: '#FF6100' }}>
                      No Match Found
                    </Text>
                    :
                    <FlatList
                      // horizontal={true}
                      contentContainerStyle={
                        {
                          // flexDirection: 'row',
                          // flexWrap: 'wrap',
                          // justifyContent: 'center',
                        }
                      }
                      data={dataActivity}
                      renderItem={(item, index) =>
                        this._renderMyList(item, index)

                      }
                    />
                  }
                </View>
                {/* </ScrollView> */}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
