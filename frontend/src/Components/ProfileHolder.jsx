export const ProfileHolder = ({ imageContent, altContent, imageStyling }) => {
    return (
        <div>
            <img src={imageContent} alt={altContent} className={imageStyling}/>
        </div>
    )
}