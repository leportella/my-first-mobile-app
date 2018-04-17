import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import CallApi from './call_api';
import Character from './Character';


class WesterosProject extends Component {
  constructor(props) {
    super(props);
    this.state = { info: null };
  }

  _handlerTextChange = event => {
    let number = event.nativeEvent.text;
    CallApi.fetchWesteros('characters', number).then(response => {
        this.setState({ info: response });
        console.log(response);
    });
  }

  render () {
    let content = null;
    if (this.state.info !== null) {
      content = <Character name={this.state.info.name} />
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          A Game of Throne App
        </Text>
        <Text style={styles.normal}>
         Choose random number:
        </Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handlerTextChange}/>
        {content}
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
    backgroundColor: '#666666',
  },
  input : {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
    width: 100,
  },
  normal: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});


export default WesterosProject
