let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score"); // Add elements to display scores
const compScoreDisplay = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3); // Returns 0, 1, or 2
    return options[ranIdx];
};

// Draw Function to display the game as a draw
const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#081b31"; // Fixed: backgroundColor
};

// Show Winner Function
const showWinner = (userWin) => { // Fixed: Added userWin parameter
    if (userWin) {
        userScore++; // Increment user score
        console.log("You win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green"; // Fixed: backgroundColor
    } else {
        compScore++; // Increment computer score
        console.log("You lose!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red"; // Fixed: backgroundColor
    }
    // Update score display (if score elements exist)
    if (userScoreDisplay && compScoreDisplay) {
        userScoreDisplay.innerText = userScore;
        compScoreDisplay.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    console.log("User choice: ", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer choice: ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // Computer chooses paper -> user loses; scissors -> user wins
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // Computer chooses scissors -> user loses; rock -> user wins
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // User chooses scissors; computer chooses rock -> user loses; paper -> user wins
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

// Add event listeners to choices
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked: ", userChoice);
        playGame(userChoice);
    });
});