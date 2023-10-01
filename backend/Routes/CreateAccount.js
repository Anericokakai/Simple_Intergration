import {Router} from "express"
import { CreateAccount_Helper } from "../Helpers/CreateAccountHelper.js"

export const create_accountRoute=Router()

create_accountRoute.post('/simpleIntegration/api/v1/new_user',async(req,res)=>{

CreateAccount_Helper(req,res)

})