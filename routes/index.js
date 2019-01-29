const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.redirect)
router.get('/quests', indexController.index)
router.get('/quests/:id', indexController.show)

module.exports = router