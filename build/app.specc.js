"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var mongoose_1 = __importDefault(require("mongoose"));
// import mongooseLoader from "./loaders/mongoose";
describe("GET /api/books", function () {
    var server;
    beforeEach(function () {
        server = require("./app");
    });
    afterAll(function (done) {
        mongoose_1.default.connection.close();
        done();
    });
    it("responds to /", function (done) {
        setTimeout(function () {
            supertest_1.default(server).get("/api/books/").expect(200, done);
        }, 4000);
    });
});
