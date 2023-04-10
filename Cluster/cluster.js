const cluster = require("node:cluster");
const http = require("node:http");
let clusters = new Set();
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log("im main cluster");
  for (let i = 0; i < numCPUs - 6; i++) {
    cluster.fork();
  }

  // Listen for workers to come online
  cluster.on("online", (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

  // Listen for workers to exit
  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} died with code ${code} and signal ${signal}`
    );
    // Restart the worker
    cluster.fork();
  });
} else {
  console.log("im child");
  const server = http.createServer((req, res) => {
    if (req.url == "/A") {
      res.writeHead(200);
      res.end("hello to home");
    } else if (req.url == "/H") {
      for (i = 0; i < 10000000000; i++);
      res.writeHead(200);
      res.end("hello to not home");
    }
  });
  server.listen(7000, () => {
    console.log("listen to  7000");
  });
}
