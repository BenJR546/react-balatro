export default function Card({ card }) {
    return (
        <div className="card">
            {card.value} of {card.suit}
        </div>
    );
}
