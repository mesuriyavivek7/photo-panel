import USERS from '../models/USERS.js';

import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken"

const generateUserId = (userType)=>{
    const validTypes = ["developer", "client", "admin"];
    if (!validTypes.includes(userType)) {
      throw new Error("Invalid user type. Use 'developer', 'client', or 'admin'.");
    }

    // Generate a random unique number and string mix
    const randomPart = Math.random().toString(36).substring(2, 7); // Random alphanumeric string
    const uniqueNumber = Date.now().toString().slice(-5); // Get last 5 digits of current timestamp
  
    // Combine userType with unique parts
    return `${userType}${uniqueNumber}${randomPart}`;
} 

export const registerUser = async (req, res, next)=>{
     try{
        const {username,mobileno,email,password,company_name,user_type} = req.body

        if(!username || !mobileno || !email || !password || !company_name || !user_type) return res.status(400).json({message:"Please provide all required fields."})


        const user = await USERS.findOne({email})

        if(user) return res.status(400).json({message:"Email address is already exist."})

        const salt=bcryptjs.genSaltSync(10)
        const hash=bcryptjs.hashSync(password,salt)

        const userid = generateUserId(user_type)
   
        const newUser = new USERS({username,mobileno,email,password:hash,company_name,user_type,userid})
        await newUser.save()

        res.status(200).json({message:"New User registered."})
     }catch(err){
         next(err)
     }
}