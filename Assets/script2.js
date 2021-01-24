
var questions = [{
     prompt: "Is JavaScript case sensitive?\n(a) Yes\n\ (b) No\n(c) Sometimes\n(d) Only inside functions",
     answer: "a"
},
{
     prompt: "What are the core JavaScript data types?\n(a) Integers, Id's, Classes, Divs.\n\ (b) Events, Callbacks, Loops, Functions.\n(c) Numbers, Arrays, Strings, Booleans, Objects.\n(d) Client side, Server side, DOM, Window.",
     answer: "c"
},
{
     prompt: "What is var in JavaScript?\n(a) An element id.\n\ (b) A method.\n(c) A container for a piece of data.\n(d) A function.",
     answer: "c"
},
{
     prompt: "What case style do we use in JavaScript?\n(a) Cat Case\n\ (b) Chameleon Case\n(c) Camel Case\n(d) Crocodile Case",
     answer: "c"
},
{
     prompt: "Are all variables case sensitive?\n(a) Yes\n\ (b) No\n(c) Sometimes\n(d) Only inside elements",
     answer: "a"
}
];


// Start Game/Timer button 

var countdownTimer = document.querySelector(".time");

var secondsLeft = 10;

function setTime() {
     // Sets interval in variable
     var timerInterval = setInterval(function () {
          secondsLeft--;
          countdownTimer.textContent = secondsLeft + " seconds left till end.";

          if (secondsLeft === 0) {
               // Stops execution of action at set interval
               clearInterval(timerInterval);
               // Calls function to create and append image
               gameOver();
          }

     }, 1000);
}

// Function to create gameOver 
function gameOver() {
     countdownTimer.textContent = "Game Over!";
    

}
//this executes the function on the button click
// make the start button start the countdown clock

var startButton = document.querySelector("#startButton");

startButton.addEventListener("click", function () {
     console.log("startButton");
     setTime();
     var score = 0;

     for (var i = 0; i < questions.length; i++) {
          var response = window.prompt(questions[i].prompt);
          if (response == questions[i].answer) {
               score++;
               alert("Correct!");
          } else {
               alert("WRONG!");
          }
     }
     alert("you got " + score + "/" + questions.length);
})










