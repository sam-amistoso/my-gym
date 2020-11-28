import React, { useState } from 'react';
import {
  MobileMenu,
  NavbarLink,
  NavbarMenu,
  NavContainer,
  NavLogo,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const NavBar = ({ toggle }) => {
  const theme = {
    red: '#f9032f',
    dark1: '#000',
    white: '#fff',
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <NavContainer theme={theme}>
          <NavLogo to='/' theme={theme}>
            LUX
          </NavLogo>
          <MobileMenu onClick={toggle}>
            <FaBars />
          </MobileMenu>
          <NavbarMenu>
            <NavbarLink to='home' theme={theme}>
              Home
            </NavbarLink>
            <NavbarLink to='services' theme={theme}>
              Services
            </NavbarLink>
            <NavbarLink to='plans' theme={theme}>
              Plans
            </NavbarLink>
            <NavbarLink to='trainers' theme={theme}>
              Trainers
            </NavbarLink>
          </NavbarMenu>
        </NavContainer>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
