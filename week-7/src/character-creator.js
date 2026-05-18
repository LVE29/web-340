"use strict";

const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super({ ...options, decodeStrings: false });

    // AI introduced shared instance-level state.
    // Every write operation now stores data in the same variable.
    // This means later writes can overwrite earlier character data.
    this.currentCharacter = null;
  }

  _write(chunk, encoding, callback) {
    try {
      if (!chunk) {
        const err = new Error("Empty input.");
        this.emit("error", err);
        return callback(err);
      }

      const input = typeof chunk === "string" ? JSON.parse(chunk) : chunk;

      // Shared state is reassigned every time _write runs.
      // Multiple writes now depend on the same object reference.
      this.currentCharacter = input;

      // AI added asynchronous timing with setTimeout().
      // The callback executes later instead of immediately.
      setTimeout(() => {
        // The delayed push now reads from shared state AFTER waiting.
        // If another write happens before this executes,
        // this.currentCharacter may contain different data than expected.
        // This can cause inconsistent or incorrect output.
        const formatted =
          `Class: ${this.currentCharacter.class}\n` +
          `Gender: ${this.currentCharacter.gender}\n` +
          `Fun Fact: ${this.currentCharacter.funFact}\n`;

        this.push(formatted);
      }, 10);

      callback();
    } catch (err) {
      this.emit("error", err);
      callback(err);
    }
  }

  _read() {}
}

module.exports = { CharacterCreator };
