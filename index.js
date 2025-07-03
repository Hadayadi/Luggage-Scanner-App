const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Allows your frontend to fetch data
app.use(express.json());

const luggageData = [
  {
    code: '12345',
    destination: 'Jeddah',
    owner: 'Ahmed',
    arrival: '2025-07-04',
    from: 'Riyadh',
    departure: '2025-07-03',
    to: 'Makkah',
    next: 'Madina',
    needs: 'Trolley'
  },
  {
    code: '67890',
    destination: 'Dammam',
    owner: 'Sara',
    arrival: '2025-07-05',
    from: 'Jeddah',
    departure: '2025-07-04',
    to: 'Tabuk',
    next: 'Abha',
    needs: 'None'
  }
];

app.get('/', (req, res) => {
  res.send('Luggage QR API is running');
});

app.get('/api/luggage', (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const item = luggageData.find(entry => entry.code === code.trim());
  if (!item) return res.status(404).json({ error: 'Code not found' });

  res.json(item);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
