import { Router } from "express";
import { Login_helper_function } from "../Helpers/Login_helper_function.js";


// ! login route of the user
export const User_Login_Route= Router()


User_Login_Route.post("/simpleIntegration/api/v1/user_login",async(req,res)=>{

    
    // !function to handle login .
    // !all this functions should go to the helper folder
Login_helper_function(req,res)

    
})