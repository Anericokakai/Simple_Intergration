

import './App.css'
import { useEffect } from 'react'
import useLocalStorage from "use-local-storage"
import {useRoutes} from 'react-router-dom'
import user_routes from './Routes/All_routes'
function App() {



  const [theme,setTheme]=useLocalStorage("theme"?"dark":"light")
   
  const changeTheme=()=>{
   const  newTheme=theme==="light"?"dark":"light"
   setTheme(newTheme)
  }
// <i   className='fas fa-toggle-on'></i>
const routers=useRoutes(user_routes)
 
  return  routers

  
}

export default App
