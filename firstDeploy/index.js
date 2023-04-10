const http = require("node:http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (req.url == "/motaz") {
    res.writeHead(200);
    res.end(
      `hello to my best borther in the life and to the best TARIK ${url.slice(
        1
      )}`
    );
  } else {
    res.writeHead(200);
    res.end(`Hello To me first deploy in my life ${url.slice(1)}`);
  }
});
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("server is working on port 3000");
});
