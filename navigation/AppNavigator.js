import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignInScreen from './../screens/SignInScreen';

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
  }
)

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
));