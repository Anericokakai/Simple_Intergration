import React, { useEffect, useState } from "react";
import "../index.css";
import "github-markdown-css";
import { Link, Outlet } from "react-router-dom";
import HeaderReusable from "../components/HeaderReusable";
import useLocalStorage from "use-local-storage";
import { useSelector } from "react-redux";
import Settings from "../components/Settings";

function Home_page() {
  const [show,setShow]=useState(false)
  const { theme } = useSelector((store) => store.userLogInDetails);


  console.log(theme);
  return (
    <section className="accountPage" data-theme={theme}>
      <HeaderReusable show={setShow}  />
      <Settings show={setShow} showValue={show}/>
      <Outlet />
    </section>
  );
}

export default Home_page;
