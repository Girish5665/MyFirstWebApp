const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/device/on', (req, res) => {
  console.log('Device ON command received');
  res.send('Device is ON');
});

app.post('/api/device/off', (req, res) => {
  console.log('Device OFF command received');
  res.send('Device is OFF');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
