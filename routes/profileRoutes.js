const { Router } = require('express')
const router = Router()

const getProfileDataController = require('../controller/getProfileDataController')
const getResumeEmailController = require('../controller/sentResumePasswordEmail')

router.get('/getProfile',  getProfileDataController.getProfile)
router.post('/sentEmail',  getResumeEmailController.sentEmail)

module.exports = router;