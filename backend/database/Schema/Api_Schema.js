import mongoose,{Schema} from "mongoose";

const Api_Schema=new Schema({
    api_name:String,
    api_desc:String,
    link:String
},{
    collection:"integration_Apis"
})

export const Api_collection= mongoose.model("integration_Apis",Api_Schema)