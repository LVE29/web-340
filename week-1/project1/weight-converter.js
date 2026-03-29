/**
 * Author: Leslie Espino
 * Date: March, 29th 2026
 * File Name: weight-converter.js
 * Description: Converts pounds to kilograms from a command line argument.
 */

"use strict";

const poundsArg = process.argv[2];

if (!poundsArg) {
  console.error("Usage: node weight-converter.js <pounds>");
  process.exit(1);
}

const pounds = Number(poundsArg);

if (isNaN(pounds)) {
  console.error("Input must be a number");
  process.exit(1);
}

const kilograms = pounds * 0.453592;
console.log(kilograms.toFixed(2));
