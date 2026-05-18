"use strict";

const fs = require("fs").promises;
const path = require("path");

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();

    ({ createCharacter, getCharacters } = require("../src/character-creation"));
  });

  test("createCharacter writes a new character to the file", async () => {
    const character = {
      name: "Aragorn",
      class: "Ranger",
    };

    await createCharacter(character);

    const data = await fs.readFile(
      path.join(__dirname, "../src/characters.json"),
      "utf8",
    );

    const parsedData = JSON.parse(data);

    expect(parsedData.name).toBe("Aragorn");
  });

  test("getCharacters reads characters from the file and returns a parsed object", async () => {
    const character = {
      name: "Legolas",
      class: "Archer",
    };

    await fs.writeFile(
      path.join(__dirname, "../src/characters.json"),
      JSON.stringify(character),
      "utf8",
    );

    const result = await getCharacters();

    expect(result).toEqual(character);
  });

  test("getCharacters throws a meaningful error when the file does not exist", async () => {
    await fs.unlink(path.join(__dirname, "../src/characters.json"));

    await expect(getCharacters()).rejects.toThrow(
      "Character file does not exist",
    );
  });
});
