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
        <div><h2 id="head1">Little Lemon</h2>
        <h3 id="head2">San Francisco</h3>
        <p className="resto-desc" style={{marginTop:"1rem"}}>We are a family owned Mediterranean </p> <p className="resto-desc">restaurant, focused on traditional recipes</p><p className="resto-desc" style={{marginBottom:"1rem"}}>served with a modern twist.</p>
        <Link to="/Frontend-Developer-Capstone/reservations">
          <button className="btn-lemon">Reserve a table</button>
        </Link></div>
<div><img src={restaurant_view} alt="Banner Image" className='banner-img' /></div>
          </article>
      {w<768?(<div id="check-menu-wrapper"><Link to="/Frontend-Developer-Capstone/menu"><button id="check-menu" className="btn-lemon">Check out our menu!</button></Link></div>):(<><h2 style={{textAlign:"center",padding:"0px",margin:"0px"}}>This Week's Specials!</h2><Specials/><Reviews/></>)}
    </section><Footer/></>
  )
}

export default Home;