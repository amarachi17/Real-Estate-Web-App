import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import UserDashboard from './pages/UserDashboard'

import { DarkModeProvider } from './components/DarkModeContext'
import NavRoute from  './pages/NavRoute'
import SignUp from './container/SignUp'


// import SignUp from './sections/signup'


const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NavRoute/>}/>
        <Route path="/dash/*" element={<UserDashboard/>}/>
        <Route path="/signup/*" element={<SignUp/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App