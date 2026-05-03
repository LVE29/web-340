const http = require("http");
const server = require("../src/server");

describe("Server Routes", () => {
  let testServer;

  beforeAll((done) => {
    testServer = server.listen(3001, done);
  });

  afterAll((done) => {
    testServer.close(done);
  });

  test("GET /view should return 200", (done) => {
    http.get("http://localhost:3001/view", (res) => {
      expect(res.statusCode).toBe(200);

      res.on("data", () => {});
      res.on("end", () => {
        done();
      });
    });
  });

  test("POST /create should create a character", (done) => {
    const options = {
      hostname: "localhost",
      port: 3001,
      path: "/create?class=Warrior&gender=Male&fact=Has%20a%20dragon%20pet",
      method: "POST",
    };

    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);

      res.on("data", () => {});
      res.on("end", () => {
        done();
      });
    });

    req.on("error", (err) => done(err));
    req.end();
  });

  test("POST /confirm should confirm the character", (done) => {
    const options = {
      hostname: "localhost",
      port: 3001,
      path: "/confirm",
      method: "POST",
    };

    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);

      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        const result = JSON.parse(data);
        expect(result.confirmed).toBe(true);
        done();
      });
    });

    req.on("error", (err) => done(err));
    req.end();
  });
});
