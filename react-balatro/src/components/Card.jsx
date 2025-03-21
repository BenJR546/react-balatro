export default function Card({ card }) {
    return (
        <div className="card">
            <img src={card.image} alt={`${card.value}-${card.suit}`} />
        </div>
    );
}
