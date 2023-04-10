// const EventEmitter = require("node:events");
// const add = require("./add.js");

// const emitter = new EventEmitter();
const BadWords = require("./BadWords.js");

const badWord = new BadWords();
badWord.on("badWord", (badWord) => {
  console.log(badWord);
});
badWord.plusOne("bitch");
badWord.plusOne("bitch");
badWord.plusOne("bitch");
badWord.plusOne("bitch");
badWord.plusOne("bitch");

badWord.displayNoOfBadWords();

// emitter.on("Oh Shit", (badWord) => {
//   console.log(`hello ${badWord}`);
// });

// console.log(add(5, 5));

// emitter.emit(`Oh Shit`, `Son Of A Bitch ${add(5, 5)} Times 😒`);
