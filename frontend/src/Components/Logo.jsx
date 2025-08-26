import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
     
    const navigate = useNavigate();

    const navToRoot = () => {
    navigate("/home") //change this later to redirect to /home
  }

    return (
        <div className="transition flex items-center justify-center w-12 h-12 rounded-full bg-[#52B0FD]/75 shadow-lg hover:cursor-pointer active:scale-110 active:bg-[#52B0FD]/100 " onClick={navToRoot}>
            <div className="text-[#222222] font-light text-lg tracking-wide select-none ">
                GC
            </div>
        </div>
    )
}