import axios from "axios"

export const CreateAccount_Api=async(data)=>{

    const result= await axios.post("http://localhost:6060/simpleIntegration/api/v1/new_user",data)
    return result
}