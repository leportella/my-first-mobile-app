import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

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
        <ImageBackground source={require('./flowers.png')}
                         style={styles.backdrop}>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              You input {this.state.zip}
            </Text>
            {content}
            <TextInput
              style={styles.input}
              onSubmitEditing={this._handlerTextChange}/>
          </View>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
