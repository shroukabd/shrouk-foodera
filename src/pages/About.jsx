import React from 'react'
import NumberCounter from 'number-counter';
import img from '../assets/1.png'
import { FaAngleDoubleRight } from "react-icons/fa";
import img2 from "../assets/2.png"
import { FaCaretRight } from "react-icons/fa";

const About = () => {
  return (
    <div className='about'>
        <div className="about-counter">
           <div>
           <NumberCounter start={100} end={1287} delay={5} postFix="+" className='number'>
              
              </NumberCounter>
              <h6>SAVINGS</h6>
           </div>
           <div>
            <NumberCounter start={100} end={5786} delay={5} postFix="+" className='number'>
            </NumberCounter>
            <h6>PHOTOS</h6>
            </div>
            <div>
            <NumberCounter start={270} end={5786} delay={5} postFix="+" className='number'>
            </NumberCounter>
            <h6>ROCKETS</h6>
            </div>
            <div>
            <NumberCounter start={650} end={7110} delay={5} postFix="+" className='number'>
            </NumberCounter>
            <h6>GLOBES</h6>
            </div>
        </div>
       
        <div className='about-nun'>
       <div className="about-left">
        <img src={img}/>
       </div>
       <div className="about-right">
        <h1>We pride ourselves on making real food from 
            the best ingredients.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Etiam et purus a odio finibus bibendum in 
                 sit amet leo. Mauris feugiat erat tellus.</p>
                 <button>Lern More</button>
       </div>
       </div>
        <div className='about-big container'>
      
       <div className='about-down'>
        <h1>We make everything by hand with the best
             possible ingredients.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam et purus a odio finibus bibendum in sit amet leo. Mauris 
            feugiat erat tellus.Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live
             the blind texts.</p>
             <div className='p-icon'>
              
             <FaAngleDoubleRight className='icon'/>
                <p>Etiam sed dolor ac diam volutpat.</p> 
             </div>
             <div className='p-icon'>
             <FaAngleDoubleRight className='icon'/>
                <p>Erat volutpat aliquet imperdiet.</p>
               
             </div>
             <div className='p-icon'>
             <FaAngleDoubleRight className='icon'/>
                <p>purus a odio finibus bibendum.</p>
                
             </div>
             <button>Lern More</button>
            </div>
            <div className="about-up">
            <img src={img2}/>
         </div>
       </div>

       <div className='about-dessert'>
       <div className="dessert-top">
         <h1>When a man's stomach is full it makes no
            difference whether he is rich or poor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam et purus a odio
             finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
             <div className='watch-our'>
               <FaCaretRight className='watch-icon'/>
               <p>watch Our Story</p>
             </div>
       </div>
         <div className="dessert-down"></div>
       </div>
    </div>
  )
}

export default About
