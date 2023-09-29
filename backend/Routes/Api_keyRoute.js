import crypto from "crypto"
import { Router } from "express"
import { generate_Api_key_Helper } from "../Helpers/Api_key_generator.js"
import { validate_token } from "../Middleware/ValidateTokenMiddleware.js"

export const Api_key_route= Router()


// ! validate the token first before creating  an api key 
// ! we use a middle ware to generate an api key

Api_key_route.get("/simpleIntegration/api/v1/user_apiKey_generator", validate_token,async(req,res)=>{

    // ! IF THE TOKEN WAS VALID WE CONTINUE TO THE  NEXT

    generate_Api_key_Helper(req,res)
})