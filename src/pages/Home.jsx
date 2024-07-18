import React from 'react'
import Header from '../component/Header/Header'
import About from './About'
import ExploreFood from './ExploreFood'
import Reviews from './Reviews'
import Faq from './Faq'


const Home = () => {
  return (
    <div>
   <Header/>
   <About/>
   <ExploreFood/>
   <Reviews/>
   <Faq/>
    </div>
  )
}

export default Home
