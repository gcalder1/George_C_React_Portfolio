export const ConnectBubble = ({ imageContent, linkContent, altContent, bubbleTitle }) => {
    return (
        <a href={linkContent} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center space-y-1 group">
            <div className="active:scale-110">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BFC0CF] shadow-md overflow-hidden group-hover:scale-110 transition-transform">
                    <img src={imageContent} alt={altContent} className="w-6 h-6 "/>
                </div>
                <div className="text-xs text-[#222222]">{bubbleTitle}</div>
            </div>
            
        </a>
    )
}