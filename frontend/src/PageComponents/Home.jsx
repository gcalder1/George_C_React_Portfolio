import { useState, useEffect } from "react";
import { InfoCard } from "../components/InfoCard";
import { ProfileHolder } from "../Components/ProfileHolder";


export const Home = () => {
    return (
        <div className="pt-5 pb-10 pl-3.5 pr-3.5">
            <div className="flex flex-row justify-between">
                <ProfileHolder imageContent={"/generalImages/georgeProfile.jpg"} altContent={"George Calderon"} imageStyling={"w-75 h-auto rounded-4xl"} />
                <div>
                    <InfoCard 
                infoCardStyling={"border"}
                infoCardContent={"1"} 
                />
                <InfoCard 
                infoCardStyling={"border"}
                infoCardContent={"2"} 
                />
                <InfoCard 
                infoCardStyling={"border"}
                infoCardContent={"3"} 
                />
                </div>
            </div>
            <div className="pt-10">
                <InfoCard 
                infoCardStyling={"border"}
                infoCardContent={"123"}
                />
            </div>
        </div>
    )
}