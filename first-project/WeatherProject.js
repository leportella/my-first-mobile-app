import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "" };
  }

  _handlerTextChange = event => {
    this.setState({zip: event.nativeEvent.text})
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handlerTextChange}/>
        <Text style={styles.welcome}>
          You input { this.state.zip }
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
