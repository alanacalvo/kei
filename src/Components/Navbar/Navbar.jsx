import './Navbar.scss'
import Logo from '../Logo/Logo'
import NavLinks from '../NavLinks/NavLinks'

function Navbar() {
  return (
    <div className="navContainer">
      <Logo />
      <NavLinks />
    </div>
  )
}

export default Navbar