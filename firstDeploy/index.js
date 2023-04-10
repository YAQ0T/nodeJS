const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url == "/motaz") {
    res.writeHead(200);
    res.end(
      `hello to my best borther in the life and to the best TARIK ${req.url}`
    );
  } else {
    res.writeHead(200);
    res.end(`Hello To me first deploy in my life ${req.url}`);
  }
});
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("server is working on port 3000");
});
