const express = require('express');
const router = express.Router()

const questController = require('../controllers/quests')

router.get('/', questController.redirect)
router.get('/quests', questController.index)
router.get('/quest/:someParameter', questController.show)

module.exports = router