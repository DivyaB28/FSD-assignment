let confirmation = confirm("Start the game\nRock 🪨 , Paper 📄 & Scissors ✂️!");

const getUserInputPrompt = () => {
  return prompt("Enter your selection\nRock 🪨 , Paper 📄 or Scissors ✂️?");
};

const getValidatedUserInput = (userInput = "") => {
  let trimmedInput = "";
  if (userInput.length !== 0) {
    trimmedInput = userInput
      .trim()
      .toLowerCase()
      .match(/rock+|paper+|scissors+/)
      ? userInput
          .trim()
          .toLowerCase()
          .match(/rock+|paper+|scissors+/)[0]
      : (alert("Please enter valid input!..."),
        getValidatedUserInput(getUserInputPrompt()));

    return trimmedInput;
  } else {
    alert("Please enter valid input!...");
    getValidatedUserInput(getUserInputPrompt());
  }
  return false;
};

const computerChoice = {
  0: "rock",
  1: "paper",
  2: "scissors",
};

const gameOutcomeMessage = {
  tie: "It's a Tie Match",
  U: "Yayy, You Win!",
  C: "Ouch, Computer Wins!",
};

const getGameOutput = (validatedInput, computersChoice) => {
  let gameOutcome =
    validatedInput === "rock"
      ? computersChoice === "rock"
        ? "tie"
        : computersChoice === "paper"
        ? "C"
        : computersChoice === "scissors"
        ? "U"
        : ""
      : validatedInput === "paper"
      ? computersChoice === "rock"
        ? "U"
        : computersChoice === "paper"
        ? "tie"
        : computersChoice === "scissors"
        ? "C"
        : ""
      : validatedInput === "scissors"
      ? computersChoice === "rock"
        ? "C"
        : computersChoice === "paper"
        ? "U"
        : computersChoice === "scissors"
        ? "tie"
        : ""
      : "";
  document.getElementById("gameHeader").innerHTML =
    gameOutcomeMessage[gameOutcome];
  return gameOutcomeMessage[gameOutcome];
};

if (confirmation) {
  let userInput = getUserInputPrompt();
  let validatedInput = getValidatedUserInput(userInput);

  alert(`Your choice: ${validatedInput}`);
  let computersChoice =
    computerChoice[Math.random().toString(3).substring(2, 3)];

  alert(
    `Your choice: ${validatedInput} and Computer's choice: ${computersChoice},\noutcome: ${getGameOutput(
      validatedInput,
      computersChoice
    )}`
  );
}
