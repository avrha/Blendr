import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './Login';
import RegisterScreen from './Register';
import MatchScreen from './Match';
import HomeScreen from './Home'



const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  RegisterScreen: {
    screen: RegisterScreen
  },
  MatchScreen: {
    screen: MatchScreen
  }
});

export default createAppContainer(AppNavigator);