import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BusManagementScreen() {
  const [buses, setBuses] = useState([]);

  useEffect(() =?> {
    const fetchBuses = async () =?> {
      try {
        const response = await axios.get('https://your-backend-url/api/buses');
        setBuses(response.data.buses);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBuses();
  }, []);

  return (
    <div>
      <h1>Bus Management</h1>
      <ul>
        {buses.map((bus) =?> (
          <li key="{bus.id}">{bus.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BusManagementScreen;

