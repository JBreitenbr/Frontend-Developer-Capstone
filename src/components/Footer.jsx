import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/Footer.css';
import logo_footer from '../assets/logo_footer.png';
const contacts = [
  { icon: faLocationDot, info: "999 Haight-Ashbury Street, San Francisco, CA 94117" },
  { icon: faPhone, info: "+1 (415) 345-6789" },
  { icon: faEnvelope, info: "info@littlelemon.com" },
];

const Footer = () => {
  return (
    <footer>
      <div className="site-footer">

      <div className="site-footer-contact">
        <h3>Contact us</h3>
        <address>
          {contacts.map((contact, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          ))}
        </address>
      </div>
      <div className="site-footer-contact"><h3>Opening Hours</h3>
      <p>
        The Little Lemon Restaurant is open 7 days a week, except for public holidays.
      </p>
      <ul>
        <li>Mon - Fri: 2pm - 10pm</li>
        <li>Sat: 2pm - 11pm</li>
        <li>Sun: 2pm - 9pm</li>
      </ul></div></div>
         <div style={{display:"flex"}}><img
        className="site-footer-logo"
        src={logo_footer}
        alt="Little Lemon"
      /><div>&copy; Little Lemon</div></div>
    </footer>
  );
};

export default Footer;

