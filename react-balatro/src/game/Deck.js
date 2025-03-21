export function createDeck() {
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const values = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
    ];

    let deck = [];

    suits.forEach((suit) => {
        values.forEach((value, index) => {
            deck.push({
                id: `${value}${suit}`, // Unique ID
                value,
                suit,
                rank: index + 2, // Numeric rank for sorting later
            });
        });
    });

    return deck;
}
