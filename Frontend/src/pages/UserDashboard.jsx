import React from 'react'
import Sidebar from '../components/Sidebar'
import {Route,Routes,useNavigate} from "react-router-dom"
import { DarkModeProvider } from '../components/DarkModeContext'
import { dashItem } from '../components/export'


const UserDashboard = () => {
  return (
   <DarkModeProvider>
<div className='flex  gap-10'>
      <Sidebar />  
       <Routes>
        {dashItem.map((route,index) => (
          <Route key={index} path={route.path} Component={route.component} />
        ))}
      </Routes> 
    </div>

   </DarkModeProvider>
  )
}

export default UserDashboard
