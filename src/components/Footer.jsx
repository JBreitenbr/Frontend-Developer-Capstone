import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
const Footer = () => {
  return (
<footer className="panel-footer">
        <section id="hours">
          <span>Hours:</span>
          Sun-Thurs: 11:15am - 10:00pm
          Fri: 11:15am - 2:30pm
          Saturday Closed
          
        </section>
      <section id="address">
          <span>Address:</span>
          7105 Reisterstown Road
          Baltimore, MD 21215
          <p>* Delivery area within 3-4 miles, with minimum order of $20 plus $3 charge for all deliveries.</p>
        </section>
        <section id="testimonials">
          <p>"The best restaurant I've been to! And that's saying a lot, since I've been to many!"</p>
          <p>"Amazing food! Great service! Couldn't ask for more! I'll be back again and again!"</p>
        </section>
      
    { /* <div className="text-center">&copy; Julia Breitenbruch 2024</div>*/}
    
  </footer>)
}

export default Footer;