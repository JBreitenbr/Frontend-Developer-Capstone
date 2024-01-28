import resto1 from "../assets/resto1.jpg";
import resto2 from "../assets/resto2.jpg";
const About = () => {
  return (
    <section>
      <article>
        <h2 style={{marginTop:"5rem",marginBottom:"0rem",padding:"0px",fontSize:"2.1rem",textAlign:"center"}}>About Us</h2>
        <div style={{padding:"1rem",fontSize:"0.6rem"}}>
            <p style={{fontSize:"1.1rem"}}>
              Based in San Francisco, Little Lemon is a family owned
              Mediterranean restaurant, focused on traditional recipes served with a
              modern twist.
            </p>        <div style={{display:"flex",justifyContent:"center"}} ><figure className="figure">
              <img style={{height:"180px"}}
                src={resto1}
                alt="nouvelle cuisine"
              />
              <figcaption className="figure-caption" style={{fontSize:"0.9rem"}}>
                Fine Cuisine
              </figcaption>
            </figure></div>
            <p style={{fontSize:"1.1rem"}}>
              The chefs draw inspiration from Italian, Greek, and Turkish, Spanish, French, Moroccan and Lebanese culture and have a menu that they rotate seasonally.
            </p>

            <p style={{fontSize:"1.1rem"}}>
              The restaurant has a rustic and relaxed atmosphere with moderate
              prices, making it a popular place for a meal any time of the day.
            </p>
           <div style={{display:"flex"}}><p style={{fontSize:"1.1rem"}}>
              Little Lemon is owned by two Italian brothers, Mario and Umberto, who moved to the United States to pursue their shared dream of owning a restaurant.To craft the menu, Mario relies on family recipes and his experience
              as a chef in Italy.
            </p>
            <figure className="figure">
              <img style={{height:"180px"}}
                src={resto2}
                alt="men at work"
              />
              <figcaption className="figure-caption" style={{fontSize:"0.9rem"}}>
                Men at Work
              </figcaption>
            </figure></div>
            <p style={{fontSize:"1.1rem"}}>
              Umberto does all the marketing for the restaurant and led the effort to
              expand the menu beyond classic Italian to incorporate additional
              cuisines from the mediterranean region.
            </p>

          </div>
      </article>
    </section>
  );
};

export default About;