export const ListCard = ({ cardTitle, cardItems, cardStyling }) => {
  return (
    <div className={cardStyling}>
      <h2 className="text-2xl font-semibold mb-4">{cardTitle}</h2>
      <ul className="space-y-2">
        {cardItems.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
