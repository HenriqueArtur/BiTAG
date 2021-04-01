// Fix mysql connection error
let iconv = require('iconv-lite');
iconv.encodings = {};

const request = require("supertest");
const app = require("../app");

// Controller to test
// const tagController = require("../app/controllers/tag.controller.js");
// const Tag = require("../app/models/Tag");

// Models to test
// const tagModel = require("../app/models/tag.js");

// Mocks
// jest.mock('../app/models/Tag');

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
