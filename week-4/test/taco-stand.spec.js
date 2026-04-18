/**
 * Author: Leslie Espino
 * Date: April 19th, 2026
 * File Name: taco-stand.spec.js
 * Description: Unit tests for the TacoStandEmitter class methods using Node.js assert.
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

function testServeCustomer() {
  try {
    const tacoStand = new TacoStandEmitter();
    let result = "";

    tacoStand.on("serve", (customer) => {
      result = customer;
    });

    tacoStand.serveCustomer("John");
    assert.strictEqual(result, "John");

    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

function testPrepareTaco() {
  try {
    const tacoStand = new TacoStandEmitter();
    let result = "";

    tacoStand.on("prepare", (taco) => {
      result = taco;
    });

    tacoStand.prepareTaco("beef");
    assert.strictEqual(result, "beef");

    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

function testHandleRush() {
  try {
    const tacoStand = new TacoStandEmitter();
    let result = "";

    tacoStand.on("rush", (rush) => {
      result = rush;
    });

    tacoStand.handleRush("lunch");
    assert.strictEqual(result, "lunch");

    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();
