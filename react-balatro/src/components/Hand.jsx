import Card from "./Card";
import "./Hand.css";

export default function Hand({ hand }) {
    return (
        <div className="hand">
            {hand.map((card, index) => {
                // Calculate rotation based on position in the hand
                const rotation = (index - hand.length / 2) * 7; // Adjust angle here

                return (
                    <div
                        key={card.id}
                        className="card-container"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    >
                        <Card card={card} />
                    </div>
                );
            })}
        </div>
    );
}
