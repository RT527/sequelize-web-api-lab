const router = require('express').Router()
const inventorsCtrl = require('../controllers/inventors.js')

router.post('/', inventorsCtrl.create)

module.exports = router