import { useState } from "react";
import { InfoCard } from "../Components/InfoCard";
import { ListCard } from "../Components/ListCard";

export const About = () => {
    return (
        <div className="pt-5 pb-10 pl-3.5 pr-3.5">
            <p className="text-5xl text-center pb-10">Who am I?</p>
            <div>
                <InfoCard 
                infoCardStyling={"bg-[#BFC0CF] text-black p-6 rounded-xl shadow-lg"}
                infoCardContent={"With a strong background in music, education, and community service, I have honed my skills in communication, organization, and teamwork. My professional journey includes assisting with lesson planning, leading activities, and managing conflicts in educational settings, as well as volunteering to support low-income residents and diverse populations. My interest in technology grew while learning HTML and CSS at TKH Foundations, and I am passionate about using my creativity and technical skills to design user-focused web experiences. As a Web Developer in training with full-stack experience, I have built projects such as a turn-based JavaScript game and a RESTful web application that fetches and displays categorized jokes via real-time API requests. Fluent in Spanish and dedicated to continuous learning, I am excited to bring my unique blend of talents—spanning creative, technical, and interpersonal skills—to the field of web development."}
                />
            </div>
            <div className=" flex flex-row pt-10 gap-4">
                <InfoCard 
                infoCardStyling={"flex-1 h-80 overflow-y-auto bg-[#BFC0CF] text-black p-6 rounded-xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"}
                infoCardContent={"My background in music and education has been instrumental in shaping my approach to web development. Leading music lessons, working in early childhood education, and with both youth and adults of all ages have honed my ability to communicate effectively and create engaging content that resonates with audiences everywhere."}
                />
                <InfoCard 
                infoCardStyling={"flex-1 h-80 overflow-y-auto bg-[#BFC0CF] text-black p-6 rounded-xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"}
                infoCardContent={"My tech journey oddly started with being part of a team focused on hosting and maintaining a popular Minecraft server, where I honed skills in user experience and retention. This sparked my passion for web development, blending aesthetics and functionality to create engaging interfaces for gamers to enjoy. My journy with TKH continue to foster this user-centric interest via my experience in fullstack development."}
                />
                <InfoCard 
                infoCardStyling={"flex-1 h-80 overflow-y-auto bg-[#BFC0CF] text-[#222222] p-6 rounded-xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"}
                infoCardContent={"Volunteering with youth and seniors in diverse communities has deepened my understanding of varied needs and perspectives, reinforcing the importance of a user-centric approach in web development. My commitment to service drives me to use technology to make a positive and memorable impact. "}
                />
            </div>
            <div className="pt-10 grid grid-cols-3 gap-6">
                <ListCard cardStyling={""} cardTitle={"Hobbies"} cardItems={[
                    { icon: "🎵", text: "Listening to and creating music" },
                    { icon: "💪", text: "Working out" },
                    { icon: "🎮", text: "Playing PC and Mobile Games" },
                    { icon: "📸", text: "Exploring NYC" },
                    { icon: "🧁", text: "Attempting baking" },
                ]}/>
                <ListCard cardStyling={""} cardTitle={"Aspirations"} cardItems={[
                    { icon: "🌍", text: "Traveling the world twice" },
                    { icon: "🍽️", text: "Beating the disgusting food museum challenge" },
                    { icon: "🗣️", text: "Learning 3 more languages" },
                    { icon: "🌐", text: "Creating an enjoyable website" },
                    { icon: "🚴‍♂️", text: "Learning how to ride a bike" },
                    ]}/>
                <ListCard cardStyling={""} cardTitle={"Habits"} cardItems={[
                    { icon: "🙏", text: "Daily Gratitude" },
                    { icon: "📖", text: "Reading about something positive at least once a day" },
                    { icon: "🎯", text: "Revisiting an un-touched skill" },
                    { icon: "📚", text: "Trying a new book each season" },
                    { icon: "⏰", text: "Not eating past 8 PM until 8 AM" },
                    ]}/>
                <ListCard cardStyling={""} cardTitle={"Strengths"} cardItems={[
                    { icon: "📣", text: "I’m a cheerleader" },
                    { icon: "🤝", text: "I thrive in collaborative environments" },
                    { icon: "✨", text: "I enjoy helping my team shine" },
                    { icon: "🔥", text: "I’m relentless and ready to learn new things" },
                    { icon: "🌟", text: "I have a strong belief in the potential of those around me" },
                    ]}/>
                <ListCard cardStyling={""} cardTitle={"Weaknesses"} cardItems={[
                    { icon: "⚖️", text: "Work-life balance" },
                    { icon: "💼", text: "Over-investment in projects" },
                    { icon: "🎤", text: "Public speaking" },
                    { icon: "💬", text: "Communicating ideas" },
                    { icon: "🔍", text: "Over-focusing on details" },
                    ]}/>
                <ListCard cardStyling={""} cardTitle={"Passions"} cardItems={[
                    { icon: "📚", text: "Life-long learning" },
                    { icon: "🤲", text: "Community Service and Outreach" },
                    { icon: "✈️", text: "Travel and Cultural Exploration" },
                    { icon: "🧑‍🤝‍🧑", text: "Meeting new people" },
                    { icon: "🏡", text: "Creating safe spaces" },
                    ]}/>
            </div>
        </div>
    )
}

/*
<InfoCard 
    infoCardStyling={""}
    infoCardContent={""}
/>
*/