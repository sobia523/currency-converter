#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Wellcome to 'SyedaSobia' - Currency Converter\n"));


// define the list of currencies and their exchange rates
let exchangeRate: any = {
    "USD": 1, // Base currency
    "EUR": 0.9, // European currency (Euro)
    "JYP": 113, // Japanese currency (Yen)
    "CAD": 1.3, // Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR": 277.70, // Pakistani Rupes
    // Add more currencies and their exchange rates here
}

// Promt the user to select currencies to convert from and to
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// perform currrency conversion by using formula
let fromAmount = exchangeRate [userAnswer.from_currency];
let toAmount = exchangeRate [userAnswer.to_currency];
let amount = userAnswer.amount

// Formula of Conversion
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

// Display the converted amount
console.log(`Converted Amount = ${chalk.green(convertedAmount.toFixed(3))}`);