import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <section className='logo'><img src="./jalo.png" alt="" /></section>
      <section className="navbar">
        <Link to={"/"} >Home</Link>
        <Link to={"/about"} >About</Link>
      </section>
    </div>
  )
}

export default Navbar