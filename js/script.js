/* // === KORTSTOKK SETUP ===

// Tom array som fylles med 52 kort
let deck = []

// De 4 kortfargene (const = endres aldri)
const suits = ["♥", "♦", "♣", "♠"]

// De 13 kortverdiene (const = endres aldri)
const rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] 

// Nested loop: For hver suit, legg til alle 13 rank → totalt 52 kort
for(const element1 of suits){
    for(const element2 of rank){
        deck.push(element1 + element2)
    }
}

// === KORTVERDIER ===

// Objekt som mapper kortrank til poengverdi
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

// === FUNKSJONER ===

// Henter verdien til et kort (f.eks. "♥K" → 10)
function getCardValue(card){
    let rank = card.slice(1)  // Fjerner symbolet, beholder ranken
    let value = cardValues[rank]  // Slår opp verdien i cardValues
    return value
}

// Deler ut et tilfeldig kort fra deck
function dealCard(){
    let randomIndex = Math.floor(Math.random() * 52)  // Tilfeldig tall 0-51
    let randomCard = deck[randomIndex]  // Henter kortet på den indeksen
    return randomCard
}

// === SPILLVARIABLER ===

// Spillerens hånd (starter tom)
let playerHand = []

// Legger til et kort i spillerens hånd
function playerHandFunc(){
    playerHand.push(dealCard())
    return playerHand
}

// Beregner totalscore av alle kort i playerHand
function calculateScore(){
    let totalScore = 0
    
    // Går gjennom hvert kort i playerHand
    for(const card of playerHand){
        let cardValue = getCardValue(card)
        totalScore += cardValue  // Legger til verdien på totalen
    }
    
    return totalScore  // VIKTIG: return må være UTENFOR loopen!
}

// === TEST ===

playerHand = ["♠5", "♣8"]
console.log(calculateScore())  // Skal gi 13

 */



//tester ut kunnskapen min så langt

















let deck = []

const suits = ["♥", "♦", "♣", "♠"]

const rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

for(const element1 of suits){
for(const element2 of rank){
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

function getCardValue(card){

let extractPoints = card.slice(1)
let checkExtractCard = extractPoints[cardValues]
return checkExtractCard; 
};
getCardValue("♥K")

