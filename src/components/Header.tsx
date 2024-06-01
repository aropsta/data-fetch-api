import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "../styles/header.scss";

import React, { FormEvent, RefObject, useEffect, useRef, useState, useCallback } from "react";
import breakPointObserver from "../breakPointObserver";

const breakPoints = {
  small: "(max-width:880px)",
  desktop: "(min-width:880px)",
};

const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
  },
  {
    title: "Products",
    url: "/products",
    cName: "nav-links",
  },
  {
    title: "Users",
    url: "/users",
    cName: "nav-links",
  },
  {
    title: "To Dos",
    url: "/todos",
    cName: "nav-links",
  },
]
export default function Header() {


const [breakPoint, isBreakPoint] = useState();
 //const [headerHidden, changeHeaderVisibility] = useState(false); 
const [click, setClick] = useState(false);
  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, [breakPoint]);

  const toggleScroll = (a: boolean) => {
    if (a) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };

    const closeMobileMenu = () => {
    setClick(false);
  };

   const menuClick = () => {
    setClick(!click);
  };




  return (
    <nav className="navbar">
   
    <ul className={click ? `nav-menu active` : "nav-menu effect"}>
        <li onClick={closeMobileMenu} className="nav-item">
          <NavLink
            to={MenuItems[0].url}
            className={({ isActive }) => {
              return isActive ? `${MenuItems[0].cName} active-link` : `${MenuItems[0].cName}`;
            }}>
            {MenuItems[0].title}
          </NavLink>
        </li>
        <li onClick={closeMobileMenu} className="nav-item">
          <NavLink
            to={MenuItems[1].url}
            className={({ isActive }) => {
              return isActive ? `${MenuItems[1].cName} active-link` : `${MenuItems[1].cName}`;
            }}>
            {MenuItems[1].title}
          </NavLink>
        </li>
        <li onClick={closeMobileMenu} className="nav-item">
          <NavLink
            to={MenuItems[2].url}
            className={({ isActive }) => {
              return isActive ? `${MenuItems[2].cName} active-link` : `${MenuItems[2].cName}`;
            }}>
            {MenuItems[2].title}
          </NavLink>
        </li>
        <li onClick={closeMobileMenu} className="nav-item">
          <NavLink to={MenuItems[3].url} className={MenuItems[3].cName}>
            {MenuItems[3].title}
          </NavLink>
        </li>
      </ul>
            <button className="menu-icon" onClick={menuClick} aria-label="Open menu">
        <i
          className={
            click ? `fas fa-times ${toggleScroll(true)} ` : `fas fa-bars ${toggleScroll(false)}}`
          }></i>
      </button>

        </nav>
  )
}
