import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function WalletScreen() {
  const [amount, setAmount] = useState('');

  const handleFundWallet = async () =?> {
    try {
      const response = await axios.post('https://your-backend-url/api/fund-wallet', { amount });
      if (response.data.success) {
        alert('Wallet funded successfully');
      } else {
        alert('Funding failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  return (
    <view>
      <textinput placeholder="Amount" value="{amount}" onchangetext="{setAmount}">
      </textinput></view></button><button title="Fund Wallet" onpress="{handleFundWallet}">
    
  );
}