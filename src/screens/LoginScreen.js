import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  ImageBackground,
  FlatList
} from 'react-native';

import WelcomeScreen from '../../WelcomeScreen';
import welcomebg from '../../js/res/meetup4.jpeg';
import RegisterScreen from '../screens/RegisterScreen';

import * as firebase from 'firebase';
// import { FIREBASE_KEY } from 'react-native-dotenv';

const UNSET = 'UNSET';
const WELCOME_TYPE = 'WELCOME';
const REGISTER_TYPE = 'REGISTER';
const defaultNavigatorType = UNSET;

const firebaseConfig = {
  apiKey: '',
  authDomain: 'spark-ayw.firebaseapp.com',
  databaseURL: 'https://spark-ayw.firebaseio.com',
  projectId: 'spark-ayw',
  storageBucket: 'spark-ayw.appspot.com',
  messagingSenderId: '84494988286',
  appId: '1:84494988286:web:ebc6b8b3630399bfc486af',
  measurementId: 'G-R1V75EYLTS'
};

firebase.initializeApp(firebaseConfig);

export default class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      email: '',
      password: '',
      errorMessage: '',
      logedIN: ''
    };
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._goToWelcomeScreen = this._goToWelcomeScreen.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._goToRegisterScreen = this._goToRegisterScreen.bind(this)
    this.handleLogin = this.handleLogin.bind(this);
  }

  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == WELCOME_TYPE) {
      return this._goToWelcomeScreen();
    } else if (this.state.navigatorType == REGISTER_TYPE) {
      return this._goToRegisterScreen();
    }
  }

  handleLogin() {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }));

    this.setState({ logedIN: 'Logging In...' });
    if(this.state.logedIN === 'Logging In...'){
      this.setState({ navigatorType: WELCOME_TYPE });
    }

  }

  _getExperienceSelector() {
    return (
      <ImageBackground
        source={welcomebg}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={localStyles.outer}>
          <View style={localStyles.inner}>
            <Text style={localStyles.titleText}>Welcome To Spark!</Text>
            <Text style={localStyles.subtitleText}>
              Networking Solutions for the{' '}
              <Text style={localStyles.emphasis}>modern</Text> meet up.
            </Text>
            <View>
              <Text style={localStyles.subtitleText}>
                {this.state.errorMessage}
              </Text>
            </View>
            <View style={localStyles.forms}>
              <View style={{ marginTop: 30 }}>
                <Text style={localStyles.inputTitle}>Email Address</Text>
                <TextInput
                  style={localStyles.input}
                  autoCapitalize="none"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                ></TextInput>
              </View>
              <View style={{ marginTop: 30, marginBottom: 30 }}>
                <Text style={localStyles.inputTitle}>Password</Text>
                <TextInput
                  style={localStyles.input}
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                ></TextInput>
              </View>
            </View>
            <TouchableHighlight
              style={localStyles.buttons}
              // onPress={this.handleLogin}
              onPress={this._getExperienceButtonOnPress(WELCOME_TYPE)}
              underlayColor={'#68a0ff'}
            >
              <Text style={localStyles.buttonText}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={localStyles.buttons}
              onPress={this._getExperienceButtonOnPress(REGISTER_TYPE)}
              underlayColor={'#68a0ff'}
            >
              <Text style={localStyles.buttonText}>Register</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
  _goToWelcomeScreen() {
    return <WelcomeScreen email={this.state.email}/>;
  }
  _goToRegisterScreen() {
    return <RegisterScreen />;
  }
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      });
    };
  }
}

const localStyles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0.85,
    backgroundColor: 'black'
  },
  emphasis: {
    fontStyle: 'italic'
  },
  titleText: {
    paddingTop: 40,
    color: '#fff',
    textAlign: 'center',
    fontSize: 25
  },
  subtitleText: {
    paddingTop: 10,
    color: '#fff',
    textAlign: 'center',
    fontSize: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  buttons: {
    height: 45,
    width: 150,
    opacity: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  inputTitle: {
    color: 'gray',
    fontSize: 15
  },
  form: {
    marginBottom: 10
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    width: 250,
    fontSize: 20,
    color: 'white'
  }
});
