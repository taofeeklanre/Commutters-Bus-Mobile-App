import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RevenueTrackingScreen() {
  const [revenue, setRevenue] = useState([]);

  useEffect(() =?> {
    const fetchRevenue = async () =?> {
      try {
        const response = await axios.get('https://your-backend-url/api/revenue');
        setRevenue(response.data.revenue);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRevenue();
  }, []);

  return (
    <div>
      <h1>Revenue Tracking</h1>
      <ul>
        {revenue.map((record) =?> (
          <li key="{record.id}">{record.amount}</li>
        ))}
      </ul>
    </div>
  );
}