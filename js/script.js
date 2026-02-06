
let deck = []
const suits = ["♥", "♦", "♣", "♠"]
const rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K"] 


for(const element1 of suits){
for(const element2 of rank){
    console.log(`${element1}${element2}`)
    deck.push(element1+element2)
}
}

console.log(deck)

let fromRankToPoints = {
    "A": 1,
    "1": 1,
    "2": 2,
    "3": 3,
    

}

//maps
/* 
for(let i = 0; i<rank.length; i++){
    
    for(let j = 0; j<suits[i].length; j++){
        console.log(suits[i])
    }
} */

/* 
 
for(let i = 0; i < rank.length; i++){
    console.log(rank[i] + suits[i])
    
} */

/* const names = ["Alice", "Bob", "Charlie"];
const ages = [25, 30, 35];415

for (let i = 0; i < names.length; i++) {
    // Accessing corresponding elements using the same index
    console.log(names[i] + " is " + ages[i] + " years old.");
} */

/* function testLoop(suits, rank) {
  let result = "";
  for (const i in suits) {
    result += `${rank}.${i} = ${suits[i]}<br>`;
  }
  result += "<hr>";
  return result;
}
console.log(testLoop) */



/* 
let mathRandom = Math.floor(Math.random()*10)
console.log(mathRandom)  */


