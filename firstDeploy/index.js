const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;

  if (req.url == "/motaz") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("{{name}}", url.slice(1).toUpperCase());
    res.end(html);
  } else {
    res.writeHead(200);
    res.end(`Hello To me first deploy in my life ${url.slice(1)}`);
  }
});
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("server is working on port 3000");
});
