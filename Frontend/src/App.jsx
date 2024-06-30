import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import Header from './components/Header'
import Footer from "./components/Footer"
import UserDashboard from './pages/UserDashboard'
import { DarkModeProvider } from './components/DarkModeContext'

// import SignUp from './sections/signup'


const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dash" element={<UserDashboard/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App