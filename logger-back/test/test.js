const assert = require("chai").assert;
const server = require("../app.js");
const request = require("http");

(async () => {
  const injectOptions = {
    name: "inject-then",
    version: "1.0.0"
  };
  await server.register([
    {
      plugin: require("inject-then"),
      options: injectOptions,
      name: "inject-then"
    }
  ]);
})();

describe("Server Testing", function() {
  it("should validate if server is running", function() {
    return server
      .injectThen({
        method: "GET",
        url: "/api"
      })
      .then(function(response) {
        assert.equal(
          response.payload,
          "Hello, Logging is working",
          "Text should be Hello, Logging is working"
        );
      });
  });

  it("should validate if server is running", function() {
    return server
      .injectThen({
        method: "GET",
        url: "/api/logs"
      })
      .then(function(response) {
        assert.equal(response.payload, [], "Output should be an array of logs");
      });
  });
  it("should invalidate if server is running", function() {
    return server
      .injectThen({
        method: "GET",
        url: "/api/log/{id}"
      })
      .then(function(response) {
        assert.equal(response.payload, {}, "Output should be a log object");
      });
  });

  it("should invalidate if server is running", function() {
    return server
      .injectThen({
        method: "POST",
        url: "/api/log"
      })
      .then(function(response) {
        assert.equal(response.payload, {}, "Output should be a log object");
      });
  });
});
