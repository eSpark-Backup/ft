/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    Dimensions,
    ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';

const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        // console.log('XXXX--kya--XXXX', dates);
        // console.log('dsadxxx', dateMatched);
        return (
            <Modal
                animationIn="flipInX"
                animationOut="flipOutX"
                isVisible={true}
            >
                <ActivityIndicator
                    size="large"
                    color="#4f55bd"
                    
                />
            </Modal>
        );
    }
}
