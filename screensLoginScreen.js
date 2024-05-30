import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () =?> {
    try {
      const response = await axios.post('https://your-backend-url/api/login', { email, password });
      if (response.data.success) {
        navigation.navigate('Home');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  return (
    <view>
      <textinput placeholder="Email" value="{email}" onchangetext="{setEmail}">
      <textinput placeholder="Password" value="{password}" onchangetext="{setPassword}" securetextentry="">
      <button title="Login" onpress="{handleLogin}">
    
  );
}