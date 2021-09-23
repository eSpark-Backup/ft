/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  ActivityIndicator,
  Alert,
} from 'react-native';

import GradientButton from '../../../component/GradientButton';
import Loader from '../../../component/loader';
import style from './style';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../../utils/fonts';
import {Icon} from 'react-native-material-ui';
import {selectProgram} from '../../../Store/actions/program';
import {store} from '../../../Store';
import Modal from 'react-native-modal';
import {DatePicker} from 'react-native-wheel-datepicker';
import Gallery from 'react-native-image-gallery';
import snapshots from '../../../Store/reducers/snapshots';
import RNFS from 'react-native-fs';
import {ToastAndroid} from 'react-native';
import Trash from 'react-native-vector-icons/FontAwesome';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

let d = new Date();

const dataActivity = [
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
  {
    name: 'Program',
  },
];
const {height, width} = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.flatListRef1 = React.createRef();
    this.state = {
      points: 80,
      isModalVisible: false,
      setContainerWidth: false,
      imageURI: '',
      imageArray: this.props.imageUri,
      showImg: false,
      selectDate: new Date(),
      selectMonth: months[d.getMonth()],
      selectYear: d.getFullYear(),
      editDate: new Date(),
      editMonth: months[d.getMonth()],
      editYear: d.getFullYear(),
      dates: [],
      dateModal: false,
      loader: true,
      dateMatched: true,
      imgArray: [],
    };
  }

  componentDidMount() {
    // this.fetchImages();
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log(nextProps.imageUri, ' imageUri Kono prop aya');
  //   this.setState({imageArray: nextProps.imageUri});
  //   // this.setState((prevState) => ({
  //   //   imageArray: [...prevState.imageArray, {imgURI: nextProps.imageUri}],
  //   // }));
  //   //   forTimeRound: nextProps.forTimeRound,
  //   //   timeLap: nextProps.timeLap,
  //   //   activity: nextProps.activity,
  //   //   roundLap: nextProps.roundLap,
  //   //   totalTimeArr: nextProps.totalTimeArr,
  //   //   tabataRounds: nextProps.tabataRounds,
  //   //   tabataRest: nextProps.tabataRest,
  //   //   tabataMinutes: nextProps.tabataMinutes,
  //   // });
  // }

  changeDate = (val) => {
    const getMonth = val.toString().slice(4, 7);
    const getYear = val.toString().slice(11, 15);
    const getFullDate = val.toString();
    this.setState({editMonth: getMonth});
    this.setState({editDate: new Date(getFullDate)});
    this.setState({editYear: getYear});
    this.addDays(val.toString().slice(0, 8) + '00' + val.toString().slice(10));
    // console.log('date kiya mili', getMonth + getYear + getFullDate);
  };

  doneBtn = () => {
    console.log('pata chala');
    this.setState({dateModal: false});
    this.setState({selectDate: this.state.editDate});
    this.setState({selectMonth: this.state.editMonth});
    this.setState({selectYear: this.state.editYear});
    this.goToDate(this.state.editDate);
    this.flatListRef1.current.scrollToIndex({
      index:
        this.state.editDate.getDate() > 6
          ? this.state.editDate.getDate() - 6.3
          : 0,
    });
  };

  fetchImages = (theDate) => {
    this.setState({imgArray: []});
    RNFS.readDir(RNFS.ExternalStorageDirectoryPath + '/Counts/snaps')
      .then((results) => {
        const kData = this.state.imgArray.slice();
        results.map((item) => {
          kData.push({
            date: item.mtime,
            source: {
              uri:
                'file://' +
                RNFS.ExternalStorageDirectoryPath +
                '/Counts/snaps/' +
                item.name,
            },
          });
        });
        const newData = kData.filter(
          (item) =>
            item.date.toISOString().slice(0, 10) ==
            theDate.toISOString().slice(0, 10),
        );
        this.setState({imgArray: newData}, () => {
          console.log('data=======>', this.state.imgArray);
        });
      })
      .catch((e) => {
        console.log('error aya', e);
      });
  };

  goToDate = (val) => {
    const updateDate = new Date(val);
    this.fetchImages(updateDate);
    console.log('esi ki tesi kara');
    this.setState({selectDate: updateDate, loader: true});
    this.flatListRef1.current.scrollToIndex({
      index: updateDate.getDate() > 6 ? updateDate.getDate() - 6.3 : 0,
      animated: true,
    });
    setTimeout(() => {
      this.setState({
        loader: false,
        dateMatched: this.state.imgArray.length == 0 ? false : true,
      });
    }, 2000);
  };

  fullPicture = (val) => {
    this.setState({imageURI: val, showImg: true});
  };

  deleteSnap = (imgPath) => {
    Alert.alert('Are You Sure?', 'Image will be deleted', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          RNFS.unlink(imgPath)
            .then(() => {
              console.log('FILE DELETED');
              ToastAndroid.show(
                'Snap Deleted Successfully',
                ToastAndroid.SHORT,
              );
              this.setState({showImg: false}, () => this.toggleModal());
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch((err) => {
              console.log(err.message);
              ToastAndroid.show('Failed to Delete', ToastAndroid.SHORT);
            });
        },
      },
    ]);
  };

  days = function (month, year) {
    return new Date(year, month, 0).getDate();
  };

  addDays = (val) => {
    console.log('addDays===========>', val);
    const date = new Date(val);
    let datesCollection = [];
    let newDate = date;

    for (
      var i = 1;
      i <= this.days(date.getMonth() + 2, date.getFullYear());
      i++
    ) {
      newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);
      datesCollection.push({
        fullDate: `${newDate}`,
        date: `${newDate.getDate()}`,
        day: `${newDate.toDateString().slice(0, 3)}`,
      });
    }

    this.setState({dates: datesCollection});

    // console.log('dates batao', datesCollection);
    // return datesCollection
  };

  imgList = (item) => {
    console.log('Items me yeh mila', item);
    return item.date.slice(0, 10) ==
      this.state.selectDate.toISOString().slice(0, 10) ? (
      <TouchableOpacity
        style={{
          borderColor: '#FF6100',
          borderWidth: width * 0.001,
          borderRadius: width * 0.01,
          margin: width * 0.01,
          padding: width * 0.01,
          alignItems: 'center',
        }}
        onPress={() => this.fullPicture(item.imgURI)}>
        <Image
          source={{uri: item.imgURI}}
          style={{
            width: width * 0.25,
            height: height * 0.25,
            resizeMode: 'contain',
          }}
        />
        <Text style={{color: 'white'}}>{item.date}</Text>
      </TouchableOpacity>
    ) : (
      this.handleNoImg(
        item.date.slice(0, 10) ==
          this.state.selectDate.toISOString().slice(0, 10),
      )
    );
  };

  changeLayoutMeter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState({setContainerWidth: !this.state.setContainerWidth});
  };

  toggleModal = () => {
    console.log('casd___________---------------------');
    this.addDays(
      this.state.selectDate.toString().slice(0, 8) +
        '00' +
        this.state.selectDate.toString().slice(10),
    );
    // console.log('array bata', store.getState().snapshots);
    this.setState({loader: true});
    this.fetchImages(this.state.selectDate);
    console.log('chaal modal khula');
    // this.setState((prevState) => ({
    //     imageArray: [...prevState.imageArray, {imgURI: this.state.imageURI}],
    //   }));
    // console.log('Array ka hall bata', this.state.imageArray);
    // console.log('image ka hall bata', this.state.imageURI);
    this.setState({isModalVisible: true});
    // if (store.getState().snapshots.length == 0) {
    //   this.setState({dateMatched: false});
    //   console.log('11xxx11');
    // }
    // if (this.props.imageUri.length == 0) {
    //   this.setState({dateMatched: false});
    // }
    setTimeout(() => {
      this.flatListRef1.current.scrollToIndex({
        index:
          this.state.selectDate.getDate() > 6
            ? this.state.selectDate.getDate() - 6.3
            : 0,
        animated: true,
      });
      setTimeout(() => {
        this.setState({
          loader: false,
          dateMatched: this.state.imgArray.length == 0 ? false : true,
        });
        console.log('chala hai ye');
      }, 500);
    }, 2000);
  };

  handleNoImg = (cond) => {
    if (!cond) {
      console.log('false mila'), this.setState({dateMatched: false});
    } else if (cond) {
      console.log('true mila boss'), this.setState({dateMatched: true});
    }
  };

  toggleGallery = () => {
    this.setState({showImg: false, loader: true});
    this.fetchImages(this.state.selectDate);
    setTimeout(() => {
      this.flatListRef1.current.scrollToIndex({
        index:
          this.state.selectDate.getDate() > 6
            ? this.state.selectDate.getDate() - 6.3
            : 0,
        animated: true,
      });
      setTimeout(() => {
        this.setState({loader: false});
      }, 500);
    }, 2000);
  };

  render() {
    const {
      selectDate,
      selectMonth,
      selectYear,
      dateMatched,
      showImg,
      dates,
      loader,
      imageArray,
      imageURI,
    } = this.state;

    if (this.props.setContainerWidth && !this.state.setContainerWidth) {
      this.changeLayoutMeter();
    }
    if (!this.props.setContainerWidth && this.state.setContainerWidth) {
      this.changeLayoutMeter();
    }
    // console.log('XXXX--kya--XXXX', dates);
    // console.log('dsadxxx', dateMatched);
    return (
      <View>
        <TouchableOpacity
          style={{
            width: this.state.setContainerWidth ? width * 0.098 : width * 0.2,
            height: height * 0.07,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            borderRadius: width * 0.003,
            elevation: width * 0.005,
            marginHorizontal: width * 0.001,
            borderWidth: width * 0.002,
            borderColor: '#EDB0A6',
          }}
          onPress={this.toggleModal}>
          <Text style={style.dateLogText}>Memory Recall</Text>
        </TouchableOpacity>
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
                    <Text style={style.modalHeading}>Memory Recall</Text>
                    {!showImg ? (
                      <TouchableOpacity
                        disabled={loader}
                        onPress={() => this.setState({isModalVisible: false})}>
                        <Icon
                          name={'cancel'}
                          size={width * 0.03}
                          color="#FF6100"
                        />
                      </TouchableOpacity>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: width * 0.1,
                        }}>
                        <TouchableOpacity
                          style={{alignSelf: 'center'}}
                          onPress={() => this.deleteSnap(this.state.imageURI)}>
                          <Trash
                            name="trash"
                            color="#FF6100"
                            size={width * 0.02}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.toggleGallery()}>
                          <Text
                            style={{
                              color: '#FF6100',
                              fontSize: width * 0.02,
                            }}>
                            Back
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
                {/* Box Body */}
                <View
                  style={{
                    height: height * 0.79,
                    alignItems: 'center',
                  }}>
                  {showImg ? (
                    <Gallery
                      style={{flex: 1, backgroundColor: 'black'}}
                      images={[{source: {uri: imageURI}}]}
                    />
                  ) : (
                    <View>
                      <TouchableOpacity
                        onPress={() => this.setState({dateModal: true})}
                        style={{
                          height: height * 0.09,
                          width: width * 0.945,
                          elevation: height * 0.01,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#FF6100',
                            fontFamily: Fonts.LatoBold,
                            fontSize: width * 0.03,
                            textAlign: 'center',
                          }}>
                          {selectMonth + ' ' + selectYear}
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          backgroundColor: '#1B1F22',
                          height: height * 0.12,
                          width: width * 0.945,
                          elevation: height * 0.01,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <FlatList
                          data={dates}
                          horizontal
                          ref={this.flatListRef1}
                          showsHorizontalScrollIndicator={false}
                          keyExtractor={(item) => item.date}
                          contentContainerStyle={{alignItems: 'center'}}
                          renderItem={({item}) => {
                            return (
                              <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
                                  width: width * 0.07,
                                  height: height * 0.07,
                                  margin: height * 0.01,
                                  borderRadius: height * 0.005,
                                  shadowColor: '#0179B0',
                                  shadowOffset: {
                                    width: 0,
                                    height: 2,
                                  },
                                  shadowOpacity: 0.25,
                                  shadowRadius: width * 0.01,
                                  elevation: height * 0.007,
                                }}
                                disabled={loader}
                                onPress={() => this.goToDate(item.fullDate)}>
                                <LinearGradient
                                  colors={['#363B40', '#212428']}
                                  start={{x: 0.0, y: 0.05}}
                                  end={{x: 0.0, y: 1.0}}
                                  locations={[0.0, 3]}
                                  style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: height * 0.001,
                                    borderColor: '#363B40',
                                    borderRadius: height * 0.005,
                                  }}>
                                  <Text
                                    style={{
                                      color:
                                        item.date == selectDate.getDate()
                                          ? 'white'
                                          : '#FF6100',
                                      fontFamily: Fonts.LatoBold,
                                      fontSize: height * 0.015,
                                      textAlign: 'center',
                                    }}
                                    // style={[
                                    //   styles.dateText,
                                    //   {
                                    //     color:
                                    //       item.date == selectDate.getDate()
                                    //         ? 'white'
                                    //         : '#0179B0',
                                    //   },
                                    // ]}
                                  >
                                    {item.date}
                                    {'\n'}
                                    {item.day}
                                  </Text>
                                </LinearGradient>
                              </TouchableOpacity>
                            );
                          }}
                        />
                      </View>
                      {loader ? (
                        <ActivityIndicator
                          size="large"
                          color="#4f55bd"
                          style={{top: height * 0.08}}
                        />
                      ) : dateMatched == false ? (
                        <View style={{flex: 1}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: height * 0.04,
                              top: height * 0.06,
                              textAlign: 'center',
                            }}>
                            No Screenshots Found
                          </Text>
                        </View>
                      ) : (
                        <View
                          style={{
                            height: height * 0.59,
                            alignItems: 'center',
                          }}>
                          <FlatList
                            numColumns={3}
                            data={this.state.imgArray}
                            keyExtractor={(item) => item.date}
                            renderItem={({item}) => {
                              var date = item.date.toISOString().slice(0, 10);
                              // var newDate = selectDate
                              //   .toISOString()
                              //   .slice(0, 10);
                              // console.log('aisdkoaskd', date);
                              // console.log('ll', date == newDate);
                              // return date == newDate ? (
                              return this.state.imgArray.length !== 0 ? (
                                <TouchableOpacity
                                  style={{
                                    borderColor: '#FF6100',
                                    borderWidth: width * 0.001,
                                    borderRadius: width * 0.01,
                                    margin: width * 0.01,
                                    padding: width * 0.01,
                                    alignItems: 'center',
                                  }}
                                  onPress={() =>
                                    this.fullPicture(item.source.uri)
                                  }>
                                  <Image
                                    source={{uri: item.source.uri}}
                                    style={{
                                      width: width * 0.25,
                                      height: height * 0.25,
                                      resizeMode: 'contain',
                                    }}
                                  />
                                  <Text style={{color: 'white'}}>{date}</Text>
                                </TouchableOpacity>
                              ) : (
                                this.setState({dateMatched: false})
                              );
                            }}
                          />
                        </View>
                      )}
                      <Modal
                        animationIn="slideInDown"
                        animationOut="slideOutUp"
                        swipeDirection="right"
                        backdropColor="#0a0700"
                        backdropOpacity={0.7}
                        // onSwipeComplete={() => setModalVisible(false)}
                        onBackdropPress={() =>
                          this.setState({dateModal: false})
                        }
                        isVisible={this.state.dateModal}
                        style={{
                          backgroundColor: '#0a0700',
                          maxHeight: height * 0.34,
                          maxWidth: width * 0.7,
                          left: width * 0.1,
                          top: height * -0.0,

                          // bottom: height * .01,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#0a0700',
                            height: height * 0.34,
                            width: width * 0.7,
                            elevation: height * 0.008,
                            shadowColor: 'white',
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 8,
                            // borderBottomLeftRadius: height * 0.01,
                            // borderBottomRightRadius: height * 0.01,
                            borderWidth: width * 0.001,
                            borderRadius: width * 0.005,
                            borderColor: '#FF6100',
                          }}>
                          <View
                            style={{
                              width: width * 0.7,
                              height: height * 0.03,
                              flexDirection: 'row',
                              justifyContent: 'flex-end',
                            }}>
                            <GradientButton
                              iconName={'close'}
                              disabled={loader}
                              iconColor={'#FF6100'}
                              unfilled={true}
                              iconSize={height * 0.03}
                              style={{
                                width: height * 0.04,
                                height: height * 0.04,
                                borderRadius: height * 0.1,
                              }}
                              onPress={() => this.doneBtn()}
                            />
                          </View>
                          <View
                            style={{
                              width: width * 0.7,
                              height: height * 0.22,
                              flexDirection: 'row',
                              justifyContent: 'space-around',
                              // backgroundColor:"red",
                              alignItems: 'center',
                            }}>
                            <View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-around',
                                  width: width * 0.67,
                                  marginBottom: height * 0.02,
                                }}>
                                <Text
                                  style={{
                                    color: 'white',
                                    fontSize: height * 0.04,
                                  }}>
                                  Month
                                </Text>
                                <Text
                                  style={{
                                    color: 'white',
                                    fontSize: height * 0.04,
                                  }}>
                                  Year
                                </Text>
                              </View>
                              <DatePicker
                                style={{
                                  height: height * 0.18,
                                  backgroundColor: '#0a0700',
                                }}
                                date={selectDate}
                                textSize={20}
                                textColor="white"
                                mode="date"
                                order="M-Y"
                                onDateChange={(value) => this.changeDate(value)}
                              />
                            </View>
                          </View>
                          <View
                            style={{
                              height: height * 0.09,
                              width: width * 0.7,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <GradientButton
                              title={'Done'}
                              iconName={'checkmark-done'}
                              iconColor={'white'}
                              iconSize={height * 0.02}
                              style={{
                                width: width * 0.15,
                                height: height * 0.05,
                                borderRadius: height * 0.005,
                              }}
                              onPress={() => this.doneBtn()}
                            />
                          </View>
                        </View>
                      </Modal>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
