import resto1 from "../assets/resto1.jpg";
import resto2 from "../assets/resto2.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <section>
      <article>
        <h1>About Us</h1>
        <div style={{padding:"2rem",fontSize:"0.6rem"}}>
            <p className="about-para">
              Based in Chicago, Illinois, Little Lemon is a family owned
              Mediterranean restaurant, focused on traditional recipes served with a
              modern twist.
            </p>
            <p className="about-para">
              The chefs draw inspiration from Italian, Greek, and Turkish culture
              and have a menu of 12-15 items that they rotate seasonally.
            </p>

            <p className="about-para">
              The restaurant has a rustic and relaxed atmosphere with moderate
              prices, making it a popular place for a meal any time of the day.
            </p>

            <p className="about-para">
              Little Lemon is owned by two Italian brothers, Mario and Adrian, who
              moved to the United States to pursue their shared dream of owning a
              restaurant.
            </p>

            <p className="about-para">
              To craft the menu, Mario relies on family recipes and his experience
              as a chef in Italy.
            </p>

            <p className="about-para">
              Adrian does all the marketing for the restaurant and led the effort to
              expand the menu beyond classic Italian to incorporate additional
              cuisines from the mediterranean region.
            </p>
            <figure className="figure">
              <img style={{height:"180px"}}
                src={resto2}
                alt="men at work"
              />
              <figcaption className="figure-caption">
                Little Lemon owners Mario and Adrian.
              </figcaption>
            </figure>
          </div>
      </article>
    </section>
  );
};

export default About;