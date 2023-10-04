import React, { useState } from "react";
import HeaderReusable from "../components/HeaderReusable";
import lightThemeImg from "../assets/light_preview.svg";
import darkThemeImg from "../assets/dark_preview.svg";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../slice/userInfoSlice";
function SettingsPage() {
  const { theme } = useSelector(
    (store) => store.userLogInDetails
  );
  const dispatch= useDispatch()
  const clickToChangeThem=(selectedTheme)=>{
dispatch(setTheme(selectedTheme))
  }
  
 
  return (
    <section className="settings" data-theme={theme}>


      <section className="settingContainer">
        <h1 className="headings">change your theme</h1>

        <div className="availableThemes">
          <div className={`themeImage ${theme=="light"?"selectedTheme":""}`} onClick={()=>clickToChangeThem("light")}>
            <img src={lightThemeImg} alt="" />
          </div>
          <div className={`themeImage ${theme=="dark"?"selectedTheme":""}`} onClick={()=>clickToChangeThem("dark")}>
            <img src={darkThemeImg} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default SettingsPage;
