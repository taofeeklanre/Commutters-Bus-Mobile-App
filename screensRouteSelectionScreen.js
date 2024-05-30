import React, { useState, useEffect } from 'react';
import { View, Picker, Button } from 'react-native';
import axios from 'axios';

export default function RouteSelectionScreen({ navigation }) {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('');

  useEffect(() =?> {
    const fetchRoutes = async () =?> {
      try {
        const response = await axios.get('https://your-backend-url/api/routes');
        setRoutes(response.data.routes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoutes();
  }, []);

  const handleSelectRoute = () =?> {
    navigation.navigate('Payment', { route: selectedRoute });
  };

  return (
    <view>
      <picker selectedvalue="{selectedRoute}" onvaluechange="{(itemValue)" ==""> setSelectedRoute(itemValue)}?>
        {routes.map((route) =?> (
          <picker.item key="{route.id}" label="{route.name}" value="{route.id}">
        ))}
      </picker.item></picker>
      </view></button><button title="Select Route" onpress="{handleSelectRoute}">
    
  );
}