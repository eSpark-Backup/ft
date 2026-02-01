import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Dimensions, Pressable } from "react-native";

import Row from "../../component/Row";
import { Icon } from 'react-native-material-ui';
import Button from "../../component/Button";
import calculator, { initialState } from "../../utils/calculator";

const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    height: height * .83,
    width: width * .325,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
    borderWidth: width * .001,
    borderColor: '#EDB0A6'
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
    console.log('Kiya Mila', this.state)
  };

  render() {
    return (
      <View style={styles.container}>
        <Pressable
          android_ripple={{
            color: '#FF6100',
            borderless: true,
          }}
          style={{
            position: 'absolute',
            right: width * -0.013,
            top: height * -0.024,
          }}
          onPress={() =>
            this.setState({ isModalVisible: !this.state.isModalVisible })
          }>
          <Icon
            name={'cancel'}
            size={width * 0.025}
            color="#FF6100"
            onPress={this.toggleModal}
          />
        </Pressable>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {/* {parseFloat(this.state.currentValue).toLocaleString()} */}
            {this.state.currentValue}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="Del"
              theme="secondary"
              onPress={() => this.handleTap("Del")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap("number", 0)}
            />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
