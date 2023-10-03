import React, { useEffect, useState } from "react";
import "../index.css";
import "github-markdown-css"
import { Link, Outlet } from "react-router-dom";
import HeaderReusable from "../components/HeaderReusable";
import { setDecodedDocs } from "../slice/DocumentationSlice";
import { fetchAvailableApis, fetchDocumentation } from "../Thunks/FecthApis";
import { useDispatch, useSelector } from "react-redux";
function Home_page() {


  return (
    <section className="accountPage" data-theme={"dark"}>
      <HeaderReusable />
      <Outlet/>
    </section>
  );
}

export default Home_page;
