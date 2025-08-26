import { useState, useEffect } from "react";
import { InfoCard } from "../components/InfoCard";
import { ProfileHolder } from "../Components/ProfileHolder";


export const Home = () => {
    return (
        <div className="pt-5 pb-10 pl-3.5 pr-3.5">
            <div className="flex flex-row justify-between">
                <ProfileHolder imageContent={"/generalImages/georgeProfile.jpg"} altContent={"George Calderon"} imageStyling={"w-75 h-auto rounded-4xl"} />
                <div className="flex flex-col gap-4 p-5">
                    <InfoCard 
                infoCardStyling={"bg-[#BFC0CF] text-black p-4 rounded-xl shadow-md text-center"}
                infoCardContent={"Hi, my name is George!"} 
                />
                <InfoCard 
                infoCardStyling={"bg-[#BFC0CF] text-black p-4 rounded-xl shadow-md text-center"}
                infoCardContent={"25 - Astoria/Queens, NY"} 
                />
                <InfoCard 
                infoCardStyling={"bg-[#BFC0CF] text-black p-4 rounded-xl shadow-md text-center"}
                infoCardContent={
                    "Anime Watcher 📺 Pet Lover 🐾 Thrill Seeker 🪂"
                } 
                />
                </div>
            </div>
            <div className="pt-10">
                <InfoCard 
                infoCardStyling={"bg-[#BFC0CF] text-black p-6 rounded-xl shadow-lg"}
                infoCardContent={
                    "As an aspiring Web Developer, I am interested in bridging creativity and accessibility to create stylish user-centric designs. I hope to continue cultivating a full-stack background to better assist my clients on creating their ideal website(s), take back their time, and achieve their dreams."
                }
                />
            </div>
        </div>
    )
}