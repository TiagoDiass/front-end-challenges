import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink } from './Navbar.elements';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>

          <MobileIcon onClick={handleClick}>{clicked ? <FaTimes /> : <FaBars />}</MobileIcon>

          <NavMenu clicked={clicked} onClick={handleClick}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products">Products</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
