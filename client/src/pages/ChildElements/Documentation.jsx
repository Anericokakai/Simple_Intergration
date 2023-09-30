import React from 'react'
import ReactMarkdown from "react-markdown"
import "github-markdown-css"
import {prism as SyntaxHighlighter} from "react-syntax-highlighter"
function Documentation() {

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
        <ReactMarkdown>{markedContent}</ReactMarkdown>


  </article>
  )
}

export default Documentation