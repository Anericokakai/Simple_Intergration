import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { resetPassword } from "../helpers/LoginsHelper";
import {toast,ToastContainer} from "react-toastify"
import { useNavigate } from "react-router-dom";


function ResetPass() {

  const navigate = useNavigate()
    const[error,setError]=useState()

    const handleNewPass = (e) => {
setError('')
        e.preventDefault();
      const form= document.querySelector("form")
        const formData= new FormData(form)
        const email= formData.get("email")
        console.log(email)
      
        if(!email){
       return setError("email field is required")
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
return setError("invalid email  format!")
        }
        resetPassword({
            email:email
        }).then(data=>{
            console.log(data.data)
   
   
       if(data.data.message && data.data.success){
        toast.success(data.data.message)  
setTimeout(()=>{
navigate("/con_access",{replace:true})
},2500)
            }
        }).catch(error=>{
            console.log(error);
            if(error.response.status===401){
                setError(error.response.data.errorMessage)
            }
        })
      };
      const { theme } = useSelector((store) => store.userLogInDetails);
  return (
    <section className="BodyLogin" data-theme={theme}>
      <ToastContainer
        position={"top-center"}
        closeOnClick={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        autoClose={2000}
      />
      <div className="changePass">
        <form className="formBackend" onSubmit={handleNewPass}>
          <h1>Reset your password</h1>
         {
            error&& <div className="invalidDetails">
            <p>{error}</p>
            <i
              className="fa-solid fa-xmark"
              id="hideError"
              onClick={() => setError(null)}
            ></i>
          </div>
         }
          <div className="backendInput">
            <label htmlFor="password">email</label>
            <input type="text" id="password" name="email" />
          </div>

          <div className="backendInput">
            <button>Reset</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ResetPass;
