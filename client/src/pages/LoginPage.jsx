import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
function LoginPage() {
  return (
    <div className="Login_container" data-theme={"dark"}>
      <div className="LoginForm_container">
        <h3 className="LoginText">Confirm access</h3>

        <div className="signedInWith_Container">
          <h4> login with github</h4>
          <i className="fa-brands fa-github" id="git_icons"></i>
        </div>
        <div className="Form">
          <form action="">
            <div className="inputs">
              <label htmlFor="email"> Email</label>
              <input type="email" id="email" name="email" autoComplete="on" />
            </div>
            <div className="inputs">
              <label htmlFor="email"> Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
              />
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

export default LoginPage;
