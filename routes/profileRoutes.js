const { Router } = require('express')
const router = Router()

const getProfileDataController = require('../controller/getProfileDataController')
const getResumeEmailController = require('../controller/sentResumePasswordEmail')
const sentEmailConnectWithMeController = require('../controller/sentEmailconnectWithMe')

router.get('/getProfile',  getProfileDataController.getProfile)
router.post('/sentEmail',  getResumeEmailController.sentEmail)
router.post('/connetMesendEmail',  sentEmailConnectWithMeController.sentEmailConnectWithMe)

module.exports = router;