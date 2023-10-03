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
import { getReadmeFile } from "../../helpers/LoginsHelper";
function ReusableDocs() {
  
  const[loading,setLoading]=useState()
  const [documentation,setDocumentation]=useState()
const [dataLoaded,setDataLoaded]=useState(false)
  const {page}=useParams()
 


  useEffect(()=>{

   if(!dataLoaded){
    setLoading(true)
    getReadmeFile(page).then(data=>{
      const decodedFile=atob(data?.content)
      setLoading(false)
      setDataLoaded(true)
      setDocumentation(decodedFile)
    }).catch(error=>{
      console.log(error)
    })
    
   }

  },[page])
  return (
    <div>
      <article className="markdown-body">
        {loading ? (
          <div>
            <h1>loading data</h1>
            <div className="loader">
              <img src={loadingImg} alt="" />
            </div>
          </div>
        ) : (
          <ReactMarkdown
            components={{
              code: ({ node, inline, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    style={atomDark}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {documentation}
          </ReactMarkdown>
        )}
      </article>
    </div>
  );
}

export default ReusableDocs;
