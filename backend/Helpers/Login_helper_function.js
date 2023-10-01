import { usersCollection } from "../database/Schema/UsersSchema.js"
import jwt from "jsonwebtoken"
import  bcryptjs from 'bcryptjs'
import { generateToken } from "./TokensGenerator.js"
export const Login_helper_function=async(req,res)=>{

   try {
     // ! Aces the body request
     const {email,password}=req.body
    
    //  check if the body has no email or password
    if(!email ||!password) return res.status(400).json({errorMessage:"all input fields are required"})
     // !check if the user exist in the database
 const user_exist= await usersCollection.findOne({email:email})

//  ! if user does not exist
 if(!user_exist)return res.status(401).json({ errorMessage:"invalid login credentials !"})
 
// if user exist check the password if is valid
 const password_from_db= user_exist.password
// validate the password
const is_password_valid=await bcryptjs.compare(password,password_from_db,(err,result)=>{
    if(err){
        return res.status(400).json({errorMessage:"invalid login credentials"})
    }
})

// !create a token for the user if he or she exists in the database

 const sign_Key=process.env.SIGN_KEY
 
 const expiryHrs='100s'
 
 const token = await  generateToken(email,sign_Key,expiryHrs)


//  generate the refresh token




// send the token to the user and the status
const response={
    token:token,
    user:user_exist
}


// send back data
 res.status(200).json({response,validUser:true,message:"user logged in successfully"})
    
   } catch (error) {
    // ! in case of an error we return the error to the client
    
    res.status(500).json({errorMessage:"internal server error ,please try again !",error:error})
   }


}