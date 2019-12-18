import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';

import EditProfileScreen from './EditProfileScreen'

const UNSET = "UNSET";
const EDIT_PROFILE_TYPE = "EDIT_PROFILE";
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

    this._goToEditProfileScreen = this._goToEditProfileScreen.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
  }

  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == EDIT_PROFILE_TYPE) {
      return this._goToEditProfileScreen();
    }
  }

  _getExperienceSelector() {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

          <Text style={localStyles.titleText}>
            Profile Screen
          </Text>

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(EDIT_PROFILE_TYPE)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>Edit Profile</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  _goToEditProfileScreen() {
    return (
      <EditProfileScreen />
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
