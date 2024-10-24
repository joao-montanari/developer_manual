alert("Welcome to secret number game!");
let secretNumber = "85";
console.log("Secret Number: ", secretNumber);
let chooseNumber = prompt("Choose a number between 1 and 100");

if (secretNumber === chooseNumber) {
    alert(`You guessed the secret number: ${secretNumber}`);
} else {
    alert("You failed :(");
}
