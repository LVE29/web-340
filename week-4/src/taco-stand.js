/**
 * Author: Leslie Espino
 * Date: April 19th, 2026
 * File Name: taco-stand.js
 * Description: Defines the TacoStandEmitter class which extends EventEmitter and emits events for serving customers, preparing tacos, and handling rushes.
 */

"use strict";

const EventEmitter = require("events");

class TacoStandEmitter extends EventEmitter {
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;
