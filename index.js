//DICE 1
var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
console.log(randomNumber1);

/* if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute ("src", "./images/dice1.png")
}
else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute ("src", "./images/dice2.png")
}
else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute ("src", "./images/dice3.png")
}
else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute ("src", "./images/dice4.png")
}
else {
    document.querySelector(".img1").setAttribute ("src", "./images/dice5.png")
} */

var randomDiceImage1 = "dice" + randomNumber1;
var randomDiceSource1 = "./images/" + randomDiceImage1 + ".png";

document.querySelector(".img1").setAttribute ("src", randomDiceSource1);



//DICE 2
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
console.log(randomNumber2);

/* if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute ("src", "./images/dice1.png")
}
else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute ("src", "./images/dice2.png")
}
else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute ("src", "./images/dice3.png")
}
else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute ("src", "./images/dice4.png")
}
else {
    document.querySelector(".img2").setAttribute ("src", "./images/dice5.png")
} */

var randomDiceImage2 = "dice" + randomNumber2;
var randomDiceSource2 = "./images/" + randomDiceImage2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceSource2);



//WINNER

//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!!"
}

//If player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!!🚩"
}

//Draw
else {
    document.querySelector("h1").innerHTML = "🚩Draw!!!🚩"
}