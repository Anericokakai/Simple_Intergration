import axios from "axios";

export const LoginFunction = async (body) => {
  const result = await axios.post(
    "https://free-apis-pwdv.onrender.com/simpleIntegration/api/v1/user_login",
    body
  );
  return result;
};

// !login with github function

export const loginWithGitHubApi = async (code) => {
  const result = await axios.get(
    `https://free-apis-pwdv.onrender.com/simpleIntegration/api/v1/user_login_with_github?code=${code}`,
    
  );
  return result;
};


//! get user data from github

export const getGitHubUserData=async(access_token)=>{
    const result= await axios.get("https://free-apis-pwdv.onrender.com/simpleIntegration/api/v1/get_git_user_data",{
        headers:{
            Authorization:`Bearer ${access_token}`
        }
    })
    return result

}

// reset password
export const resetPassword=async(email)=>{
  const response=await axios.post("https://free-apis-pwdv.onrender.com/simpleIntegration/api/v1/forgot_pass",email)
  return response
}



export const getReadmeFile=async(file)=>{
  const username="Anericokakai"
  const repo='Simple_Intergration'
  const folderPath="docs/"
 const branch='documentations'
  const readmeFilename=`${file}.md`
  
  const token = import.meta.env.VITE_ACCESS_TOKEN;
   
  const readMeUrl=`https://api.github.com/repos/${username}/${repo}/contents/${folderPath}${readmeFilename}?ref=${branch}`
  const result=await axios.get(readMeUrl,{
       Headers:{
           "Authorization":`token ${token}`
       }
   })
   return result.data


}
