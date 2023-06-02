import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import '../css/Menu.css';


class Menu extends Component {
    render() {
        const sidebar = () => {
            const menu = document.querySelector(".Menu");
            const menuLink = document.querySelectorAll(".Menu-link");
            const hamburger = document.querySelector(".hamburger-icon");
      
            hamburger.classList.toggle("active");
            menu.classList.toggle("active");
      
            menuLink.forEach((link) => {
                link.addEventListener("click", function(){
                  hamburger.classList.remove("active")
                  menu.classList.remove("active");
                })
            });
        }
          
        const setActiveLink = element => {
            const links = document.getElementsByTagName("li"); 
            Array.from(links).forEach(e => e.classList.remove("active"));
            element.target.classList.add("active");
        };

        return (
            <div className="Menu-container">
                <nav>
                    <a href="/project-space/">
                        <img src={logo} alt="logo.svg" />
                    </a>
                    <span className="Menu-line"></span> 
                   
                    <ul className="Menu">
                        <li className="Menu-link" onClick={setActiveLink}>
                            <NavLink exact="true" to="/project-space/" activeclassname="active">
                                <span className="Menu-index">00</span> Home
                            </NavLink>
                        </li>
                        <li className="Menu-link" onClick={setActiveLink}>
                            <NavLink to="/project-space/destination" activeclassname="active">
                                <span className="Menu-index">01</span> Destination
                            </NavLink>
                        </li>
                        <li className="Menu-link" onClick={setActiveLink}>
                            <NavLink to="/project-space/crew" activeclassname="active">
                                <span className="Menu-index">02</span> Crew
                            </NavLink>
                        </li>
                        <li className="Menu-link" onClick={setActiveLink}>
                            <NavLink to="/project-space/technology" activeclassname="active">
                                <span className="Menu-index">03</span> Technology
                            </NavLink>
                        </li>
                    </ul>

                    <span className="hamburger-icon" onClick={sidebar}></span>
                </nav>
            </div>
        );
    }
}

export default Menu;


