import React from 'react'
import { navItem } from '../components/export'
import { Route, Routes } from 'react-router-dom'

const NavRoute = () => {
  return (
    <div>
      <Routes>
        {navItem.map((route,index) => (
          <Route key={index} path={route.path} Component={route.component} />
        ))}
      </Routes> 
    </div>
  )
}

export default NavRoute
