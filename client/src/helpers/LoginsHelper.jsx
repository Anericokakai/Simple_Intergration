import axios from "axios";

export const LoginFunction = async (body) => {
  const result = await axios.post(
    "http://localhost:6060/simpleIntegration/api/v1/user_login",
    body
  );
  return result;
};

// !login with github function

export const loginWithGitHubApi = async (code) => {
  const result = await axios.get(
    `http://localhost:6060/simpleIntegration/api/v1/user_login_with_github?code=${code}`,
    
  );
  return result;
};


//! get user data from github

export const getGitHubUserData=async(access_token)=>{
    const result= await axios.get("http://localhost:6060/simpleIntegration/api/v1/get_git_user_data",{
        headers:{
            Authorization:`Bearer ${access_token}`
        }
    })
    return result

}

// reset password
export const resetPassword=async(email)=>{
  const response=await axios.post("http://localhost:6060/simpleIntegration/api/v1/forgot_pass",email)
  return response
}