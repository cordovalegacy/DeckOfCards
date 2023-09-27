

const deckOfCards = []
const suit = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
const face = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']

const createDeck = () => {
    suit.forEach((suits) => {
        face.forEach((faces) => {
            console.log(`${faces} of ${suits}`)
        })
    })
}

createDeck()