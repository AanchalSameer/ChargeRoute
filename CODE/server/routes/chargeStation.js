const express = require('express');
const router = express.Router();
const { getChargingStations } = require('../controllers/chargeStationController');

router.get('/', getChargingStations);

module.exports = router;
