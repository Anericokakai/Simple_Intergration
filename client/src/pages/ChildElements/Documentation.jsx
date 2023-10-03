import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useState } from "react";
import loadingImg from "../../assets/load2.gif";
import { useSelector } from "react-redux";
function Documentation() {

 
  const {docs,loadingDocs,docsError,decodedDocs}=useSelector(store=>store.docsSlice)

  return (
    <div className="documentContainer">
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

export default Documentation;
