import Card from "./Card";
import { useState, useEffect } from "react";
import "./Hand.css";

export default function Hand({ hand, setHand }) {
    const [animatedCards, setAnimatedCards] = useState([]);

    useEffect(() => {
        if (hand.length > 0) {
            const latestCard = hand[hand.length - 1].id;
            setAnimatedCards((prev) => [...prev, latestCard]);

            setTimeout(() => {
                setAnimatedCards((prev) =>
                    prev.filter((id) => id !== latestCard)
                );
            }, 500);
        }
    }, [hand]);

    function handleDragStart(event, index) {
        event.dataTransfer.setData("cardIndex", index);
    }

    function handleDrop(event, targetIndex) {
        event.preventDefault();
        const draggedIndex = event.dataTransfer.getData("cardIndex");
        if (draggedIndex === "") return;

        const updatedHand = [...hand];
        const [draggedCard] = updatedHand.splice(draggedIndex, 1);
        updatedHand.splice(targetIndex, 0, draggedCard);

        setHand(updatedHand);
    }

    return (
        <div className="hand">
            {hand.map((card, index) => {
                const rotation = (index - hand.length / 2) * 7;
                const isAnimating = animatedCards.includes(card.id);

                return (
                    <div
                        key={card.id}
                        className={`card-container ${
                            isAnimating ? "fly-in" : ""
                        }`}
                        style={{ transform: `rotate(${rotation}deg)` }}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, index)}
                    >
                        <Card card={card} />
                    </div>
                );
            })}
        </div>
    );
}
