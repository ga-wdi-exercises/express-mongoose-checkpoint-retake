// GET '/' which should redirect to `/quests'
// GET '/quests' which render view with a list of notes
// GET '/quest/:someParameter' where :someParameter can be used to identify or grab a single Quest from the database


const express = require('express');
const a
const router = express.Router()

const indexController = require('../controllers/index')

router.get('/', indexController.redirect)
router.get('/quests', indexController.index)
router.get('/quest/:someParameter', indexController.show)

module.exports = router