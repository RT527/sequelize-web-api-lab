const router = require('express').Router()
const inventorsCtrl = require('../controllers/inventors.js')

router.post('/', inventorsCtrl.create)
router.get('/', inventorsCtrl.index)
router.put('/:inventorId', inventorsCtrl.update)
router.delete('/:inventorId', inventorsCtrl.delete)

module.exports = router