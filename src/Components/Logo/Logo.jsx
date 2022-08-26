import React from 'react'
import './Logo.scss'

function Logo() {
  return (
    <div className="logoContainer">
      <a href="#home">
        <img src='assets/logo.png'className='logo' />
      </a>
    </div>
  )
}

export default Logo