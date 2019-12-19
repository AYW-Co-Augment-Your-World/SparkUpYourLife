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
import LoginScreen from '../screens/LoginScreen';
import welcomebg from '../../js/res/meetup4.jpeg';

import * as firebase from 'firebase';
// import { FIREBASE_KEY } from 'react-native-dotenv';

const UNSET = 'UNSET';
const WELCOME_TYPE = 'WELCOME';
const LOGIN_TYPE = 'LOGIN';
const defaultNavigatorType = UNSET;

export default class RegisterScreen extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      name:'',
      email: '',
      password: '',
      errorMessage: ''
    };
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._goToWelcomeScreen = this._goToWelcomeScreen.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._goToLogin = this._goToLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == WELCOME_TYPE) {
      return this._goToWelcomeScreen();
    } else if (this.state.navigatorType == LOGIN_TYPE) {
      return this._goToLogin();
    }
  }

  handleRegister() {
    const { email, password, name } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        firebase.firestore().collection("users").doc(email).set({
          name: name,
          email: email,
          bio: ' ',
          jobTitle: ' ',
          interests: [],
          skills: [],
          location: ' ',
          photo: ' ',
        })
        .then(function(){
          console.log("Document created!")
        })
        .catch(function(error){
          console.error("error writing document: ", error)
        })
        return userCredentials.user.updateProfile({
          displayName: name
        })
      })
      .catch(error => this.setState({ errorMessage: error.message}))

    this.setState({ errorMessage: 'Logging In...' });
    this.setState({ navigatorType: WELCOME_TYPE });
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
            <Text style={localStyles.titleText}>Let's Register To Get Started!</Text>
            <View>
              <Text style={localStyles.titleText}>
                {this.state.errorMessage}
              </Text>
            </View>
            <View style={localStyles.forms}>
              <View  style={{ marginTop: 30 }} >
                <Text style={localStyles.inputTitle}>Name</Text>
                <TextInput
                  style={localStyles.input}
                  autoCapitalize='none'
                  onChangeText={ name => this.setState({ name })}
                  value={ this.state.name }
                ></TextInput>
              </View>
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
              // onPress={this.handleRegister}
              onPress={this._getExperienceButtonOnPress(WELCOME_TYPE)}
              underlayColor={'#68a0ff'}
            >
              <Text style={localStyles.buttonText}>Register</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={localStyles.buttons}
              // onPress={this.handleLogin}
              onPress={this._getExperienceButtonOnPress(LOGIN_TYPE)}
              underlayColor={'#68a0ff'}
            >
              <Text style={localStyles.buttonText}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
  _goToWelcomeScreen() {
    return <WelcomeScreen />;
  }
  _goToLogin() {
    return <LoginScreen />;
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
    borderBottomColor: 'blue',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    width: 250,
    fontSize: 20,
    color: 'white'
  }
});
