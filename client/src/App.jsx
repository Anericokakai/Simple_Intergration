

import './App.css'
import { useEffect, useState } from 'react'
import useLocalStorage from "use-local-storage"
import {useRoutes} from 'react-router-dom'
import user_routes from './Routes/All_routes'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAvailableApis, fetchDocumentation } from './Thunks/FecthApis'
import { setDecodedDocs } from './slice/DocumentationSlice'
function App() {
 
  




  const {docs,loadingDocs,docsError,decodedDocs}=useSelector(store=>store.docsSlice)

  const[dataIsFetched,setDataIsFetched]=useState(false)
  const dispatch=useDispatch()

 

  useEffect(()=>{
 

      dispatch(fetchAvailableApis())
      dispatch(fetchDocumentation())
     
    


  },[])
  
 


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
