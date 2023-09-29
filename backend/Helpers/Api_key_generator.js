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
    // ! implement  find by id 
    const apiKeyLength=17
    const  apiKey = generateApiKey(apiKeyLength)
    if(userId){
 
        const updateApiKey=await usersCollection.findByIdAndUpdate(userId,{
            secret_key:apiKey
        })

        if(updateApiKey){
            return res.status(201).json({
                apiKey:apiKey,
                message:"api key generated successfully"
            })
        }
        // ! if not generated send the error

        if(!updateApiKey) {
            return res.status(401).json({errorMessage:"failed to update or generate a new api key ,please try again !"})
        }


    }

    // find by github id
    if(githubId){
        const generatedApiKeyForGit=await usersCollection.findOneAndUpdate({git_hub_id:githubId},{
            secret_key:apiKey
        })

        if(generatedApiKeyForGit){
            return res.status(201).json({
                apiKey:apiKey,
                message:"api key generated successfully"
            })
        }
        if(!generatedApiKeyForGit){
            return res.status(403).json({errorMessage:"failed to update or generate a new api key ,please try again !"})
        }
    }




// ! save the api key to the data base




} catch (error) {
    
    if(error.name==="CastError"){
        return res.status(402).json({errorMessage:"invalid user credentials !"})
    }
    res.status(500).json({errorMessage:"internal server error ,please try again !",error:error})
}

}