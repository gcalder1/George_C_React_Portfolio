import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

export const NavBar = () => {

    const [ toggle, setToggle ] = useState(false); 

    const revealExpandedNav = () => {
        setToggle(true)
    }


    const hideExpandedNav = () => {
        setToggle(false)
    }

    return (
        <div className="reactive flex" onMouseEnter={revealExpandedNav} onMouseLeave={hideExpandedNav}>
            <button className={`transition flex items-center justify-center w-12 h-12 rounded-[10px] bg-[#BFC0CF] text-[#222222] shadow-sm hover:cursor-pointer ${ toggle ? "hover: rotate-90" : "unhover: rotate-180" }`}>
                <Menu  size={24}/>
            </button>
            <nav className={`
          absolute left-12 h-12 flex items-center 
          bg-[#BFC0CF] rounded-xl overflow-hidden 
          transition-all duration-300 ease-in-out
          hover:shadow-lg hover:outline-offset-3
          ${toggle ? "w-84 opacity-100" : "w-0 opacity-0"}
        `}>
                <ul className="ml-4 flex space-x-6 px-4 whitespace-nowrap">
                    <NavLink to={"/home"} 
                        className={({isActive}) => 
                        `hover:underline transition ${isActive ? "underline font-medium" : ""}`}>
                            <li>Home</li>
                    </NavLink>
                    <NavLink to={"/about"} className={({isActive}) => 
                        `hover:underline transition ${isActive ? "underline font-medium" : ""}`}>
                            <li>About</li>
                    </NavLink>
                    <NavLink to={"/projects"} className={({isActive}) => 
                        `hover:underline transition ${isActive ? "underline font-medium" : ""}`}>
                            <li>Projects</li>
                    </NavLink>
                    <NavLink to={"/contact"} className={({isActive}) => 
                        `hover:underline transition ${isActive ? "underline font-medium" : ""}`}>
                            <li>Contact</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}