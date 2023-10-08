import axios from "axios"

export const CreateAccount_Api=async(data)=>{

    const result= await axios.post("http://localhost:6060/simpleIntegration/api/v1/new_user",data)
    return result
}

// ! GENERATE AN API KEY

export const generateApiKey=async( userId,token)=>{
    const result= await axios.get(`http://localhost:6060/simpleIntegration/api/v1/user_apiKey_generator?userId=${userId}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    return result

}
export const generateApiKeyForGit=async( gitId,token)=>{
    const result= await axios.get(`http://localhost:6060/simpleIntegration/api/v1/user_apiKey_generator?gitId=${gitId}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    return result

}