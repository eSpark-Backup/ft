import React, {Component} from 'react';
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
} from 'react-native';

import style from './style';
import {IconToggle} from 'react-native-material-ui';
import {selectProgram} from '../../../Store/actions/program';
import {store} from '../../../Store';

import {criteria2} from '../../../config/criteria2';

import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 80,
      isModalVisible: false,
    };
  }

  componentDidMount() {
    this.handleFilterCriteria(store.getState()?.program.key);

    this.unsubscribe = store.subscribe(() => {
      this.handleFilterCriteria(store.getState()?.program.key);
    });
  }

  handleFilterCriteria(key) {
    let dataActivity = [];

    criteria2.filter((v) => {
      if (v.key == key) {
        dataActivity.push(v);

        this.setState({dataActivity});
      }
    });
  }

  changeLayoutMeter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState({meter: !this.state.meter});
  };
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  _renderMyList = ({item}) => (
    <View style={{flex: 1}}>
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
          paddingLeft:width * .01
        }}
        onPress={() => console.log(store.getState().program, '.?')}>
        {/* <Text
          style={{
            textAlign: 'center',
            fontSize: height * 0.05,
            color: 'white',
            bottom: height * 0.005,
          }}>
          +
        </Text> */}
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
  render() {
    const {dataActivity} = this.state;

    return (
      <View>
        <View style={style.header3Inner}>
          <TouchableOpacity
            style={style.chooseCriteria}
            onPress={this.toggleModal}>
            <Text style={style.chooseCriteriaText}>Criteria</Text>
          </TouchableOpacity>
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
                    <Text style={style.modalHeading}>
                      {' '}
                      Select Your Criteria
                    </Text>
                    <IconToggle
                      name={'cancel'}
                      size={width * 0.04}
                      color="#FF6100"
                      onPress={this.toggleModal}
                    />
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
                  <FlatList
                    // horizontal={true}
                    contentContainerStyle={{
                      // flexDirection: 'row',
                      // flexWrap: 'wrap',
                      // justifyContent: 'center',
                    }}
                    data={dataActivity}
                    renderItem={this._renderMyList}
                  />
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
