import Card from "./Card";
import "./Hand.css"; // Import the styles

export default function Hand({ hand }) {
    return (
        <div className="hand">
            {hand.map((card, index) => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
}
