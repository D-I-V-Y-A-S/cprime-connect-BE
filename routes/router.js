const express = require('express')
const router = express.Router()

const {loginController}=require('../controller/loginController')
const { orgChartController } = require('../controller/orgChartController');

router.post('/validate/userLogin',loginController)
router.get('/org-chart', orgChartController);

module.exports=router

