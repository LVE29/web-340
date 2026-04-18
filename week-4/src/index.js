/**
 * Author: Leslie Espino
 * Date: April 19th, 2026
 * File Name: index.js
 * Description: Command-line interface that interacts with the TacoStandEmitter class, listens for user input, and triggers events for serving customers, preparing tacos, and handling rushes.
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  const argument = args.join(" ");

  if (command === "serve") {
    tacoStand.serveCustomer(argument);
  } else if (command === "prepare") {
    tacoStand.prepareTaco(argument);
  } else if (command === "rush") {
    tacoStand.handleRush(argument);
  } else {
    console.log("Invalid command.");
  }
});

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`,
);
