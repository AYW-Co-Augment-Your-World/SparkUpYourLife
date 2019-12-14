import React from 'react';
import { View, Text, Button } from 'react-native';

import SelectReality from '../../SelectReality'

class WelcomeScreen extends React.Component{
  render(){
    return (
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>Welcome Screen </Text>
        <Button
          title='Go to Select Reality Page'
          onPress={ () => this.props.navigation.navigate('SelectReality')}
        />
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
    )
  }
}

export default WelcomeScreen;
