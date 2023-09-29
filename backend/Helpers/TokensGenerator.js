import jwt from "jsonwebtoken"
 import dotenv from 'dotenv'
 dotenv.config()
export const generateToken=async(email,secret,expiry)=>{
  try {
    const token =await jwt.sign({email:email},secret,{
        expiresIn:expiry,
      
        
    })

    return token
  } catch (error) {

 return error
  }
}

