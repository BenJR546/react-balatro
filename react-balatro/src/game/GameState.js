import { useState } from "react";
import { createDeck } from "./Deck";

export function useGameState() {
    const [deck, setDeck] = useState(createDeck());

    function drawCard(setHand) {
        if (deck.length === 0) return;

        const randomIndex = Math.floor(Math.random() * deck.length);
        const newCard = deck[randomIndex];
        const newDeck = deck.filter((_, index) => index !== randomIndex);

        setDeck(newDeck);
        setHand((prevHand) => [...prevHand, newCard]); // Update hand properly
    }

    return { deck, drawCard };
}
