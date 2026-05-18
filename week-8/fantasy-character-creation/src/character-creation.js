"use strict";

const fs = require("fs").promises;
const path = require("path");

const fileName = "characters.json";
const filePath = path.join(__dirname, fileName);

async function createCharacter(character) {
  await fs.writeFile(filePath, JSON.stringify(character), "utf8");
}

async function getCharacters() {
  try {
    const data = await fs.readFile(filePath, "utf8");

    return JSON.parse(data);
  } catch (error) {
    throw new Error("Character file does not exist");
  }
}

module.exports = { createCharacter, getCharacters };
