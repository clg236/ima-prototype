import React from "react";
import { Link } from 'gatsby'
import styled, { css } from "styled-components";
import { useMenuContext } from "../../state";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import { useScroll } from "../../hooks";

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  return (
    <DesktopNav isScrolled={isScrolled}>
      <Link to="/" className="logo">
      <img src="./images/logo.png" width="50px" height="50px" />
      </Link>
      <NavLinks />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background: var(--bg);
  color: var(--text);
  transition: all 150ms linear;
  ${(props) =>
    props.isScrolled &&
    css`
      background: var(--headerBg);
      box-shadow: var(--headerBoxShadow);
    `}
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 0 60px;
  z-index: 2;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
  }
  .logo {
    flex: 2;
    color: var(--text);
    font-size: 30px;
  }
  .nav-links {
    font-size: 1.5em;
    @media screen and (max-width: 768px) {
      display: none;
      
    }
  }
  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: var(--text) !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;