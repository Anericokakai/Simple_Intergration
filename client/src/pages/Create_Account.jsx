import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { showPassword } from "../helpers/CustomsHelper";
import "../index.css";
function CreateAccount() {
const [formMessage,setFormMessage]=useState("")
const [show, setShowPassword] = useState(false);
const [show2, setShow2] = useState(false);
    // handle form login

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form =document.querySelector("form")
      
        const form_data= new FormData(form)
        console.log(form_data)
        const email=form_data.get("email")
        const name=form_data.get("name")
        const password=form_data.get("password")
        const con_password=form_data.get("con-password")

        if(!email||!password||!name||!con_password){
return  setFormMessage("All inputs are required")
        } else{
            setFormMessage("")
        }
      
        if(password!==con_password){
            return setFormMessage("passwords don't match")
        }else{setFormMessage("")}

        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            return setFormMessage("invalid email address !")
        } else{
            setFormMessage("")
        }
        const mediumPass = new RegExp(
            "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
          );
        if(!mediumPass.test(password)){
            return setFormMessage("weak password !, passwords should contain at least one uppercase, a number , special character '#,$,&,@...'")
        }else{
            setFormMessage("")
        }
    }

      //! showPassword or hide password

  const showOrHide = () => {
    const inputType_password= document.querySelector("#password")
    if (show === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
    
    inputType_password && showPassword(inputType_password);
  };

 
  const showOrHideCon = () => {
    const inputCon=document.querySelector("#con-password")
    if (show2 === false) {
      setShow2(true);
    } else {
      setShow2(false);
    }

    showPassword(inputCon);
  };

  return (
    <div className="Login_container" data-theme={"dark"}>
      <div className="LoginForm_container">
        <h3 className="LoginText">Confirm access</h3>

        <div className="signedInWith_Container">
          <h4> login with github</h4>
          <i className="fa-brands fa-github" id="git_icons"></i>
        </div>
        <h2>or</h2>
        <p className="errorMessage">{formMessage}</p>
        <div className="Form">
          <form action="" onSubmit={handleFormSubmit}>
          <div className="inputs">
              <label htmlFor="name"> Name</label>
              <input type="text" id="name" name="name" autoComplete="off" placeholder="enter your name..." />
            </div>
            <div className="inputs">
              <label htmlFor="email"> Email</label>
              <input type="text" id="email" name="email" autoComplete="on"  placeholder="enter your email"/>
            </div>
            <div className="inputs">
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="enter your password"
              />
                {show ? (
                <i className="fa-regular fa-eye-slash" id="showPass" onClick={showOrHide}></i>
              ) : (
                <i className="fa-regular fa-eye" id="showPass" onClick={showOrHide}></i>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="con-password"> confirm your password</label>
              <input
                type="password"
                id="con-password"
                name="con-password"
                autoComplete="off"
                placeholder="enter your password again"
              />
               {show2 ? (
                  <i
                    className="fa-regular fa-eye-slash"
                    id="showPass"
                    onClick={showOrHideCon}
                  ></i>
                ) : (
                  <i className="fa-regular fa-eye" onClick={showOrHideCon} id='showPass'></i>
                )}
            </div>
            <div className="inputs">
              <button className="btn_submit">submit</button>
            </div>
          </form>
        </div>

        <div className="tips">
          <Link>
            <p className="blueText prompts">Forgotten password ?</p>
          </Link>

          <div className="tipsDesc">
          <span className="blueText prompts">Tip: </span> You are about to sign up to simpleIntegration. After you've have logged in, you'll only be asked to re-authenticate again after a few hours of inactivity.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
