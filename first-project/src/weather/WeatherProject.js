import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Forecast from './Forecast';
import OpenWeatherMap from './open_weather_map';


class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "", forecast: null };
  }

  _handlerTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      this.setState({ forecast: forecast });
    });
    this.setState({zip: zip});
  }

  render () {
    let content = null;
    if (this.state.forecast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      )
    }


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}
        </Text>
        {content}
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handlerTextChange}/>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


export default WeatherProject
