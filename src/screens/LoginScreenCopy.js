import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';


export default class LoginScreenCopy extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.goToWelcomeScreen = this.goToWelcomeScreen.bind(this);
  }

  goToWelcomeScreen(){
    return (
      <WelcomeScreen />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to SparkUpYourLife!</Text>
        <Text>Login Screen</Text>
        <View style={styles.forms}>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              // value={this.state.email}
            ></TextInput>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={password => this.setState({ password })}
              // value={this.state.password}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            return this.goToWelcomeScreen();
          }}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        >
          <Text>
            New to SparkUpYourLife?{' '}
            <Text style={{ fontWeight: '500' }}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    color: 'black'
  },
  button: {
    backgroundColor: 'dodgerblue',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20
  }
});
