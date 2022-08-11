import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
    <h2 className="logo">
    <Link to="/">MyBlog</Link>
    </h2>
    <Link to="./Create"><button className="create">
        <span>+</span>
    </button></Link>
    
  </nav>
    </>
  )
}

export default Navbar