import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Character extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>
        </Text>
        <Text style={styles.bigText}>
          Random chosen character: {this.props.name}
        </Text>
        <Text style={styles.bigText}>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: 130 },
  bigText: {
    flex: 2 ,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
})

export default Character;
