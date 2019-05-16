class Card {
    constructor(suit, name, number) {
        this.suit = suit;
        this.name = name;
        this.number = number;
    }
    getSuit() {
        return this.suit;
    }
    getNumber() {
        return this.number;
    }
    showCard() {
        return `The ${this.number} of ${this.suit}`
    }
}
class Deck {
    constructor() {
        this.deck = [];
        const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }
    showDeck() {
        for (let i = 0; i < this._deck.length; i++) {
            console.log(this._deck[i].showCard());
        }
    }
    shuffle() {
        const {
            deck
        } = this;
        let m = deck.length,
            i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.cards[m];
            [deck[m], deck[i] = deck[i], deck[m]];
        }
        return this;
    }
    deal() {
        var card = this._deck[Math.floor(Math.random() * this._deck.length)]
        this._deck.splice(this._deck.indexOf(card), 1);
        return card;
    }
    reset() {
        this.deck1 = [];
        const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
        for (let i = 0; i < suits.length; i++) {
            for (let j = 1; j < 14; j++) {
                this.deck1.push(new Card(suits[i], j))
            }
        }
    }
}
class Player {
    constructor(playerName) {
        this.playerName = playerName;
        this.playerHand = [];
    }
    takeCard(deck) {
        if (deck instanceof Deck) {
            let newCard = deck.deal();
            this.playerHand.push(newCard);
            return this;
        } else {
            return false;
        }
    }
    discardCard(toss) {
        toss = toss % this.playerHand.length;
        return this.playerHand.splice(this.playerHand[toss], 1)
    }
}