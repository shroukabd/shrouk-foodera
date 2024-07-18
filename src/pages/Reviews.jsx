import React from 'react'
import imgclint1 from '../assets/clint1.jpg.jpg'
import imgclint2 from '../assets/clint2.jpg.jpg'
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Reviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className='testimonials'>
        <h2>Testimonial</h2>

          <Slider {...settings}>
         <div className="testimonial container">
          <img src={imgclint1}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Corporis cumque iste repellat itaque velit cum dolores praesentium 
             impedit tempora rem aliquid sit, 
            accusantium qui ad iure error 
            veritatis debitis nesciunt.</p>
            <div>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
              </div>
            <h3>Simap Dave-Web Designer</h3>
         </div>
         <div className="testimonial container">
          <img src={imgclint2}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Corporis cumque iste repellat itaque velit cum dolores praesentium 
             impedit tempora rem aliquid sit, 
            accusantium qui ad iure error 
            veritatis debitis nesciunt.</p>
              <div>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
              </div>
            <h3>Simap Dave-Web Designer</h3>
         </div>
         <div className="testimonial container">
          <img src={imgclint1}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Corporis cumque iste repellat itaque velit cum dolores praesentium 
             impedit tempora rem aliquid sit, 
            accusantium qui ad iure error 
            veritatis debitis nesciunt.</p>
            <div>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
              </div>
            <h3>Simap Dave-Web Designer</h3>
         </div>
         </Slider>
         </div>
     
    </div>
  )
}

export default Reviews
