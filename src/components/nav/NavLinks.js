import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby'
import { useMenuContext } from "../../state";
import { useTheme } from "../../hooks";
import Icon from "../icon";

export const links = ["program", "people", "research", "events"];

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();
  // const [theme, toggleTheme] = useTheme();

  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link) => (
        <li key={link}>
          <NavLink to={`/${link}`} className="link" onClick={closeMenu}>
            {link}
          </NavLink>
        </li>
      ))}
      <li>
        {/* <button onClick={toggleTheme}> */}
        <button>
          {/* <Icon name={theme === "dark" ? "day" : "night"} /> */}
          <Icon />
        </button>
      </li>
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  li:not(:last-child) {
    margin-right: 50px;
  }
  li:last-child {
    margin-left: auto;
  }
  button {
    margin: 0 0 0 100px;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--text);
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: var(--text);
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;
