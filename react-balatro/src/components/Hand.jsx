import Card from "./Card";

export default function Hand({ hand }) {
    return (
        <div className="hand">
            {hand.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
}
