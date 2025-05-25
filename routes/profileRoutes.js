const { Router } = require('express')
const router = Router()

const getProfileDataController = require('../controller/getProfileDataController')

router.get('/getProfile',  getProfileDataController.getProfile)

module.exports = router;