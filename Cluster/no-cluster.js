const http = require("node:http");
const server = http.createServer((req, res) => {
  if (req.url === "/A") {
    res.end("hello to home");
  } else {
    for (let index = 0; index < 10000000000; index++) {}
    res.end("hello to not home");
  }
});

server.listen(8000, () => {
  console.log("listen to  8000");
});
