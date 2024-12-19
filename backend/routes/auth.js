import express from 'express'
import { Login, registerUser, validateUser } from '../controller/authController.js'

const router= express.Router()


//For register new user
router.post('/register',registerUser)

//For validation user
router.get('/validate',validateUser)

//For login user
router.post('/login',Login)


export default router