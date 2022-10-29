import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarDropMenu from "./NavbarDropMenu";

const Navbar = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);

  const handleDropMenu = () => {
    setShowDropMenu(!showDropMenu);
  };

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
      <NavbarDropMenu showDropMenu={showDropMenu}></NavbarDropMenu>
    </div>
  );
};

export default Navbar;
