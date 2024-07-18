import React from 'react'
import img1food from '../../src/assets/food1.jpg.jpg'
import img2food from '../../src/assets/food2.jpg.jpg'
import img3food from '../../src/assets/food3.jpg.jpg'
const ExploreFood = () => {
  return (
    <div className='container'>
      <div className='explore-p'>
        <h1>Explore Our Foods</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Etiam et purus a odio finibus bibendum in sit amet leo. Mauris 
           feugiat erat tellus. Far far away, behind the word mountains,
            far from the countries Vokalia and Consonantia, there live the 
            blind texts. Separated they live in Bookmarksgrove.</p>
      </div>

      <div className='explore-foods'>
      <div className='explore-food'>
        <img src={img1food}/>
        <h2>Rainbow Vegetable Sandwich</h2>
        <h3>Time: 15 - 20 Minutes | Serves: 1</h3>
        <h4>$10.50</h4>
        
        <button>Order Now</button>
      </div>
      <div className='explore-food'>
        <img src={img2food}/>
        <h2>Vegetarian Burger</h2>
        <h3>Time: 30 - 45 Minutes | Serves: 1</h3>
        <h4>$9.20</h4>
        
        <button>Order Now</button>
      </div>
      <div className='explore-food'>
        <img src={img3food}/>
        <h2>Raspberry Stuffed French Toast</h2>
        <h3>Time: 10 - 15 Minutes | Serves: 1</h3>
         <h4>$12.50</h4>
        
        <button>Order Now</button>
      </div>
      </div>
    </div>
  )
}

export default ExploreFood
