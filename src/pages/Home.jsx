import adana from '../assets/adana.jpg';
import ratatouille from '../assets/ratatouille.jpg';
import restaurant_view from '../assets/restaurant_view.jpg';
export const Home = () => {
  return (
   <><section>
    <article id="hero" style={{backgroundImage:`url("https://www.dropbox.com/scl/fi/idhyp6fcva0g9k01xyzjb/lebanese_mezze.jpg?rlkey=v8bnrxjzyuvltop0tc7nw4mjd&raw=1")` }}>
      <h1 className="heading_shadow">SPECIAL OFFER</h1>
      <p>
        Lebanese Mezze
      </p>
      <a href="#" className="cta"> Book now </a>
    </article>
  </section>
    
  <section>
    <article>
      <h2>Our New Menu</h2>
       <img src={adana}/>
      <p>
        We offer a variety of Mediterranean food: Italian, Turkish, Greek, Spanish, French, Moroccan and Lebanese.
      </p>
    </article>
    <article>
      <h2>Book a table</h2>
      <img src={ratatouille}/>
      <p>
        We are well-attended, so a previous reservation is recommended.
      </p>
    </article>
    <article>
      <h2>Opening Hours</h2>
       <img src={restaurant_view}/>
      <p>
        The Little Lemon Restaurant is open 7 days a week, except for public holidays.
      </p>
      <ul>
        <li>Mon - Fri: 2pm - 10pm</li>
        <li>Sat: 2pm - 11pm</li>
        <li>Sun: 2pm - 9pm</li>
      </ul>
    </article>
  </section></>
  );
};