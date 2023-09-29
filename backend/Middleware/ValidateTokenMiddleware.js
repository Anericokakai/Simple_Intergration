import JWT from "jsonwebtoken"
 import dotenv from 'dotenv'

 dotenv.config()
export const validate_token=async(req,res,next)=>{


    // access the  query for the header
    const Authorization=req.headers.authorization
    
    // ! if there is no token we return an authorized
    if(!Authorization){
        return  res.status(403).json({errorMessage:"Unauthorized user request !"})
    }
    // ! split the token
    let tokenArray= Authorization.split(" ")
    
    if(tokenArray.length<2){
        return  res.status(403).json({errorMessage:"Unauthorized user request !"})
    }
const token=tokenArray[1]



// ! verify the token

const sign_Key=process.env.SIGN_KEY
const token_is_valid=await JWT.verify(token,sign_Key,(error,authData)=>{
    if(error){
        if(error.message==="jwt expired")
        {
            return res.status(403).json({tokenExpired:true,redirectToLogin:true,errorMessage:"token expired !"})

        }
        return  res.status(403).json({errorMessage:"Unauthorized user! !",error})
    } else{
        
        next()
    }
})
}