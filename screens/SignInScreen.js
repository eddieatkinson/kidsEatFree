import React, { Component } from 'react';
import { View, Text, TextInput, Form } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

class SignInScreen extends Component {
  render() {
    return (
      <View>
        <FormLabel>Username</FormLabel>
        <FormInput />
        <FormLabel>Password</FormLabel>
        <FormInput />
        <Button
          title='Submit'
          backgroundColor='green'
          borderRadius={5}
        />
      </View>
    )
  }
}

export default SignInScreen;
