import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './Footer';
import Specials from './Specials';
import Reviews from './Reviews';
import restaurant_view from '../assets/restaurant_view.jpg';
const Home = () => {
  let w=window.innerWidth;
  console.log(w);
  return (<>
    <section>
      <article className="banner">
        <h2 id="head1">Little Lemon</h2>
        <h3 id="head2">San Francisco</h3>
        <p className="resto-desc">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/Frontend-Developer-Capstone/reservations">
          <button className="btn-lemon">Reserve a table</button>
        </Link>
<img src={restaurant_view} alt="Banner Image" className='banner-img' /><Link to="/Frontend-Developer-Capstone/menu">
          
        </Link></article>
      {w<768?(<div id="check-menu-wrapper"><button id="check-menu" className="btn-lemon">Check out our menu!</button></div>):(<><h2 style={{textAlign:"center"}}>This Week's Specials!</h2><Specials/><Reviews/></>)}
    </section><Footer/></>
  )
}

export default Home;