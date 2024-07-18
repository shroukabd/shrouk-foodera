import React from 'react'
import './header.css'
import { FaShoppingBasket } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";



const Header = () => {
  return (
    <header className='container'>
      <div className="header-left">
        <h1>Good food choices are good investments.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Etiam et purus a odio
              finibus bibendum amet leo.</p>
            <div>
                <div className='order-now'>
                <button>Order Now</button>
                < FaShoppingBasket/>
                </div>
             <div className='lern-more'>
             <button>Lern More</button>
             <FaChevronRight/>
             </div>
           
            </div>
      </div>
      <div className="header-right"></div>
    </header>
  )
}

export default Header
