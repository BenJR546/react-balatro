import { useGameState } from "./game/GameState";
import Hand from "./components/Hand";

export default function App() {
    const { deck, hand, drawCard } = useGameState();

    return (
        <div>
            <h1>React Balatro</h1>
            <button onClick={drawCard}>Draw Card</button>
            <Hand hand={hand} />
        </div>
    );
}
