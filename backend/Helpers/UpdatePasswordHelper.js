import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { usersCollection } from "../database/Schema/UsersSchema.js"
dotenv.config()
const secretKey=process.env.SIGN_KEY
export const UpdatePasswordHelper=async(req,res)=>{

    console.log(req.query)
    const {id,token}=req.query
    const{password,ConPassword}=req.body

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
    
    const updatePassword= await usersCollection.findByIdAndUpdate(id,{
        password:password
    })
    res.render("../views/message",{message:"your password has been updated successfully ",msg2:"follow this link to log in into your account"})
} catch (error) {
    
}


    
}