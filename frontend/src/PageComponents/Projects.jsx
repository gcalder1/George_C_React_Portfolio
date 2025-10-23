import { useState } from "react";
import { ProjectCard } from "../Components/ProjectCard.jsx";

export const Projects = () => {
    return (
        <div className="pt-5 pb-10 pl-3.5 pr-3.5">
            <p className="text-5xl text-center">My Projects!</p>
            <div className="pt-10">
                <ProjectCard 
                imageContent={"/projectImagesFolder/KnightsOfJSScreenshot.png"} 
                altContent={"Knights Of Javascript"} 
                imageStyling={""} 
                cardDestination={"https://knightsofjavascriptintheapocalypse.netlify.app/"} 
                cardContent={"Knights of JavaScript is a turn-based battle game built entirely in JavaScript, featuring alternating player attacks, dynamic UI updates, and victory animations. Real-time feedback is implemented for attacks, button states, and player health thresholds to enhance gameplay. The game enforces precise logic, including zero-health minimums, and has been thoroughly debugged and optimized for a smooth experience."} 
                />
                <ProjectCard 
                imageContent={"/projectImagesFolder/TheSillyCornerScreenshot.png"} 
                altContent={"The Silly Corner"} 
                imageStyling={""} 
                cardDestination={"https://clever-alpaca-c54b17.netlify.app/"} 
                cardContent={"The Silly Corner is a web application that delivers jokes using the JokeAPI, a public API offering over 1,000 consistently formatted jokes. Users can view jokes across five safe-for-work categories: Pun, Spooky, Christmas, Programming, and Miscellaneous. The project leverages fetch requests to display jokes in real-time, providing instant feedback and interaction. Built with Node.js and Vite, the app emphasizes accessibility and ease of use while showcasing API integration in a fun, lighthearted way."} 
                />
                <ProjectCard 
                imageContent={"/projectImagesFolder/tidybloomDashboard.png"} 
                altContent={"TidyBloom"} 
                imageStyling={""} 
                cardDestination={"https://github.com/gcalder1/TKH_A_Little_Friendly_Competition_Submission"} 
                cardContent={"Tidy Bloom is designed to help people with executive function challenges, busy schedules, or children who struggle with starting and completing tasks. The app guides users to pick a room or self-care routine, start a short focus timer, and earn points and streaks as they make progress. Each effort grows a plant, eventually cultivating a full garden, turning everyday chores into a motivating and rewarding experience. The design is gentle and supportive, reducing choice overload and lowering the energy needed to get started. Tidy Bloom reframes mundane tasks into something fun, emphasizing consistency over perfection."} 
                />
                
            </div>
        </div>
    )
}