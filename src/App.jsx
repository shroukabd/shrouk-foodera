
import './App.css'
import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ExploreFood from './pages/ExploreFood'
import Reviews from './pages/Reviews'
import Faq from './pages/Faq'
import Footer from './component/footer/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/about' element = {<About/>}/>
       <Route path='/exploreFood' element = {<ExploreFood/>}/>
       <Route path='/reviews' element = {<Reviews/>}/>
       <Route path='/Faq' element = {<Faq/>}/>
   </Routes>
   <Footer/>
    </BrowserRouter>
    
  )
}

export default App



