import { useState } from "react";
import { createDeck } from "./Deck";

export function useGameState() {
    const [deck, setDeck] = useState(createDeck);
    const [hand, setHand] = useState([]);

    function drawCard() {
        if (deck.length === 0) return;

        // Get a random index from the deck
        const randomIndex = Math.floor(Math.random() * deck.length);
        const newCard = deck[randomIndex];

        // Remove the drawn card from the deck
        const newDeck = deck.filter((_, index) => index !== randomIndex);

        // Update state
        setHand([...hand, newCard]);
        setDeck(newDeck);
    }

    return { deck, hand, drawCard };
}
