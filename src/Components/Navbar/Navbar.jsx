import './Navbar.scss'
import logo from './logo.png'
import NavLinks from '../NavLinks/NavLinks'

function Navbar() {
  return (
    <div className="navContainer">
      <div className="logoContainer">
        <a href="#home">
          <img src={logo} className='logo'/>
        </a>
      </div>
      <NavLinks />
    </div>
  )
}

export default Navbar