import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <header>
            <nav>
                <Link to="/" >HOME</Link>
                <Link to="/faqs" >FAQS</Link>
                <Link to="/about" >ABOUT</Link>
            </nav>
        </header>
        <main>
          <h1>Enrutado</h1>
            <Outlet />
        </main>
    </>
  )
}

export default Layout