
import { Router } from "express"
import { Login_with_gitHub_helper } from "../Helpers/Login_with_github_helper.js"



 export const Login_With_github=Router()
 Login_With_github.get("/simpleIntegration/api/v1/user_login_with_github",async(req,res)=>{

Login_with_gitHub_helper(req,res)

 }) 