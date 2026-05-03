const http = require("http");
const url = require("url");

let character = null;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // GET /view
  if (req.method === "GET" && parsedUrl.pathname === "/view") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character || {}));
  }

  // POST /create
  else if (req.method === "POST" && parsedUrl.pathname === "/create") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const { class: charClass, gender, fact } = parsedUrl.query;

      character = {
        class: charClass,
        gender,
        fact,
        confirmed: false,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    });
  }

  // 👇 THIS IS THE NEW ONE (POST /confirm)
  else if (req.method === "POST" && parsedUrl.pathname === "/confirm") {
    if (character) {
      character.confirmed = true;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character || {}));
  }

  // 404
  else {
    res.writeHead(404);
    res.end();
  }
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
}

module.exports = server;
