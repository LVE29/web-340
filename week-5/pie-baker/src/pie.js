/**
 * Author: Leslie Espino
 * Date: April 27th, 2026
 * File Name: pie.js
 * Description:
 */
"use strict";

function bakePie(pieType, ingredients) {
  const requiredIngredients = ["flour", "sugar", "butter"];

  const missingIngredients = requiredIngredients.filter(function (ingredient) {
    return !ingredients.includes(ingredient);
  });

  if (missingIngredients.length > 0) {
    console.warn(`Missing ingredients: ${missingIngredients.join(", ")}`);
    process.exit(1);
  }

  return `${pieType} pie baked successfully!`;
}

module.exports = { bakePie };
