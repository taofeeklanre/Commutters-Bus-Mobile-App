import React from 'react';
import { View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanScreen() {
  const handleBarCodeScanned = ({ type, data }) =?> {
    alert(Bar code with type ${type} and data ${data} has been scanned!);
    // Here you can send the scanned data to the backend for verification
  };

  return (
    <view>
      <barcodescanner onbarcodescanned="{handleBarCodeScanned}" style="{{" height:="" 400,="" width:="" 400="" }}="">
    </barcodescanner></view>
  );
}