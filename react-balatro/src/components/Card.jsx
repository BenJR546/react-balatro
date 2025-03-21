import "./Card.css";

export default function Card({ card, faceUp = true }) {
    return (
        <div className="card">
            <img
                src={faceUp ? card.image : "/cards/card-back.png"}
                alt={faceUp ? `${card.value} of ${card.suit}` : "Card Back"}
            />
        </div>
    );
}
