const express = require('express')
const router = express.Router()

const {loginController}=require('../controller/loginController')
const {addCandidate,editCandidate,searhCandidates,getCandidates}=require('../controller/onBoardingController')

router.post('/validate/userLogin',loginController)

router.post('/add_Candidate',addCandidate)
router.post('/edit_Candidate',editCandidate)
router.get('/search_candidate/:searchData',searhCandidates)
router.get('/get_candidate',getCandidates)

module.exports=router

