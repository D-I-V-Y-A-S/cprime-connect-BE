const express = require('express')
const router = express.Router()

const {loginController}=require('../controller/loginController')
const { orgChartController } = require('../controller/orgChartController');
const { getEmployees, updateEmployee } = require('../controller/employeeManagement');

router.post('/validate/userLogin',loginController)
router.get('/org-chart', orgChartController);

router.get('/employees', getEmployees);
router.put('/employees/edit', updateEmployee);

module.exports=router

