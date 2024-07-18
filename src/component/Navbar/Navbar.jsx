import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-left">
        <img src={logo}/>
      </div>

         
        



      <div className="nav-middle">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/exploreFood'>Explore Food</Link></li>
            <li><Link to='/reviews'>Reviews</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        <button>1800 789 123</button>
      </div>

    </nav>
  )
}

export default Navbar
