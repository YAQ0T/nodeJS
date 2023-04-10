const EventEmitter = require("node:events");

class BadWords extends EventEmitter {
  constructor() {
    super();
    this.NoOfBadWords = 0;
  }

  plusOne(badWord) {
    this.NoOfBadWords++;
    this.emit("badWord", badWord);
  }
  displayNoOfBadWords() {
    console.log(this.NoOfBadWords);
  }
}
module.exports = BadWords;
