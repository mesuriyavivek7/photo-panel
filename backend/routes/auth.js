import express from 'express'
import { registerUser } from '../controller/authController.js'

const router= express.Router()


//For register new user
router.post('/register',registerUser)




export default router