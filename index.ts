#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to number guessing game!")

const randomNumber = Math.floor(Math.random()* 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-6 ",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("congratulation! your guessed right number.");
} else {
  console.log("you guessed wrong number.");
}
