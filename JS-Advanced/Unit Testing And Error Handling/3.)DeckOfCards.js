//Task: Write a function that takes a deck of cards as an array of strings and prints them as a sequence of cards (space separated). Use the solution from the previous task to generate the cards.

// Print `Invalid card: ${card}` when an invalid card definition is passed as input.

// Input / Output

// The function takes an array of strings as a parameter. Print the list of cards as string, separated by space.

//Solution:

function cardsDeck(cards) {
    let myDeck = [];

    for (let card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);
        try {
            let cardObj = cardCreation(face, suit)
            myDeck.push(cardObj);
        } catch (ex) {
            console.log(`Invalid card: ` + card);
            return;
        }
    }
    console.log(myDeck.join(' '));

    function cardCreation(face, suit) {
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


        if (faces.indexOf(face) == -1) throw Error(`Invalid face ${face}!`);
        if (!suits.hasOwnProperty(suit)) throw Error(`Invalid suit ${suit}!`);

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }
}
cardsDeck(['AS', '10D', 'KH', '2C']);
cardsDeck(['5S', '3D', 'QD', '1C']);