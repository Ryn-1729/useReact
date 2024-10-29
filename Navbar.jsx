import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/services'><li>Services</li></NavLink>
            <NavLink to='/blog'><li>Blog</li></NavLink>
            <NavLink to='/help'><li>Help</li></NavLink>
            <NavLink to='/signup'><li>Sign Up</li></NavLink>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
