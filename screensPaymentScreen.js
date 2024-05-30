import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import axios from 'axios';

export default function PaymentScreen({ route }) {
  const [qrCode, setQrCode] = useState('');

  const handlePayment = async () =?> {
    try {
      const response = await axios.post('https://your-backend-url/api/payment', { route: route.params.route });
      if (response.data.success) {
        setQrCode(response.data.qrCode);
      } else {
        alert('Payment failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  return (
    <view>
      </view></button><button title="Make Payment" onpress="{handlePayment}">
      {qrCode &amp;&amp; <text>QR Code: {qrCode}</text>}
    
  );
}