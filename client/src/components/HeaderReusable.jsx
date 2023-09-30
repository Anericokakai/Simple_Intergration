import React from "react";
import { Link } from "react-router-dom";
import { ActiveLink } from "../helpers/CustomsHelper";
function HeaderReusable() {


  return (
    <header className="accountHeader">
      <div className="upper_Header">
        <div className="upperStart">
          <button className="Icon_btn">
            <i className="fa-solid fa-bars" id="iconFade"></i>
          </button>
          <button className="dash_btn"> <h5>Anerico kakai</h5> </button>
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

<ActiveLink to={"/home/overview"} >
<button className="dash_btn_lowerHeader"> <h5>Overview</h5></button>
</ActiveLink>
<ActiveLink to={"/home/api_key"}>
<button className="dash_btn_lowerHeader"> <h5>api_key</h5></button>
</ActiveLink>
<ActiveLink to={"/home/docs"}>
<button className="dash_btn_lowerHeader"> <h5>documentation</h5></button>
</ActiveLink>
       
      </nav>
       {/* <button className="btn_default"> login</button>
        <Link href="http://" className="link_default">
          {" "}
          home page
        </Link> */}
    </header>
  );
}

export default HeaderReusable;
