const ChargeStation = require('../models/ChargeStation');

// Fetch nearby charging stations
exports.getChargingStations = async (req, res) => {
  try {
    const stations = await ChargeStation.find({});
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
