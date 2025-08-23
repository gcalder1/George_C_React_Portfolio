import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
     
    const navigate = useNavigate();

    const navToRoot = () => {
    navigate("/app") //change this later to redirect to /home
  }

    return (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#52B0FD] shadow-md hover:outline-2 hover: outline-offset-2 hover: outline-[#52B0FD] hover: cursor-pointer" onClick={navToRoot}>
            <div className="text-[#222222] font-light text-lg tracking-wide select-none ">
                GC
            </div>
        </div>
    )
}