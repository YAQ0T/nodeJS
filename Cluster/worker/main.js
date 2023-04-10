const http = require("node:http");
const { Worker } = require("node:worker_threads");

http
  .createServer((req, res) => {
    if (req.url == "/A") {
      res.writeHead(200);
      res.end("Fast");
    } else if (req.url != "/A") {
      res.writeHead(200);
      const worker = new Worker("./worker.js");

      worker.on("message", (j) => {
        res.end(`Slow ${j}`);
      });
    }
  })
  .listen(8000);
