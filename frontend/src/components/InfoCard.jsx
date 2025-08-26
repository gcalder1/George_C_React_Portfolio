export const InfoCard = ({ infoCardContent, infoCardStyling }) => {
    return(
        <div className={`${infoCardStyling} p-5`} >
            <span>{infoCardContent}</span>
        </div>
    )
}