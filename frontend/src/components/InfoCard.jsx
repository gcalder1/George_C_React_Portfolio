export const InfoCard = ({ infoCardContent, infoCardStyling }) => {
    return(
        <div className={infoCardStyling}>
            <span>{infoCardContent}</span>
        </div>
    )
}