import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showPassword } from "../helpers/CustomsHelper";
import {
  getGitHubUserData,
  LoginFunction,
  loginWithGitHubApi,
} from "../helpers/LoginsHelper";
import "../index.css";
import loadingImage from "../assets/load2.gif";
import { useDispatch, useSelector } from "react-redux";
import { setLogInStatus, setToken, set_userData } from "../slice/userInfoSlice";
function LoginPage() {
  // ! declared varibales

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState("");
  const [show, setShowPassword] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [backEndMessage, setBackendMessage] = useState();
  const [checkValidEmail, setCheckValidEmail] = useState();
  const [loadingGit, setLoadingGit] = useState(false);
  // !SHOW OR HIDE PASSWORDS
  const showOrHide = () => {
    const inputType_password = document.querySelector("#password");
    if (show === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }

    inputType_password && showPassword(inputType_password);
  };

  // ! VALID EMAIL ADDRESS
  function checkEmailOnChange(e) {
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)
      ? setCheckValidEmail(false)
      : setCheckValidEmail(true);
  }

  // ! HANDLE FORM SUBMISSIONS
  const handleLoginForm = (e) => {
    const form = document.querySelector("form");
    const form_Data = new FormData(form);
    e.preventDefault();
    setCheckValidEmail(false);
    setBackendMessage("");

    const email = form_Data.get("email");
    const password = form_Data.get("password");
    if (!email || !password)
      return setFormMessage("All input fields are required !");

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return setFormMessage("invalid email address");
    } else {
      setFormMessage("");
    }
    const body = {
      email: email,
      password: password,
    };
    setLoading(true);
    LoginFunction(body)
      .then((data) => {
        console.log(data.data);
        setLoading(false);
        const userInfo = data.data.response.user;
        const user_token = data.data.response.token;
        const userStatus = data.data.validUser;
        dispatch(set_userData(userInfo));
        dispatch(setToken(user_token));
        dispatch(setLogInStatus(userStatus));
        navigate("/home/overview", { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data.errorMessage);
        if (err.response.status === 401) {
          setBackendMessage(err.response.data.errorMessage);
        }
      });
  };

  // login with github

  useEffect(() => {
    const params = window.location.search;
    const urlParams = new URLSearchParams(params);
    const code_by_git = urlParams.get("code");

    if (code_by_git) {
      setLoadingGit(true);
      loginWithGitHubApi(code_by_git)
        .then((data) => {
          console.log(data);
          setAccessToken(data.data.token);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  function loginWithGithub() {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" +
        import.meta.env.VITE_CLIENT_ID
    );
  }
  useEffect(() => {
    if (accessToken) {
      console.log(accessToken);
      getGitHubUserData(accessToken).then((result) => {
        setLoadingGit(false);
        console.log(result);
        dispatch(set_userData(result.data.userInfo));
        dispatch(setToken(result.data.token));
        dispatch(setLogInStatus(result.data.validUser));
        navigate("/home/overview", { replace: true });
      });
    }
  }, [accessToken]);const { theme } = useSelector((store) => store.userLogInDetails);


  return (
    <div className="Login_container" data-theme={theme}>
      <div className="LoginForm_container">
        {loading && (
          <div className="loader">
            <img src={loadingImage} alt="" />
          </div>
        )}

        {loadingGit && (
          <div className="loader">
            <img src={loadingImage} alt="" />
          </div>
        )}
        <h3 className="LoginText">Confirm access</h3>

        <div
          className={`signedInWith_Container ${loadingGit ? "loadingGit" : ""}`}
          onClick={loginWithGithub}
        >
          <h4> login with github</h4>
          <i className="fa-brands fa-github" id="git_icons"></i>
        </div>
        <h2>Or</h2>
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
          <form action="" onSubmit={handleLoginForm}>
            <div className="inputs">
              <label htmlFor="email"> Email</label>
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="on"
                onChange={checkEmailOnChange}
                className={`${checkValidEmail === true ? "checked" : ""}`}
              />
            </div>
            <div className="inputs">
              <label htmlFor="email"> Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
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
              <button className="btn_submit">submit</button>
            </div>
          </form>
        </div>

        <div className="tips">
          <Link to={"/reset_pass"}>
            <p className="blueText prompts">Forgotten password ?</p>
          </Link>
          <Link to={"/create_acc"}>
            <p className="blueText prompts">Don't have an account ?</p>
          </Link>

          <div className="tipsDesc promptDec">
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

export default LoginPage;
