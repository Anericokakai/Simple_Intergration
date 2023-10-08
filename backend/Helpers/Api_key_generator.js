import crypto from "crypto"
import { usersCollection } from "../database/Schema/UsersSchema.js";

function generateApiKey(length) {
    const apiKey = crypto
      .randomBytes(Math.ceil(length / 2))
      .toString('hex')
      .slice(0, length);
    return apiKey;
  }
export const generate_Api_key_Helper=async(req,res)=>{
try {
    const userId= req.query.userId
    const githubId=req.query.gitId
    console.log()
    // ! implement  find by id 
    const apiKeyLength=17
    const  apiKey = generateApiKey(apiKeyLength)
    if(!userId){

        return res.status(402).json({errorMessage:"invalid user credentials !"})
    }
    console.log(userId)
 
        const updateApiKey=await usersCollection.findByIdAndUpdate(userId,{
            secret_key:apiKey
        },{
            new:true
        })

        console.log(updateApiKey)
        if(updateApiKey){
            return res.status(201).json({
                info:updateApiKey,
                message:"api key generated successfully"
            })
        }
        // ! if not generated send the error

        if(!updateApiKey) {
            return res.status(401).json({errorMessage:"failed to update or generate a new api key ,please try again !"})
        }


    

  



// ! save the api key to the data base




} catch (error) {
    
    if(error.name==="CastError"){
        return res.status(402).json({errorMessage:"invalid user credentials !"})
    }
    res.status(500).json({errorMessage:"internal server error ,please try again !",error:error})
}

}