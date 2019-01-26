import React, { Component } from 'react';
import { View, Text, TextInput, Form } from 'react-native';

class SignInScreen extends Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="Username"
        />
        <TextInput
          placeholder="Password"
        />
      </View>
    )
  }
}

export default SignInScreen;
