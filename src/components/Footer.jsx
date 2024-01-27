import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/Footer.css';
import logo_footer2 from '../assets/logo_footer2.png';
const contacts = [
  { icon: faLocationDot, info: "999 Haight-Ashbury Street, San Francisco, CA 94117" },
  { icon: faPhone, info: "+1 (415) 345-6789" },
  { icon: faEnvelope, info: "info@littlelemon.com" },
];

const Footer = () => {
  return (
    <footer className="site-footer">
<div className="site-footer-contact">
        <h3>Contact us</h3>
        <address>
          {contacts.map((contact, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          ))}
          <p style={{fontSize:"1.1rem"}}>&copy; Little Lemon 2024</p>
        </address></div><div id="footer-logo-div"><img
        className="site-footer-logo"
        src={logo_footer2}
        alt="Little Lemon"
      /></div> 
    </footer>
  );
};

export default Footer;

