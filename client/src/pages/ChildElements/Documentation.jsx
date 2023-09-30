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
    const markedContent=`
# React mark down
## help me improve
>name is the essential p 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
\`\`\`java
public static void main(String[] args){

}
\`\`\`
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
`

// dangerouslySetInnerHTML={{__html:htmlContent}}

  return (
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
  )
}

export default Documentation