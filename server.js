const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Dummy data and routes
let users = [];
let routes = [{ id: '1', name: 'Oshodi' }, { id: '2', name: 'Abule Egba' }];
let buses = [{ id: '1', name: 'Bus 1' }];
let revenue = [{ id: '1', amount: '1000' }];

app.post('/api/login', (req, res) =?> {
  const { email, password } = req.body;
  // Dummy authentication
  if (email === 'user@example.com' &amp;&amp; password === 'password') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post('/api/driver-login', (req, res) =?> {
  const { email, password } = req.body;
  // Dummy authentication
  if (email === 'driver@example.com' &amp;&amp; password === 'password') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post('/api/owner-login', (req, res) =?> {
  const { email, password } = req.body;
  // Dummy authentication
  if (email === 'owner@example.com' &amp;&amp; password === 'password') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get('/api/routes', (req, res) =?> {
  res.json({ routes });
});

app.get('/api/buses', (req, res) =?> {
  res.json({ buses });
});

app.get('/api/revenue', (req, res) =?> {
  res.json({ revenue });
});

app.post('/api/fund-wallet', (req, res) =?> {
  const { amount } = req.body;
  // Dummy wallet funding
  res.json({ success: true });
});

app.post('/api/payment', (req, res) =?> {
  const { route } = req.body;
  // Dummy payment processing
  const qrCode = 'dummy-qr-code';
  res.json({ success: true, qrCode });
});

const port = process.env.PORT || 5000;
app.listen(port, () =?> {
  console.log(Server running on port ${port});