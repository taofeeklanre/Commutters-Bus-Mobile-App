import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import RouteSelectionScreen from './screens/RouteSelectionScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <navigationcontainer>
      <stack.navigator initialroutename="Login">
        <stack.screen name="Login" component="{LoginScreen}">
        <stack.screen name="Home" component="{HomeScreen}">
        <stack.screen name="Wallet" component="{WalletScreen}">
        <stack.screen name="RouteSelection" component="{RouteSelectionScreen}">
        <stack.screen name="Payment" component="{PaymentScreen}">
      </stack.screen></stack.screen></stack.screen></stack.screen></stack.screen></stack.navigator>
    </navigationcontainer>
  );
}