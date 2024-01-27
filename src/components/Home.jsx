import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './Footer';
import restaurant_view from '../assets/restaurant_view.jpg';
import Bruschetta from '../assets/Bruschetta.jpg';
import greekSalad from '../assets/greekSalad.jpg';
import lemonDessert from '../assets/lemonDessert.jpg';
import testi1 from '../assets/testi1.jpg';
import testi2 from '../assets/testi2.jpg';
import testi3 from '../assets/testi3.jpg';

const Home = () => {
  return (<>
    <section>
      <article className="Banner">
        <h2>Little Lemon</h2>
        <h3>San Francisco</h3>
        
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking">
          <button aria-label='On Click'>Reserve a table</button>
        </Link>
<img src={restaurant_view} alt="Banner Img" className='banner-img' /></article>
    <article>
      <h2 id="specials-title">This Week's Specials!</h2>
<div className="specials">
<div className="specials-div"><img src={Bruschetta} alt="Bruschetta" className='specials-img'/><p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p></div>
<div className="specials-div"><img src={greekSalad} alt="Greek Salad" className='specials-img'/><p>The famous greek salad of crispy lettuce, peppers, olives and feta, garnished with garlic and rosemary.</p>
</div>
  <div className="specials-div">
      <img src={lemonDessert} alt="Lemon Dessert" className='specials-img'/>
    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
    </p>
  </div>
</div>
    </article>
      <article><div className="testis"><div className="test-div">
       <div className="test-wrapper"> <img src={testi1} alt="Testimonial 1" className='test-pic'/><h4>&nbsp;&nbsp;Laura</h4></div>
  <p className="test-para"><i className="fa fa-quote-left"></i>&nbsp;&nbsp;The best restaurant I've been to! And that's saying a lot, since I've been to many!&nbsp;&nbsp;<i className="fa fa-quote-right"></i></p>
      </div>
        <div className="test-div">
       <div className="test-wrapper"> <img src={testi2} alt="Testimonial 2" className='test-pic'/><h4>&nbsp;&nbsp;Matt</h4></div>
  <p className="test-para"><i className="fa fa-quote-left"></i>&nbsp;&nbsp;Amazing food and service! Cozy place! I'll be back again and again!
        &nbsp;&nbsp;<i className="fa fa-quote-right"></i></p>
      </div>
        <div className="test-div">
        <div className="test-wrapper"> <img src={testi3} alt="Testimonial 3" className='test-pic'/><h4>&nbsp;Janet</h4></div>
  <p className="test-para"><i className="fa fa-quote-left"></i>&nbsp;&nbsp;Great experience! Not only is the food impeccable, but also the service is top-notch.&nbsp;&nbsp;<i className="fa fa-quote-right"></i></p>
      </div></div>
      </article>
    </section><Footer/></>
  )
}

export default Home;