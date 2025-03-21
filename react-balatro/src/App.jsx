import { useGameState } from "./game/GameState";
import Hand from "./components/Hand";
import { useState } from "react";
import "./App.css";

export default function App() {
    const { deck, drawCard } = useGameState();
    const [hand, setHand] = useState([]);

    return (
        <div className="game-container">
            <div className="deck-container" onClick={() => drawCard(setHand)}>
                {deck.length > 0 ? (
                    <img
                        src="/cards/card-back.png"
                        alt="Deck"
                        className="deck-image"
                    />
                ) : (
                    <p>No cards left</p>
                )}
            </div>
            <Hand hand={hand} setHand={setHand} />
        </div>
    );
}
