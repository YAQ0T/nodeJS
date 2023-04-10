#!/usr/bin/env node
console.log("firstYaqotCli");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fetch = require("node-fetch");

const PrintFiveMoves = async (pokeName) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  try {
    let count = 0;
    const pokemon = await response.json();
    const moves = pokemon.moves.map((i) => {
      if (count > 5) {
        console.log("hi");
        throw new Error("i cant do more");
      }

      count++;
      console.log(i.move.name);
    });
  } catch (error) {
    console.log(error);
  }
};
rl.question("Enter the pokemon Name", (ans) => {
  PrintFiveMoves(ans);
  rl.close();
});
// PrintFiveMoves(process.argv[2]);
