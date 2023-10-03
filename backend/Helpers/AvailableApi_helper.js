import { Api_collection } from "../database/Schema/Api_Schema.js";

export const create_newApi_Helper=async(req,res)=>{
try {


    const {name,desc,link}=req.body;
    if(!name||!desc||!link){
        return res.status(401).json({errorMessage:"invalid inputs credentials !!"})
    }

    const newApiGenerated=await Api_collection.create({
        api_name:name,
        api_desc:desc,
        link
    })

    if(newApiGenerated){
        return res.status(201).json({
            message:"Api generated successfully"
        })
    }
    
} catch (error) {
    res.status(500).json({
        errorMessage:"internal server error",
        error:error
    })
}
}