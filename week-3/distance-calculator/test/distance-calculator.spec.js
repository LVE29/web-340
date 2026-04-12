"use strict";

const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), 0.52);
    console.log("Passed: testEarthToMars");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testEarthToJupiter() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Jupiter"), 4.2);
    console.log("Passed: testEarthToJupiter");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToJupiter: ${error.message}`);
    return false;
  }
}

function testVenusToNeptune() {
  try {
    assert.strictEqual(calculateDistance("Venus", "Neptune"), 29.33);
    console.log("Passed: testVenusToNeptune");
    return true;
  } catch (error) {
    console.error(`Failed testVenusToNeptune: ${error.message}`);
    return false;
  }
}

testEarthToMars();
testEarthToJupiter();
testVenusToNeptune();
