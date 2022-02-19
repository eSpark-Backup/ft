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
  UIManager,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Pressable,
  NativeModules,
} from 'react-native';
import Modal from 'react-native-modal';

import {Icon} from 'react-native-material-ui';
import {Justin} from '../service/TheGirls/TheHeroes';
import {Fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');
const SettingsModal = ({
  isVisible,
  listItem,
  onPress,
  headerName,
  onSwipeStart,
  onBackdropPress,
  headerIcon,
  ContactScreen,
  note,
}) => {
  return (
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      swipeDirection="right"
      isVisible={isVisible}
      onSwipeComplete={onSwipeStart}
      onBackdropPress={onBackdropPress}
      backdropOpacity={0}
      style={{
        // position: 'absolute',
        // maxHeight: height * 1,
        // maxWidth: width * .4,
        left: width * 0.648,
        // top: width * .005
      }}>
      <View
        style={{
          width: width * 0.28,
          height: height * 0.98,
          borderWidth: height * 0.005,
          borderRadius: width * 0.005,
          borderColor: '#5F4B2F',
          backgroundColor: 'black',
          alignItems: 'center',
          // justifyContent: 'space-evenly',
        }}>
        {/* <Pressable
                    android_ripple={{
                        color: '#FF6100',
                        borderless: true,
                    }}
                    style={{
                        position: 'absolute',
                        right: width * 0.008,
                        top: height * 0.009,
                    }}
                    onPress={onPress}>
                    <Icon
                        name={'cancel'}
                        size={width * 0.025}
                        color="#FF6100"
                        onPress={onPress}
                    />
                </Pressable> */}
        <TouchableWithoutFeedback>
          <View
            onResponderStart={onPress}
            style={{
              position: 'absolute',
              right: width * 0.008,
              top: height * 0.009,
            }}>
            <Icon name={'cancel'} size={width * 0.025} color="#FF6100" />
          </View>
        </TouchableWithoutFeedback>
        <View style={{flexDirection: 'row', marginVertical: width * 0.03}}>
          {headerIcon}
          <Text
            style={{
              color: 'white',
              fontSize: width * 0.028,
              fontFamily: Fonts.VarelaRoundRegular,
            }}>
            {headerName}
          </Text>
        </View>
        <View>
          {note}
          {/* <Text style={{ color: 'white', fontSize: width * .015 }} >{note}</Text> */}
        </View>
        <View>
          {ContactScreen}
          {listItem}
          {/* <View style={{ width: width * .3, borderWidth: width * .001, borderColor: 'white', padding: width * .025, borderRadius: width * .05, justifyContent: 'space-around' }}>
                        <View style={{ marginVertical: height * .025, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: width * .03, fontWeight: 'bold' }}>Counts Inc.</Text>
                        </View>
                        <Text style={{ color: 'white', fontSize: width * .02 }}>Address</Text>
                        <Text style={{ color: 'white', fontSize: width * .02 }}>City</Text>
                        <Text style={{ color: 'white', fontSize: width * .02 }}>State,Country</Text>
                        <View style={{ marginVertical: height * .025 }}>
                            <Text style={{ color: 'white', fontSize: width * .02 }}>Email:</Text>
                        </View>
                    </View> */}
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;
