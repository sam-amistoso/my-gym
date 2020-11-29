import React from 'react';
import {
  MobileMenu,
  NavbarLink,
  NavbarMenu,
  NavContainer,
  NavLogo,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = ({ toggle }) => {
  const theme = {
    red: '#f9032f',
    dark1: '#000',
    white: '#fff',
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <NavContainer theme={theme}>
          <NavLogo to='/' theme={theme} onClick={toggleHome}>
            LUX
          </NavLogo>
          <MobileMenu onClick={toggle}>
            <FaBars />
          </MobileMenu>
          <NavbarMenu>
            <NavbarLink
              to='Home'
              theme={theme}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-60}
            >
              Home
            </NavbarLink>
            <NavbarLink
              to='Services'
              theme={theme}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-60}
            >
              Services
            </NavbarLink>
            <NavbarLink
              to='Plans'
              theme={theme}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-60}
            >
              Plans
            </NavbarLink>
            <NavbarLink
              to='Trainers'
              theme={theme}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-60}
            >
              Trainers
            </NavbarLink>
          </NavbarMenu>
        </NavContainer>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
