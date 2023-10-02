import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { fetchReadme } from "../../helpers/FetchReadme";
import { useState } from "react";
import loadingImg from "../../assets/load2.gif";
function Documentation() {
  const [documentationData, setDocumentationData] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    const token = import.meta.env.VITE_ACCESS_TOKEN;
    fetchReadme(token)
      .then((data) => {
        setLoading(false);

        const decodedData = atob(data.data.content);
        setDocumentationData(decodedData);
        console.log(decodedData);
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false)
      });
  }, []);
  console.log(loading);

  return (
    <div className="documentContainer">
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
            {documentationData}
          </ReactMarkdown>
        )}
      </article>
    </div>
  );
}

export default Documentation;
