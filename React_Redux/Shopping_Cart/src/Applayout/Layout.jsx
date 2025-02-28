import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Navbar';
const Layout = () => {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet /> {/* Renders the child routes here */}
      </main>
    </>
  )
}

export default Layout