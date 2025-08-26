export const ProjectCard = ({ imageContent, altContent, imageStyling, cardDestination, cardContent }) => {
    return (
        <a href={cardDestination} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-center bg-[#BFC0CF] rounded-xl shadow-md overflow-hidden mb-6 hover:shadow-xl transition duration-300">
                <div>
                    <img src={imageContent} alt={altContent} className={`w-2/3 h-64 object-cover ${imageStyling}`}/>
                </div>
                <div className="w-1/3 p-6 h-64 overflow-y-auto">
                    <p>{cardContent}</p>
                </div>
            </div>
        </a>
    )
}