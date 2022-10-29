import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);

  const handleDropMenu = () => {
    setShowDropMenu(!showDropMenu);
  };

  useEffect(() => {
    const navbarEl = document.querySelector(".navbar");
    const dropMenuEl = document.querySelector(".navbar-drop-menu");
    const vh = window.outerHeight;
    let dropMenuHeight = vh - navbarEl.clientHeight;
    if (showDropMenu) {
      dropMenuEl.style.height = `${dropMenuHeight}px`;
    } else {
      dropMenuEl.style.height = `0px`;
    }
  }, [showDropMenu]);

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='nav-logo'>
          <h3>the elder scrolls</h3>
        </div>
        <div className='nav-links'>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/gallery'>GALLERY</Link>
        </div>
        <div className='nav-icon' onClick={handleDropMenu}>
          <div className='icon-bars'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
        </div>
      </div>
      <div className='navbar-drop-menu'></div>
    </div>
  );
};

export default Navbar;
