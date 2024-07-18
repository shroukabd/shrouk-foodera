import React from 'react'
import './footer.css'
 import { Link } from 'react-router-dom'
 import { FaFacebookF } from "react-icons/fa6";
 import { FaTwitter } from "react-icons/fa";
 import { FaYoutube } from "react-icons/fa";
 import { FaInstagram } from "react-icons/fa";
 import { FaFacebookMessenger } from "react-icons/fa";
 import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="footer-up">
       <ul>
        <li><Link to='/'>Register</Link></li>
        <li><Link to='/'>Forum</Link></li>
        <li><Link to='/'>Afiliate</Link></li>
        <li><Link to='/'>FAQ</Link></li>
       </ul>
      </div>
      <div className="footer-middle">
         <FaFacebookF/>
         <FaTwitter/>
         <FaYoutube/>
         <FaInstagram/>
         <FaWhatsapp/>
         <FaFacebookMessenger/>
      </div>
      <div className="footer-down">
        <h3>© 2021. Foodera. All rights reserved.</h3>
      </div>
    </footer>
  )
}

export default Footer
