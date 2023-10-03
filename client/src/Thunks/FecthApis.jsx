import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAvailableApis=createAsyncThunk("fetchAvailableApis",async()=>{
const result=await axios.get("http://localhost:6060/simpleIntegration/api/v1/apis")
return result.data

})

export const fetchDocumentation=createAsyncThunk("fetchDocs",async()=>{


    const username="Anericokakai"
const repo='Simple_Intergration'
   const token = import.meta.env.VITE_ACCESS_TOKEN;
   
    const readMeUrl=`https://api.github.com/repos/${username}/${repo}/readme`
    const result=await axios.get(readMeUrl,{
         Headers:{
             "Authorization":`token ${token}`
         }
     })

     return result.data
})