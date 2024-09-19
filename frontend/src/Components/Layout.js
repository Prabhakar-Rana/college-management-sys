import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'  

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default Layout;