/**
 * Author: Leslie Espino
 * Date: April 5th, 2026
 * File Name: recipes.js
 * Description: This module provides functions to create a recipe, set a timer, and quit the program.
 */

function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(", ")}`;
}

function setTimer(minutes) {
  return `Timer set for ${minutes} minutes`;
}

function quit() {
  return "Program exited";
}

module.exports = {
  createRecipe,
  setTimer,
  quit,
};
