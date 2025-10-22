// Player 1
var random1 = Math.floor(1 + Math.random() * 6);
var randomdice1 = "dice" + random1 + ".png"; // dice1.png to dice6.png
var i1 = document.querySelectorAll("img")[0]; // first image
i1.setAttribute("src", randomdice1); // removed "images/"

// Player 2
var random2 = Math.floor(1 + Math.random() * 6);
var randomdice2 = "dice" + random2 + ".png";
var i2 = document.querySelectorAll("img")[1]; // second image
i2.setAttribute("src", randomdice2); // removed "images/"

// Winner
if(random1 > random2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if(random2 > random1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
