import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useState } from "react";
import loadingImg from "../../assets/load2.gif";
import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import HeaderReusable from "../../components/HeaderReusable";
import { ActiveLink } from "../../helpers/CustomsHelper";
function Documentation() {

 
  const {docs,loadingDocs,docsError,decodedDocs}=useSelector(store=>store.docsSlice)
  const { apis, loading, apiError } = useSelector((store) => store.ApisSlice);
  console.log(apis)
  return (
    <>
  <header>
{
  apis&&apis?.result?.map(singleLink=>{
  return <ActiveLink to={singleLink.link} className=""> {singleLink.api_name}</ActiveLink>
  })
}
  </header>
    <div className="documentContainer">
    <Outlet></Outlet>
     
    </div>
    </>
  );
}

export default Documentation;
