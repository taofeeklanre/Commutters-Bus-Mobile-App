import React from 'react';
import { Link } from 'react-router-dom';

function DashboardScreen() {
  return (
    <div>
      <h1>Dashboard</h1>
      <link to="/bus-management">Manage Buses
      <link to="/revenue-tracking">Track Revenue
    </div>
  );
}

export default DashboardScreen;
