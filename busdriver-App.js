import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ScanScreen from './screens/ScanScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <navigationcontainer>
      <stack.navigator initialroutename="Login">
        <stack.screen name="Login" component="{LoginScreen}">
        <stack.screen name="Scan" component="{ScanScreen}">
      </stack.screen></stack.screen></stack.navigator>
    </navigationcontainer>
  );
}