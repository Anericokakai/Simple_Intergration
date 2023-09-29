import { Router } from "express";
import { Get_user_data_helper } from "../Helpers/Login_with_github_helper.js";

 export  const get_user_data_route=Router()

get_user_data_route.get("/simpleIntegration/api/v1/get_git_user_data",async(req,res)=>{

Get_user_data_helper(req,res)

})