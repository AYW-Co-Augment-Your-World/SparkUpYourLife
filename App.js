import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import SelectReality from './SelectReality'
import WelcomeScreen from './src/screens/WelcomeScreen'

export default class App extends Component {

  render() {
    return(
      <SelectReality />
    )
  }

}


module.exports = App
