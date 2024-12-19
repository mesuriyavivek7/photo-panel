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


export const Login = async (req, res, next)=>{
   try{
      const {username,password} = req.body

      if(!username || !password) return res.status(400).json({message:"Please provide all required fields."})

      const user = await USERS.findOne({userid:username})

      if(!user) return res.status(404).json({message:"User not found by this userid."})
       
      const isPasswordCorrect = await bcryptjs.compare(password,user.password)

      if(!isPasswordCorrect) return res.status(404).json({message:"Password is incorrect."})

      const token = jwt.sign({id:user._id,userType:user.user_type},process.env.JWT)

      const {_id,email,mobileno,user_type,company_name,userid} = user._doc
      res.cookie("user_data",token,{expires:new Date(Date.now()+2592000000),httpOnly:true,secure:process.env.NODE_ENV === 'production',sameSite:process.env.NODE_ENV === 'production' ? 'none' : 'lax'}).status(200).json({_id,email,user_type,email,mobileno,company_name,userid})

   }catch(err){
     next(err)
   }
}

export const validateUser = async (req, res , next)=>{
    try{
      const token = req.cookies.user_data
       
      if(!token) return res.status(401).json({message:"No token found."})

      const decoded = jwt.verify(token,process.env.JWT)

      const user = await USERS.findById(decoded.id)

      if(!user) return res.status({message:'User not found.'})

      const {_id,email,mobileno,user_type,company_name,userid} = user._doc
      res.status(200).json({_id,email,mobileno,user_type,company_name,userid})
      
    }catch(err){
       next(err)
    }
}