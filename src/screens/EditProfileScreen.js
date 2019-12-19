import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  TextInput
} from 'react-native';

import WelcomeScreen from '../../WelcomeScreen';
import editProfileBg from '../../js/res/profilebg3.jpeg';

const UNSET = 'UNSET';
const WELCOME_TYPE = 'WELCOME';

const defaultNavigatorType = UNSET;

export default class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      name: 'Dominique',
      email: 'dominique@gmail.com',
      bio: ' ',
      jobTitle: ' ',
      interests: [],
      currentInterest: '',
      skills: [],
      currentSkill: '',
      location: ' '
    };
    this._getExperienceSelector = this._getExperienceSelector.bind(this);

    this._goToWelcomeScreen = this._goToWelcomeScreen.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
  }

  // componentDidMount(){
  //   firebase.auth().onAuthStateChanged(user => {

  //     const profile = firebase.firestore().collection('users').doc(user.email)
  //     profile.onSnapshot(doc => {
  //         if (doc && doc.exists) {
  //             console.log("Document data:", doc.data());
  //             const user = doc.data()
  //             this.setState({name: user.name})
  //             this.setState({email: user.email})
  //             this.setState({ bio: user.bio})
  //             this.setState({ jobTitle: user.jobTitle})
  //             this.setState({ location: user.location})
  //             this.setState({ skills: user.skills})
  //             this.setState({ interests: user.interests})
  //             this.setState({ user: user})
  //         } else { console.log("No such document!")}
  //       })
  //       .catch(function(error) { console.log("Error getting document:", error)});
  //   })
  // }

  // saveProfileInfo = () => {
  //   firebase.firestore().collection("users").doc(this.state.email).update({
  //     "name": this.state.name,
  //     "bio": this.state.bio,
  //     "jobTitle": this.state.jobTitle,
  //     "location": this.state.location,
  //     "photo": this.state.photo,
  //     "interests": this.state.interests,
  //     "skills": this.state.skills
  //   })
  // }

  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == WELCOME_TYPE) {
      return this._goToWelcomeScreen();
    }
  }

  _getExperienceSelector() {
    return (
      <ImageBackground
        source={editProfileBg}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={localStyles.outer}>
          <View style={localStyles.inner}>
            <Text style={localStyles.titleText}>Edit Profile Screen</Text>
            <View>
              <Text style={localStyles.subTitle}>Name:</Text>
              <TextInput
                style={localStyles.input}
                autoCapitalize="none"
                placeholder={this.state.name}
                onChangeText={name => this.setState({ name })}
              ></TextInput>
            </View>
            <View>
              <Text style={localStyles.subTitle}>Bio:</Text>
              <TextInput
                style={localStyles.input}
                autoCapitalize="none"
                placeholder={this.state.bio}
                onChangeText={bio => this.setState({ bio })}
              ></TextInput>
            </View>
            <View>
              <Text style={localStyles.subTitle}>Location:</Text>
              <TextInput
                style={localStyles.input}
                autoCapitalize="none"
                placeholder={this.state.location}
                onChangeText={location => this.setState({ location })}
              ></TextInput>
            </View>
            <View>
              <Text style={localStyles.subTitle}>Job Title:</Text>
              <TextInput
                style={localStyles.input}
                autoCapitalize="none"
                placeholder={this.state.jobTitle}
                onChangeText={jobTitle => this.setState({ jobTitle })}
              ></TextInput>
            </View>
            {/* <View>
            <Text style={localStyles.subTitle}>Interests:</Text>
            <FlatList
              data={this.state.interests}
              renderItem={({item}) =>
                <View>
                  <Text>{item}</Text>
                  <TouchableOpacity
                    onPress={()=> {
                      console.log('item', item)
                      this.setState({ interests: this.state.interests.filter( interest => interest !== item)})
                    }}
                  >
                    <Text style={{color:'red'}}>Remove Interest</Text>
                  </TouchableOpacity>
                </View>}
            />
            <TextInput
              style={localStyles.input}
              autoCapitalize='none'
              placeholder='Add Interest...'
              value={this.state.currentInterest}
              onChangeText={ interest => this.setState({currentInterest: interest})}
            ></TextInput>
            <Button
              title='Add interest '
              onPress={()=> {
                this.state.interests.push(this.state.currentInterest)
                this.setState({currentInterest: ''})
              }}
            />
          </View>
          <View>
            <Text style={localStyles.subTitle}>Skills:</Text>
            <FlatList
              data={this.state.skills}
              renderItem={({item}) =>
                <View>
                  <Text>{item}</Text>
                  <TouchableOpacity
                    onPress={()=> {
                      console.log('item', item)
                      this.setState({ skills: this.state.skills.filter( skill => skill !== item)})
                    }}
                  >
                    <Text style={{color:'red'}}>Remove Skill</Text>
                  </TouchableOpacity>

                </View>}
            />
            <TextInput
              style={localStyles.input}
              autoCapitalize='none'
              placeholder='Add Skill...'
              value={this.state.currentSkill}
              onChangeText={ skill => this.setState({ currentSkill: skill})}
            ></TextInput>
            <Button
              title='Add Skill'
              onPress={()=> {
                this.state.skills.push(this.state.currentSkill)
                this.setState({ currentSkill: ''})
              }}
            />
          </View> */}
            <TouchableHighlight
              style={localStyles.buttons}
              // onPress={}
              underlayColor={'#68a0ff'}
            >
              <Text style={localStyles.buttonText}>Save Profile</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={localStyles.buttons}
              onPress={this._getExperienceButtonOnPress(WELCOME_TYPE)}
              underlayColor={'#68a0ff'}
            >
              <Text style={localStyles.buttonText}>Welcome Screen</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
  _goToWelcomeScreen() {
    return <WelcomeScreen />;
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
  viroContainer: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
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
    backgroundColor: 'white'
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: '#000',
    textAlign: 'center',
    fontSize: 25
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  buttons: {
    height: 50,
    width: 200,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
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
    alignItems: 'center',
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
    width: 200,
    fontSize: 15,
    marginBottom: 10,
    alignItems: 'center',
    color: '#000'
  },
  subTitle: {
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  },
  words: {
    color: '#000',
    alignItems: 'center'
  }
});
