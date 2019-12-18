import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';

import WelcomeScreen from '../../WelcomeScreen';

const UNSET = "UNSET";
const WELCOME_TYPE = "WELCOME";


const defaultNavigatorType = UNSET;

export default class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      email: '',
      password: ''
    }
    this._getExperienceSelector = this._getExperienceSelector.bind(this);

    this._goToWelcomeScreen = this._goToWelcomeScreen.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
  }

  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == WELCOME_TYPE) {
      return this._goToWelcomeScreen();
    }
  }

  _getExperienceSelector() {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

          <Text style={localStyles.titleText}>
            Welcome To SparkUpYourLife!
          </Text>
          <View style={localStyles.forms}>
          <View style={{ marginTop: 30 }}>
            <Text style={localStyles.inputTitle}>Email Address</Text>
            <TextInput
              style={localStyles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              // value={this.state.email}
            ></TextInput>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={localStyles.inputTitle}>Password</Text>
            <TextInput
              style={localStyles.input}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={password => this.setState({ password })}
              // value={this.state.password}
            ></TextInput>
          </View>
        </View>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(WELCOME_TYPE)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  _goToWelcomeScreen() {
    return (
      <WelcomeScreen />
    );
  }
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    }
  }
}

const localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 50,
    width: 150,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  inputTitle: {
    color: 'gray',
    fontSize: 10
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  input: {
    borderBottomColor: 'blue',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: 'white'
  },
});
