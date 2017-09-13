var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

console.log("\n");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 
console.log("\n");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
console.log("\n");
// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
