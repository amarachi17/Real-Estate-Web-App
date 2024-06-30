import React from 'react'
import Sidebar from '../components/Sidebar'
import { DarkModeProvider } from '../components/DarkModeContext'

const UserDashboard = () => {
  return (
   <DarkModeProvider>
    <Sidebar/>
   </DarkModeProvider>
  )
}

export default UserDashboard
