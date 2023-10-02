import React from "react";
import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { showPassword } from "../helpers/CustomsHelper";
import "../index.css";
import loadingImage from "../assets/load2.gif";
import { CreateAccount_Api } from "../helpers/CreateAccout";
function CreateAccount() {
  const [formMessage, setFormMessage] = useState("");
  const [show, setShowPassword] = useState(false);
  const [show2, setShow2] = useState(false);
  const [backEndMessage, setBackendMessage] = useState();
  const [checkValidEmail, setCheckValidEmail] = useState();
  const [checkStrongPassword, setCheckStrongPassword] = useState();
  const [userPassword, setUserPassword] = useState();
  const [checkMatchInPassword, setCheckMatchInPassword] = useState();
  const [loadingGit, setLoadingGit] = useState(false);
  const [loading, setLoading] = useState(false);
  // ! VALID EMAIL ADDRESS
  function checkEmailOnChange(e) {
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)
      ? setCheckValidEmail(false)
      : setCheckValidEmail(true);
  }

  // ! CHECK IF THE PASSWORD IS STRONG ENOUGH

  function handlePasswordChange(e) {
    const mediumPass = new RegExp(
      "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
    );
    !mediumPass.test(e.target.value)
      ? setCheckStrongPassword(false)
      : setCheckStrongPassword(true);
    setUserPassword(e.target.value);
  }

  // !CHECK IF PASSWORDS DO MATCH

  function checkIfPasswordsMatchOnChange(e) {
    userPassword !== e.target.value
      ? setCheckMatchInPassword(false)
      : setCheckMatchInPassword(true);
  }

  // use navigate

  const navigate = useNavigate();
  //! handle form login
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCheckValidEmail(false);
    setCheckStrongPassword(false);
    setCheckMatchInPassword(false);
    setBackendMessage("");
    const form = document.querySelector("form");

    const form_data = new FormData(form);
    console.log(form_data);
    const email = form_data.get("email");
    const name = form_data.get("name");
    const password = form_data.get("password");
    const con_password = form_data.get("con-password");

    if (!email || !password || !name || !con_password) {
      return setFormMessage("All inputs are required");
    } else {
      setFormMessage("");
    }

    if (password !== con_password) {
      return setFormMessage("passwords don't match");
    } else {
      setFormMessage("");
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return setFormMessage("invalid email address !");
    } else {
      setFormMessage("");
    }
    const mediumPass = new RegExp(
      "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
    );
    if (!mediumPass.test(password)) {
      return setFormMessage(
        "weak password !, passwords should contain at least one uppercase, a number , special character '#,$,&,@...'"
      );
    } else {
      setFormMessage("");
    }

    // ! CREATE A NEW USER ACCOUNT
    const body = {
      name: name,
      email: email,
      password: password,
    };

    setLoading(true);
    CreateAccount_Api(body)
      .then((result) => {
        console.log(result.data);
        setLoading(false);

        if (
          result.data.redirectToLogin === true &&
          result.data.message == "user created successfully"
        ) {
          navigate("/con_access", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.code == "ERR_NETWORK") {
          return setBackendMessage(error.message);
        }
        if (error.response.status == 401) {
          setBackendMessage(error.response.data.errorMessage);
        }
      });
  };

  //! showPassword or hide password

  const showOrHide = () => {
    const inputType_password = document.querySelector("#password");
    if (show === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }

    inputType_password && showPassword(inputType_password);
  };

  const showOrHideCon = () => {
    const inputCon = document.querySelector("#con-password");
    if (show2 === false) {
      setShow2(true);
    } else {
      setShow2(false);
    }

    showPassword(inputCon);
  };

  // !login with git
  function loginWithGithub() {
    setLoadingGit(true);
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" +
        import.meta.env.VITE_CLIENT_ID
    );
  }

  return (
    <div className="Login_container" data-theme={"dark"}>
      <div className="LoginForm_container">
        {loading && (
          <div className="loader">
            <img src={loadingImage} alt="" />
          </div>
        )}
        <h3 className="LoginText">Create an account</h3>

        <div
          className={`signedInWith_Container ${loadingGit ? "loadingGit" : ""}`}
          onClick={loginWithGithub}
        >
          <h4> login with github</h4>
          <i className="fa-brands fa-github" id="git_icons"></i>
        </div>
        <h2>or</h2>
        {formMessage && (
          <div className="invalidDetails">
            <p>{formMessage}</p>
            <i
              className="fa-solid fa-xmark"
              id="hideError"
              onClick={() => setFormMessage(null)}
            ></i>
          </div>
        )}
        {backEndMessage && (
          <div className="invalidDetails">
            <p>{backEndMessage}</p>
            <i
              className="fa-solid fa-xmark"
              id="hideError"
              onClick={() => setBackendMessage(null)}
            ></i>
          </div>
        )}

        <div className="Form">
          <form action="" onSubmit={handleFormSubmit}>
            <div className="inputs">
              <label htmlFor="name"> Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="enter your name..."
              />
            </div>
            <div className="inputs">
              <label htmlFor="email"> Email</label>
              <input
                className={`${checkValidEmail == true ? "checked" : ""}`}
                type="text"
                id="email"
                name="email"
                autoComplete="on"
                placeholder="enter your email"
                onChange={checkEmailOnChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                className={`${
                  checkStrongPassword === true ? "strongPass" : ""
                }`}
                onChange={handlePasswordChange}
                placeholder="enter your password"
              />
              {show ? (
                <i
                  className="fa-regular fa-eye-slash"
                  id="showPass"
                  onClick={showOrHide}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-eye"
                  id="showPass"
                  onClick={showOrHide}
                ></i>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="con-password"> confirm your password</label>
              <input
                type="password"
                id="con-password"
                name="con-password"
                onChange={checkIfPasswordsMatchOnChange}
                autoComplete="off"
                className={`${
                  checkMatchInPassword === true ? "matchInPass" : ""
                }`}
                placeholder="enter your password again"
              />
              {show2 ? (
                <i
                  className="fa-regular fa-eye-slash"
                  id="showPass"
                  onClick={showOrHideCon}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-eye"
                  onClick={showOrHideCon}
                  id="showPass"
                ></i>
              )}
            </div>
            <div className="inputs">
              <button className="btn_submit">submit</button>
            </div>
          </form>
        </div>

        <div className="tips">
          
          <Link to={"/con_access"}>
            <p className="blueText prompts">Have an account ?</p>
          </Link>

          <div className="tipsDesc">
            <span className="blueText prompts">Tip: </span> You are about to
            sign up to simpleIntegration. After you've have logged in, you'll
            only be asked to re-authenticate again after a few hours of
            inactivity.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
