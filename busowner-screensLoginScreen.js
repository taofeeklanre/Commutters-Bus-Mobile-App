import React, { useState } from 'react';
import axios from 'axios';

function LoginScreen({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () =?> {
    try {
      const response = await axios.post('https://your-backend-url/api/owner-login', { email, password });
      if (response.data.success) {
        history.push('/dashboard');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  return (
    <div>
      <input placeholder="Email" value="{email}" onchange="{(e)" ==""> setEmail(e.target.value)} /?>
      <input placeholder="Password" value="{password}" onchange="{(e)" ==""> setPassword(e.target.value)} type="password" /?>
      </div></button><button onclick="{handleLogin}">Login</button>
    
  );
}

export default LoginScreen;
