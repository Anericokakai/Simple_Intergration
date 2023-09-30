import React, { useEffect } from 'react'
import ReactMarkdown from "react-markdown"
import "github-markdown-css"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
import { fetchReadme } from '../../helpers/FetchReadme';
import { useState } from 'react';
function Documentation() {
const[documentationData,setdocumentationData]=useState()
  useEffect(()=>{

    const token=import.meta.env.VITE_ACCESS_TOKEN
    fetchReadme(token).then(data=>{
      console.log(data.data)
      const decodedData= atob(data.data.content)
      setdocumentationData(decodedData)
    })
  },[])
  console.log(documentationData)

  return (
    <div className='documentContainer'>

   
    <article className='markdown-body'  >
    <ReactMarkdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} style={atomDark} {...props}>
                {String(children).replace(/\n$/, '')}
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


  </article>
  </div>
  )
}

export default Documentation