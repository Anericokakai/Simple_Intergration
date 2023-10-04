import React from "react";
import { ActiveLink } from "../helpers/CustomsHelper";

function Settings({ show,showValue }) {
  const hideNav = (e) => {
    show(false);
  };
  return (
    <section className={`SettingNav ${showValue==false?"hideSettingNav":"showSettingNav"}`}>
      <nav className="navigationSettings_inner">

        <div className={`nav ${showValue==false ?"hideSettings":"showSettings"}`}>
          <button className="Icon_btn hideNav" onClick={hideNav}>
            <i className="fa-solid fa-x" id="iconFade"></i>
          </button>
          <ul className="settingUl">
            <li className="settingTo">

              <ActiveLink to={"/home/settings"}>appearance</ActiveLink>
            </li>
            <li className="settingTo">profile</li>
            <li className="settingTo">issues</li>
            <li className="settingTo">Contributions</li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Settings;
