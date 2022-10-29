import React from "react";
import { useEffect } from "react";

const NavbarDropMenu = ({ showDropMenu }) => {
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

  return <div className='navbar-drop-menu'></div>;
};

export default NavbarDropMenu;
