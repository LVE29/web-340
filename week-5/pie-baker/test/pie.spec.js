/**
 * Author: Leslie Espino
 * Date: April 27th, 2026
 * File Name: pie.spec.js
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

test("bakes pie successfully with all ingredients", () => {
  const result = bakePie("apple", ["flour", "sugar", "butter"]);
  expect(result).toBe("apple pie baked successfully!");
});

test("warns and exits when ingredients are missing", () => {
  console.warn = jest.fn();
  process.exit = jest.fn();

  bakePie("apple", ["flour", "sugar"]); // missing butter

  expect(console.warn).toHaveBeenCalled();
  expect(process.exit).toHaveBeenCalledWith(1);
});

test("warns when multiple required ingredients are missing", () => {
  console.warn = jest.fn();
  process.exit = jest.fn();

  bakePie("cherry", ["flour"]);

  expect(console.warn).toHaveBeenCalledWith(
    "Missing ingredients: sugar, butter",
  );
  expect(process.exit).toHaveBeenCalledWith(1);
});
