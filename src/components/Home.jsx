import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import restaurant_view from '../assets/restaurant_view.jpg';
import Bruschetta from '../assets/Bruschetta.jpg';
import greekSalad from '../assets/greekSalad.jpg';
import lemonDessert from '../assets/lemonDessert.jpg';

const Home = () => {
  return (
    <section>
      <article className="Banner">
      {/* Banner text */}
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        
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
    </section>
  )
}

export default Home;