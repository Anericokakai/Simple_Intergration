import React, { useEffect } from 'react'

function Create_Account() {

    useEffect(()=>{
        const params=window.location.search
        const urlParams= new URLSearchParams(params)
        const code_by_git=urlParams.get("code")
        console.log(code_by_git)
        
        },[])

        function loginWithGithub(){
            window.location.assign("https://github.com/login/oauth/authorize?client_id="+import.meta.env.VITE_CLIENT_ID)
          }
  return (
    <div>Create_Account</div>
  )
}

export default Create_Account