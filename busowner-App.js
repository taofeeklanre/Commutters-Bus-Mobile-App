import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import BusManagementScreen from './screens/BusManagementScreen';
import RevenueTrackingScreen from './screens/RevenueTrackingScreen';

function App() {
  return (
    <router>
      <switch>
        <route path="/" exact="" component="{LoginScreen}">
        <route path="/dashboard" component="{DashboardScreen}">
        <route path="/bus-management" component="{BusManagementScreen}">
        <route path="/revenue-tracking" component="{RevenueTrackingScreen}">
      </route></route></route></route></switch>
    </router>
  );
}

export default App;

