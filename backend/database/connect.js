import mongoose from "mongoose";
import dotenv from 'dotenv'
// ! CONFIGURE DOTENV FILE
dotenv.config()

// ! FUNCTION TO CONNECT TO THE DATABASE
export const connect_to_dataBase=async()=>{
    try {
       
        const result= await mongoose.connect(process.env.MONGO_URL)
        return result
    } catch (error) {
        console.log(error)
        
    }
}