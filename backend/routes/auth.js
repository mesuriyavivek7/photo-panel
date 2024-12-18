import express from 'express'
import { Login, registerUser } from '../controller/authController.js'

const router= express.Router()


//For register new user
router.post('/register',registerUser)

//For login user
router.post('/login',Login)


export default router