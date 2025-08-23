import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "./Logo";

export const NavBar = () => {

    const [ toggle, setToggle ] = useState(false);
    const [ expanded, setExpanded ] = useState(true);
    const [ closed, setClosed ] =useState(false);

    const navBarToggle = () => {
        if (!true) {
            setToggle(true)
        }
    }

    useEffect(() => {
        navBarToggle()
    })


    return (
        <nav className="flex items-center p-4 bg-white shadow justify-between">
            <ul className="ml-4 flex space-x-6">
                <NavLink to={"/home"}><li>Home</li></NavLink>
                <NavLink to={"/about"}><li>About</li></NavLink>
                <NavLink to={"/projects"}><li>Projects</li></NavLink>
                <NavLink to={"/contact-me"}><li>Contact Me</li></NavLink>
            </ul>
            <Logo />
        </nav>
    )
}