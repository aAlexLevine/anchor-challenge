import React from 'react';
import './Header.css'
import Logo from '../images/anchor-logo-header.png'
import Thumbnail from '../images/prof thumb.jpg'

const Header = () => (
  <div className="header-banner">
    <img
      className="logo" 
      src={Logo}
      alt="Anchor logo" 
      height="33" 
      width="132"/>

    <a className="user-container" href="https://aalexlevine.github.io/personal-site/" target="_blank" rel="noopener noreferrer">
      <img className="user" src={Thumbnail} alt="-" height="25px" width="25px"/>
      <p className="msg">Hello!</p>
    </a>
  </div>
)

export default Header;