import './Footer.scss';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footerContainer">
      <div className="logoContainer">
        <a href="#home">
          <img src="assets/kei-logo-white.png" />
        </a>
      </div>
      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/gallery">Gallery</Link> */}
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Footer;
