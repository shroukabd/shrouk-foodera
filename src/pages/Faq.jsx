import React from 'react'
const Faq = () => {
  return (
    <div>
      <h1 className='title container'>Frequently Asked Questions</h1>
      <div className='faq-right'>
      <div className="faq-right-up">
        <h2>~ Is Foodera Bread really baked fresh each day?</h2>
        <p>Far far away, behind the word mountains, far from the countries 
          Vokalia and Consonantia, there live the blind texts. 
          Separated they live in Bookmarksgrove right at the coast of the 
          Semantics, a large language.</p>
      </div>
      <div className="faq-right-down">
        <h2>~ Can I order your products online?</h2>
        <p>Far far away, behind the word mountains, far from the countries 
          Vokalia and Consonantia, there live the blind texts. Separated 
          they live in Bookmarksgrove right at the coast of the Semantics, 
          a large language.</p>
      </div>
      </div>
      <div className='faq-left'>
      <div className="faq-left-up">
        <h2>~ Do you bake breads containing animal fats or products?</h2>
      <p>Far far away, behind the word mountains, far from the countries
         Vokalia and Consonantia, there live the blind texts. Separated they 
         live in Bookmarksgrove right at the coast of the Semantics, a large
          language.</p>
      </div>
      <div className="faq-left-down">
        <h2>~ When are you opening a shop near me?</h2>
        <p>Far far away, behind the word mountains, far from the countries 
          Vokalia and Consonantia, there live the blind texts. Separated they
           live in Bookmarksgrove right at the coast of the Semantics, 
           a large language.</p>
      </div>
      </div>

      <div className='end-faq'>
            <div className="background-faq">
              <h2>Baked Fresh daily by bakers with passion.</h2>
              <button>Lern More</button>
            </div>
            </div>

      <div className='connect container'>
        <h1>Hurry up! Subscribe our newsletter
           and get 25% Off</h1>
           <p>Limited time offer for this month. No credit card required.</p>
           <div>
            <input type="text" placeholder='Email Address Here' />
            <button>Subscribe</button>
           </div>
          </div>

          
    </div>
     
  )
}

export default Faq
