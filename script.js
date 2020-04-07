// This grabs the start button and associates it 
// with the countdown function--setTime
window.onload = function () {
    var startButton = document.getElementById("startHere")


    var button1ForAns1 = document.getElementById("ans1");
    var button2ForAns2 = document.getElementById("ans2");
    var button3ForAns3 = document.getElementById("ans3");
    var button4ForAns4 = document.getElementById("ans4");
    var areaForQuestionDisplay = document.getElementById("display");
    // var toclearAll = the correct answer button--do we need a clear variable?

    // these are variable with the initials and highscore table
    var userFirstInitialTable = document.querySelector("user-first-initial");
    var userLastInitialTable = document.querySelector("user-last-name");
    var userScoreTable = document.querySelector("user-score");
    var initialSubmitButton = document.querySelector("enterScore");
    var msgDiv = document.querySelector("msg");
    // for the Initials and Highscore table recalling from DOM
    var firstInitialInput = document.getElementById("firstInitial");
    var lastInitialInput = document.getElementById("lastInitial");
    


    var elementsForQuestions = [
        button1ForAns1, button2ForAns2, button3ForAns3, button4ForAns4
    ];

    // an array with nested objects
    var questions = [
        {   
            question: 'How long will it take me to learn how to code?',
            answers: {A:'life', B: '2 months', C: '2 years', D: 'he\'s got it'},
            correctAnswer: 'life',
        },
        {
            question: 'If Hal is Jay, Austin is __?',
            answers: {A: 'Loud Bob', B: 'Kevin', C: 'Smith', D: 'Silent Bob'},
            correctAnswer: 'Silent Bob',    
        },
        {
            question: 'What animal is on the new 2020 quarter and is it ironic with today\'s social distancing?',
            answers: {A: 'Bear', B: 'Hippo', C: 'Bat', D: 'Giraffe'},
            correctAnswer: 'Bat',
        },
        {
            question: 'What happened to BlockBuster?',
            answers: {A:'VisArt', B: 'The Internet', C: 'GameRush', D: 'Nintendo'},
            correctAnswer: 'The Internet',
        }
    ];
            console.log(questions);
    // these variables are for the timeset function
    var timeElement = document.querySelector(".time");

    // application state
    var isRunning = false;
    var secondsLeft;
    var timeInterval;

    

    // logic
    startButton.addEventListener("click", function () {
        if (isRunning) return;
        isRunning = true;
        setTime();
        setQuestion();
    });

    function setTime() {
        secondsLeft = 120;

        timeInterval = setInterval(function () {
            timeElement.textContent = secondsLeft + " seconds remaining";
            secondsLeft--;

            if (secondsLeft === 0) {
                timeElement.textContent = "";
                clearInterval(timeInterval);
                endGame();
            }

        }, 1000);
    }





    

    // this function is with the start button event listener
    function setQuestion(questions) {
    if (questions < 4) {
        areaForQuestionDisplay.setAttribute("displaya", questions[question].correctAnswer)
        question[questions];
        areaForQuestionDisplay.textContent = questions[question].question;
        button1ForAns1.textContent = "A: " + questions[question].answers.A;
        button2ForAns2.textContent = "B: " + questions[question].answers.B;
        button3ForAns3.textContent = "C: " + questions[question].answers.C;
        button4ForAns4.textContent = "D: " + questions[question].answers.D;
    } else {
        endGame();
    }
    
    console.log(questions)
    
    
    }
    
    function endGame(){

    }
}

//     function buttonOutput() {
//         var counter = document.querySelector("counter");

//         var button1ForAns1 = document.getElementById("ans1");
//         var button2ForAns2 = document.getElementById("ans2");
//         var button3ForAns3 = document.getElementById("ans3");
//         var button4ForAns4 = document.getElementById("ans4");

//         var count = localStorage.getItem("count");

//         counter.textContent = count;

//         button1ForAns1.addEventListener("click", function () {
//             count++;
//             counter.textContent = count;

//             localStorage.setItem("count", count);
//         });

//         button2ForAns2.addEventListener("click", function () {
//             count--;
//             counter.textContent = count;

//             localStorage.setItem("count", count);
//         });

//         button3ForAns3.addEventListener("click", function () {
//             count--;
//             counter.textContent = count;

//             localStorage.setItem("count", count);
//         });

//         button4ForAns4.addEventListener("click", function () {
//             count--;
//             counter.textContent = count;

//             localStorage.setItem("count", count);
//         });

//     }


//     // this goes with initials and highscores table section
//     function displayMessage(type, message) {
//         msgDiv.textContent = message;
//         msgDiv.setAttribute("class", type);
//     }


//     // Initials and highscore table section

//     initialSubmitButton.addEventListener("click", function (event) {
//         event.preventDefault();

//         var userInitials = {
//             firstInitial: firstInitialInput.value.trim(),
//             lastInitial: lastNameInput.value.trim()
//             // we need user score here to pass down to table?
//         };
//         console.log(userInitials);

//         if (userInitials.firstInitial === "") {
//             displayMessage("error", "First initial cannot be blank");
//         } else if (userInitials.lastInitial === "") {
//             displayMessage("error", "Last initial cannot be blank");
//         } else {
//             displayMessage("success", "Score submitted successfully");


//             //   set new submission
//             localStorage.setItem("user", JSON.stringify(userInitials));

//             // get most recent submission
//             var lastUser = JSON.parse(localStorage.getItem("user"));

//             userFirstInitialTable.textContent = lastUser.firstInitial;
//             userLastNameSpan.textContent = lastUser.lastInitial;
//             userScoreTable.textContent = lastUser.userScore;

//         }
//     });






//     // this is a for loop that counts down....use this on object with questions?

//     function countDown(num) {
//         for (var i = num; i > 0; i--) {
//             console.log(i);

//         }


//     }

