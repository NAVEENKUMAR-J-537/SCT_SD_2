let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const result = document.getElementById('result');
    
    if (isNaN(userGuess)) {
        result.textContent = "Please enter a valid number!";
        return;
    }
    
    attempts++;
    
    if (userGuess === randomNumber) {
        result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('guessInput').disabled = true;
    } else if (userGuess < randomNumber) {
        result.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        result.textContent = "Too high! Try again.";
    }
}
