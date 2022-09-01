import './NavLinks.scss'
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <div className="navLinks">
      <Link to={'/'}>
        <p>Home</p>
      </Link>
      <Link to={'/about'}>
        <p>About</p>
      </Link>
      <Link to={'/gallery'}>
        <p>Gallery</p>
      </Link>
      <Link to={'/contact'}>
        <p>Contact</p>
      </Link>
      <Link to={'/scheduleestimate'}>
        <p>Schedule Estimate</p>
      </Link>
    </div>
  )
}

export default NavLinks