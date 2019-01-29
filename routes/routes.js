const express = require('express');
const router = express.Router();


const questController = require('../controllers/quests');

router.get('/', questController.index);

router.get('/quests', questController.index);

router.get('/quests/:id', questController.show);

module.exports = router; 