import axios from "axios"

export const LoginFunction=async(body)=>{
const result= await axios.post("http://localhost:6060/simpleIntegration/api/v1/user_login",body)
return result
}