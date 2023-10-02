import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"
import { usersCollection } from "../database/Schema/UsersSchema.js"
dotenv.config()
const secretKey=process.env.SIGN_KEY
export const UpdatePasswordHelper=async(req,res)=>{

 
    const {id,token}=req.query
    const{password,ConPassword}=req.body
 if(password!==ConPassword){
    res.render("../views/message",{message:"your password was not updated because passwords don't match ",msg2:"try  again"})
 }
 try {
       //!token validate 
       const validToken=await jwt.verify(token,secretKey)
 } catch (error) {
    return res.status(403).json({
        errorMessage:"invalid user token",
        error:error
    })
 }

// ! write to the database
try {
    
    const hashedPass=await bcrypt.hash(password,10)
    console.log(hashedPass)
    const updatePassword= await usersCollection.findByIdAndUpdate(id,{
        password:hashedPass
    })
    res.render("../views/message",{message:"your password has been updated successfully ",msg2:"follow this link to log in into your account"})
} catch (error) {
    
}


    
}