const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// API Endpoint 1: GET /api/data
app.get('/api/data', (req, res) => {
  const data = [
    { id: 1, message: 'Hello from API' },
    { id: 2, message: 'Minimal Stack' }
  ];
  res.json({ status: 'success', data });
});

// API Endpoint 2: POST /api/submit
app.post('/api/submit', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }
  const received = { name, message, timestamp: new Date().toISOString() };
  res.status(201).json({ status: 'success', message: 'Data received successfully', received });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
