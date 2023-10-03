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
  const { docs, loadingDocs, docsError, decodedDocs } = useSelector(
    (store) => store.docsSlice
  );
  const { apis, loading, apiError } = useSelector((store) => store.ApisSlice);
  const {page}=useParams()
  console.log(page)


  useEffect(()=>{
    getReadmeFile().then(data=>{
      console.log(data)
    })

  },[])
  return (
    <div>
      <article className="markdown-body">
        {loadingDocs ? (
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
            {decodedDocs}
          </ReactMarkdown>
        )}
      </article>
    </div>
  );
}

export default ReusableDocs;
