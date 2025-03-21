export function createDeck() {
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const values = [
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "jack",
        "queen",
        "king",
        "ace",
    ];

    let deck = [];

    suits.forEach((suit) => {
        values.forEach((value) => {
            deck.push({
                id: `${value}-${suit}`,
                value,
                suit,
                rank: parseInt(value) || (value === "ace" ? 14 : 10),
                image: `/cards/${value}-${suit}.png`, // Now correctly pointing to public/
            });
        });
    });

    return deck;
}
