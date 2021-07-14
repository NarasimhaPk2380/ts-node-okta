"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var mongoose_1 = __importDefault(require("mongoose"));
var okta_client_service_1 = require("./services/okta-client.service");
var mock_data_1 = require("./helpers/tests/mock-data");
describe("GET /api/books to handle the failure cases", function () {
    var server;
    var accessToken;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        var oktaClientService, tokenData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    server = require("./app");
                    if (!!accessToken) return [3 /*break*/, 2];
                    oktaClientService = new okta_client_service_1.OktaClientService();
                    return [4 /*yield*/, oktaClientService.getToken()];
                case 1:
                    tokenData = _a.sent();
                    accessToken = "Bearer " + (tokenData === null || tokenData === void 0 ? void 0 : tokenData.access_token);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); });
    afterAll(function (done) {
        mongoose_1.default.connection.close();
        done();
    });
    it("should throw error not found", function (done) {
        supertest_1.default(server).get("/api").expect(404, done);
    });
    it("responds to /", function (done) {
        supertest_1.default(server)
            .get("/api/books/")
            .set({ Authorization: accessToken })
            .expect(200, done);
    });
    it("should validate schema", function (done) {
        supertest_1.default(server)
            .post("/api/books")
            .set({ Authorization: accessToken })
            .then(function (data) {
            expect(data.body.message).toContain('"name" is required');
            done();
        });
    });
    it("should get error when Authorisation is not provided", function (done) {
        supertest_1.default(server)
            .get("/api/books")
            .then(function (data) {
            expect(data.body).toEqual({
                statusCode: 400,
                message: "You must send an Authorization header",
            });
            done();
        });
    });
    it("should get error when Authorisation does not have Bearer in it", function (done) {
        supertest_1.default(server)
            .get("/api/books")
            .set({ Authorization: "accessToken" })
            .then(function (data) {
            expect(data.body).toEqual({
                statusCode: 400,
                message: "Expected a Bearer token",
            });
            done();
        });
    });
    it("should throw error when book id is invalid for retriving books", function (done) {
        supertest_1.default(server)
            .get("/api/books/546")
            .set({ Authorization: accessToken })
            .then(function (data) {
            console.log(data.body);
            expect(data.body).toEqual({
                statusCode: 404,
                message: "BookId is not found",
            });
            done();
        });
    });
    it("should throw error when book id is invalid for update", function (done) {
        supertest_1.default(server)
            .put("/api/books/546")
            .send(mock_data_1.bookData)
            .set({ Authorization: accessToken })
            .then(function (data) {
            expect(data.body).toEqual({
                statusCode: 404,
                message: "BookId is not found",
            });
            done();
        });
    });
    it("should throw error when book id is invalid for delete", function (done) {
        supertest_1.default(server)
            .delete("/api/books/546")
            .set({ Authorization: accessToken })
            .then(function (data) {
            expect(data.body).toEqual({
                statusCode: 404,
                message: "BookId is not found",
            });
            done();
        });
    });
    it("should throw error when book id is invalid for reviews", function (done) {
        supertest_1.default(server)
            .get("/api/books/546/reviews")
            .set({ Authorization: accessToken })
            .then(function (data) {
            expect(data.body).toEqual({
                statusCode: 404,
                message: "BookId is not found",
            });
            done();
        });
    });
    it("should throw error when book id is invalid for review to create", function (done) {
        supertest_1.default(server)
            .post("/api/books/546/reviews")
            .send(mock_data_1.reviewData)
            .set({ Authorization: accessToken })
            .then(function (data) {
            expect(data.body).toEqual({
                statusCode: 404,
                message: "BookId is not found",
            });
            done();
        });
    });
    it("should throw error when book_id or review_id is invalid to get review", function (done) {
        supertest_1.default(server)
            .get("/api/books/546/reviews/324")
            .set({ Authorization: accessToken })
            .then(function (data) {
            console.log(data.body);
            expect(data.body).toEqual({
                statusCode: 404,
                message: "Either BookId or Review Id is not found",
            });
            done();
        });
    });
    it("should throw error when book_id or review_id is invalid to update review", function (done) {
        supertest_1.default(server)
            .put("/api/books/546/reviews/324")
            .send(mock_data_1.reviewData)
            .set({ Authorization: accessToken })
            .then(function (data) {
            expect(data.body).toEqual({
                statusCode: 404,
                message: "Either BookId or Review Id is not found",
            });
            done();
        });
    });
    it("should throw error when book_id or review_id is invalid to delete review", function (done) {
        supertest_1.default(server)
            .delete("/api/books/546/reviews/324")
            .set({ Authorization: accessToken })
            .then(function (data) {
            expect(data.body).toEqual({
                statusCode: 404,
                message: "Either BookId or Review Id is not found",
            });
            done();
        });
    });
});
