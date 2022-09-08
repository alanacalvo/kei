import './Footer.scss'
import Logo from '../Logo/Logo'

function Footer() {
  return (
    <div className='footerContainer'>
      <div className="navLinks">
        <a href="/home">Home</a>
        <a href="/About">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="logoContainer">
        <Logo />
      </div>
    </div>
  )
}

export default Footer