import axios from "axios"

export const fetchReadme=async(token)=>{
const username="Anericokakai"
const repo='Simple_Intergration'
    const readMeUrl=`https://api.github.com/repos/${username}/${repo}/readme`
   const data=await axios.get(readMeUrl,{
        Headers:{
            "Authorization":`token ${token}`
        }
    })
    return data
}