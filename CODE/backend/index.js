const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Placeholder API to return data
app.get('/api/range', (req, res) => {
    const { batteryLevel, consumptionRate } = req.query;

    if (!batteryLevel || !consumptionRate) {
        return res.status(400).send({ error: 'Battery level and consumption rate are required' });
    }

    const estimatedRange = (batteryLevel / 100) * consumptionRate; // Example formula
    res.send({ estimatedRange });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
