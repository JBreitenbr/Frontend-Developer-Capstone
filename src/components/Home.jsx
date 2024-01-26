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
    <article className="specials">
      <h2>This Week's Specials!</h2>

<img src={Bruschetta} alt="Bruschetta" className='specials-img'/>
<img src={greekSalad} alt="Greek Salad" className='specials-img'/>
      <img src={lemonDessert} alt="Lemon Dessert" className='specials-img'/>

    </article>
    </section>
  )
}

export default Home;