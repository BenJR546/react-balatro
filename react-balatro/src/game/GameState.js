import { useState } from "react";

const initialDeck = [
    { id: 1, value: "2", suit: "hearts" },
    { id: "2", value: "A", suit: "spades" },
    { id: "3", value: "10", suit: "diamonds" },
];

export function useGameState() {
    const [deck, setDeck] = useState(initialDeck);
    const [hand, setHand] = useState([]);

    function drawCard() {
        if (deck.length === 0) return;
        const newCard = deck[0];
        setHand([...hand, newCard]);
        setDeck(deck.slice(1));
    }

    return { deck, hand, drawCard };
}
