
let deck = []
const suits = ["♥", "♦", "♣", "♠"]
const rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K"] 


for(const element1 of suits){
    for(const element2 of rank){
        console.log(`${element1}${element2}`)
        deck.push(element1+element2)
        
    }
}

let cardValues = {
    "A": 11,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6, 
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 10,
    "Q": 10,
    "K": 10
    
}
console.log(cardValues)




let threeCard = "♥3"

let extractThreeCard = threeCard.slice(1)
console.log(extractThreeCard)

let resultThreeCard = cardValues[extractThreeCard]
console.log(resultThreeCard)

let myCard = "♥K"


function getCardValue(card){
    
        // nå ser vi den i console

    let extractKing = card.slice(1)
    let rankValues = cardValues[extractKing]
    return rankValues


}
getCardValue("♥K")

let resultat = getCardValue("♦7")  // returverdien lagres i resultat
console.log(resultat)    // nå ser vi den i console

function dealCard(){
let deckRandom = Math.floor(Math.random()*52)
let randomDeckCard = deck[deckRandom]
console.log(randomDeckCard)
return randomDeckCard

}
dealCard()

let playerHand = []

function playerHandFunc(){

playerHand.push(dealCard())

return playerHand;

}
playerHandFunc()
console.log(playerHandFunc())

