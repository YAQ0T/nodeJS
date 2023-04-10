const { log } = require("node:console");
const fs = require("node:fs");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data + "hellllo");
  }
});
const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContent);

fs.writeFileSync("./greet.txt", "helloWorld");

fs.writeFile("./greet.txt", "async", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file done");
  }
});

fs.watchFile("greet.txt", (curr, prev) => {
  console.log(curr);
  console.log(prev);
});
