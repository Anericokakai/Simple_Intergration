import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ActiveLink } from "../helpers/CustomsHelper";
import { setDecodedDocs } from "../slice/DocumentationSlice";
import { fetchAvailableApis, fetchDocumentation } from "../Thunks/FecthApis";
function HeaderReusable() {
  const { user_information, LogInStatus, token } = useSelector(
    (store) => store.userLogInDetails
  );
 



  const navigate = useNavigate();
  // ! navigate to login function
  const NavigateToLogin = () => {
    navigate("/con_access");
  };
  return (
    <header className="accountHeader">
      <div className="upper_Header">
        <div className="upperStart">
          <button className="Icon_btn">
            <i className="fa-solid fa-bars" id="iconFade"></i>
          </button>
          {user_information?.name ? (
            <button className="dash_btn">
              <h5>{user_information?.name}</h5>{" "}
            </button>
          ) : (
            <button className="dash_btn" onClick={NavigateToLogin}>
              <h5>Login</h5>{" "}
            </button>
          )}
        </div>
        <div className="upperEnd">
          <button className="Icon_btn">
            <i className="fa-solid fa-magnifying-glass" id="iconFade"></i>
          </button>
          <button className="Icon_btn">
            <i className="fa-solid fa-gear" id="iconFade"></i>
          </button>
        </div>
      </div>
      <nav className="lowerHeader">
        {token !== "" && LogInStatus === true ? (
          <>
            <ActiveLink to={"/home/overview"}>
              <button className="dash_btn_lowerHeader">
                <h5>Overview</h5>
              </button>
            </ActiveLink>
            <ActiveLink to={"/home/api_key"}>
              <button className="dash_btn_lowerHeader">
                <h5>api_key</h5>
              </button>
            </ActiveLink>
            <ActiveLink to={"/home/docs"}>
              <button className="dash_btn_lowerHeader">
                <h5>documentation</h5>
              </button>
            </ActiveLink>
          </>
        ) : (
          <>
            <ActiveLink to={"/home/docs"}>
              <button className="dash_btn_lowerHeader">
                <h5>documentation</h5>
              </button>
            </ActiveLink>
            <ActiveLink to={"/con_access"}>
              <button className="dash_btn_lowerHeader">
                <h5>Log in</h5>
              </button>
            </ActiveLink>
          </>
        )}
      </nav>
      {/* <button className="btn_default"> login</button>
        <Link href="http://" className="link_default">
        
          home page
        </Link> */}
    </header>
  );
}

export default HeaderReusable;
