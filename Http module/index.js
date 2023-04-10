const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const superHero = {
    first: "Ahmad",
    last: "Salous",
  };
  // res.end(JSON.stringify(superHero));

  // fs.createReadStream("./index.html").pipe(res);

  res.writeHead(200, { "Content-Type": "text/HTML" });
  let html = fs.readFileSync("./index.html", "utf-8");
  const name = "Ahmad Salous ";

  html = html.replace("{{name}}", req.url.slice(1));
  res.end(html);
});
server.listen(3000, () => {
  console.log("server running on port  3000");
});
