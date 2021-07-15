const resetbtn = document.getElementsByClassName('reset-btn');
const Players = document.getElementsByClassName('addPlayer')
let  = false 
let images = ["diceW1.svg",
"diceW2.svg",
"diceW3.svg",
"diceW4.svg",
"diceW5.svg",
"diceW6.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("rollDice");
    });
    setTimeout (function(){
        dice.forEach(function(die){
            die.classList.remove("rollDice");
        });
        let dieOneValue = Math.floor(Math.random()*6)
        ;
        document.querySelector("#die-1").setAttribute
        ("src",images[dieOneValue]);
        
        document.querySelector("#total").innerHTML = 
        "Your total is " + (dieOneValue + 1) 

    },
    2000
    );
}
