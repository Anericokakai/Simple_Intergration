import React from 'react'
import {marked} from "marked"
import "github-markdown-css"
function Documentation() {

    const markedContent=`
    # React + Vite
>name is the esential p 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
`

// dangerouslySetInnerHTML={{__html:htmlContent}}
const htmlContent=marked(markedContent)
  return (
    <article className='markdown-body' >

<h1>Unicorns</h1>

  </article>
  )
}

export default Documentation