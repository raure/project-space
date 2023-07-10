import React, { useRef, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { getMenuStrings } from './Strings';
import logo from "../assets/shared/logo.svg";
import * as Styles from '../designs/MenuStyle.js';
import { getAppStrings } from './Strings';

const Menu = () => {
  const { homePath, 
          destinationPath, 
          crewPath, 
          techPath
  } = getAppStrings();

  const {
    homeIndex,
    homeLink,
    destinationIndex,
    destinationLink,
    crewIndex,
    crewLink,
    techIndex,
    techLink,
  } = getMenuStrings();

  const {
    Nav,
    Logo,
    NavLine,
    Menu,
    MenuLink,
    MenuIndex,
    HamburgerIcon,
  } = Styles;

  const menuRef = useRef(null);
  const menuLinkRefs = useRef([]);
  const hamburgerRef = useRef(null);

  const sidebar = () => {
    const hamburger = hamburgerRef.current;
    const menu = menuRef.current;

    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  };

  const setActiveLink = (index) => {
    menuLinkRefs.current.forEach((linkRef, i) => {
      if (i === index) {
        linkRef.classList.add('active');
      } else {
        linkRef.classList.remove('active');
      }
    });
  };

  useEffect(() => {
    const menu = menuRef.current;
  
    const handleClick = (event) => {
      const link = event.target.closest('a');
      if (!link) return;
  
      const index = Array.from(menu.children).indexOf(link.parentElement);
      setActiveLink(index);
      sidebar();
    };
  
    if (menu) {
      menu.addEventListener('click', handleClick);
  
      return () => {
        menu.removeEventListener('click', handleClick);
      };
    }
  }, []);
  
  
  
  

  return (
    <div>
      <Nav>
        <Logo href={homePath}>
          <img src={logo} alt="logo.svg" />
        </Logo>
        <NavLine></NavLine>

        <Menu ref={menuRef}>
          <MenuLink ref={(ref) => (menuLinkRefs.current[0] = ref)}>
            <NavLink exact="true" to={homePath} activeclassname="active">
              <MenuIndex>{homeIndex}</MenuIndex> {homeLink}
            </NavLink>
          </MenuLink>

          <MenuLink ref={(ref) => (menuLinkRefs.current[1] = ref)}>
            <NavLink to={destinationPath} activeclassname="active">
              <MenuIndex>{destinationIndex}</MenuIndex> {destinationLink}
            </NavLink>
          </MenuLink>

          <MenuLink ref={(ref) => (menuLinkRefs.current[2] = ref)}>
            <NavLink to={crewPath} activeclassname="active">
              <MenuIndex>{crewIndex}</MenuIndex> {crewLink}
            </NavLink>
          </MenuLink>
          
          <MenuLink ref={(ref) => (menuLinkRefs.current[3] = ref)}>
            <NavLink to={techPath} activeclassname="active">
              <MenuIndex>{techIndex}</MenuIndex> {techLink}
            </NavLink>
          </MenuLink>
        </Menu>

        <HamburgerIcon ref={hamburgerRef} onClick={sidebar}></HamburgerIcon>
      </Nav>
    </div>
  );
};

export default Menu;
