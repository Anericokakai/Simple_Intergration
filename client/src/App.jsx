import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function App() {

 
useEffect(()=>{
const params=window.location.search
const urlParams= new URLSearchParams(params)
const code_by_git=urlParams.get("code")
console.log(code_by_git)

},[])



  function loginWithGithub(){
    window.location.assign("https://github.com/login/oauth/authorize?client_id="+import.meta.env.VITE_CLIENT_ID)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
<button onClick={loginWithGithub}>
  login with github
</button>

    </>
  )
}

export default App
