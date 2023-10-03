import React, { useEffect, useState } from "react";
import "../index.css";
import "github-markdown-css"
import { Link, Outlet } from "react-router-dom";
import HeaderReusable from "../components/HeaderReusable";

function Home_page() {


  return (
    <section className="accountPage" data-theme={"dark"}>
      <HeaderReusable />
      <Outlet/>
    </section>
  );
}

export default Home_page;
