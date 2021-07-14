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
exports.BooksController = void 0;
var books_service_1 = require("../../services/books.service");
var logger_1 = __importDefault(require("../../loaders/logger"));
var http_errors_1 = require("http-errors");
var typedi_1 = __importDefault(require("typedi"));
var BooksController = /** @class */ (function () {
    function BooksController() {
        this.booksService = typedi_1.default.get(books_service_1.BooksService);
    }
    BooksController.prototype.getBooks = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var booksList, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger_1.default.debug("Get books Api invoked");
                        return [4 /*yield*/, this.booksService.getBooks()];
                    case 1:
                        booksList = _a.sent();
                        logger_1.default.debug("Get books Api response given");
                        return [2 /*return*/, res.json(booksList).status(200)];
                    case 2:
                        e_1 = _a.sent();
                        logger_1.default.error(e_1.message);
                        next(e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.prototype.createBook = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger_1.default.debug("Create book Api invoked");
                        return [4 /*yield*/, this.booksService.createBook(req.body)];
                    case 1:
                        _a.sent();
                        logger_1.default.debug("Successfully created the book");
                        return [2 /*return*/, res
                                .json({
                                statusCode: 200,
                                message: "Successfully created the book",
                            })
                                .status(200)];
                    case 2:
                        e_2 = _a.sent();
                        logger_1.default.error(e_2.message);
                        next(e_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.prototype.getBookDetails = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var bookDetails, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger_1.default.debug("get book details Api invoked");
                        return [4 /*yield*/, this.booksService.getBookDetails(req.params.book_id)];
                    case 1:
                        bookDetails = _a.sent();
                        logger_1.default.debug("get book details response given");
                        return [2 /*return*/, res.json(bookDetails).status(200)];
                    case 2:
                        e_3 = _a.sent();
                        e_3.message = "BookId is not found";
                        logger_1.default.error(e_3.message);
                        next(new http_errors_1.NotFound(e_3.message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.prototype.updateBook = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var book, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger_1.default.debug("Update book details Api invoked");
                        return [4 /*yield*/, this.booksService.updateBook(req.params.book_id, req.body)];
                    case 1:
                        book = _a.sent();
                        if (!book) {
                            throw new Error();
                        }
                        logger_1.default.debug("Updated the book details");
                        return [2 /*return*/, res
                                .json({ statusCode: 200, message: "Successfully updated the book" })
                                .status(200)];
                    case 2:
                        e_4 = _a.sent();
                        e_4.message = "BookId is not found";
                        logger_1.default.error(e_4.message);
                        next(new http_errors_1.NotFound(e_4.message));
                        next(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.prototype.deleteBook = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deletedBook, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger_1.default.debug("Delete book Api invoked");
                        return [4 /*yield*/, this.booksService.deleteBook(req.params.book_id)];
                    case 1:
                        deletedBook = _a.sent();
                        if (!deletedBook) {
                            throw new Error();
                        }
                        logger_1.default.debug("Book is deleted");
                        return [2 /*return*/, res
                                .json({ statusCode: 200, message: "Successfully deleted the book" })
                                .status(200)];
                    case 2:
                        e_5 = _a.sent();
                        e_5.message = "BookId is not found";
                        logger_1.default.error(e_5.message);
                        next(new http_errors_1.NotFound(e_5.message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.prototype.getBookReviews = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var reviewsList, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger_1.default.debug("Get book reviews Api invoked");
                        return [4 /*yield*/, this.booksService.getBookReviews(req.params.book_id)];
                    case 1:
                        reviewsList = _a.sent();
                        if (!reviewsList) {
                            throw new Error();
                        }
                        logger_1.default.info("Book reviews response is given");
                        return [2 /*return*/, res.json(reviewsList === null || reviewsList === void 0 ? void 0 : reviewsList.reviews).status(200)];
                    case 2:
                        e_6 = _a.sent();
                        e_6.message = "BookId is not found";
                        logger_1.default.error(e_6.message);
                        next(new http_errors_1.NotFound(e_6.message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.prototype.createBookReview = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var bookReview, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger_1.default.debug("Create book review Api invoked");
                        return [4 /*yield*/, this.booksService.createBookReview(req.params.book_id, req.body)];
                    case 1:
                        bookReview = _a.sent();
                        if (!bookReview) {
                            throw new Error();
                        }
                        logger_1.default.debug("Book review is created");
                        return [2 /*return*/, res
                                .json({
                                statusCode: 200,
                                message: "Successfully created the book review",
                            })
                                .status(200)];
                    case 2:
                        e_7 = _a.sent();
                        e_7.message = "BookId is not found";
                        logger_1.default.error(e_7.message);
                        next(new http_errors_1.NotFound(e_7.message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.prototype.updateBookReview = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var bookReview, e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger_1.default.debug("Update book review Api invoked");
                        return [4 /*yield*/, this.booksService.updateBookReview(req.params.book_id, req.params.review_id, req.body)];
                    case 1:
                        bookReview = _a.sent();
                        if (!bookReview) {
                            throw new Error();
                        }
                        logger_1.default.debug("Updated the book review");
                        return [2 /*return*/, res
                                .json({
                                statusCode: 200,
                                message: "Successfully updated the book review",
                            })
                                .status(200)];
                    case 2:
                        e_8 = _a.sent();
                        e_8.message = "Either BookId or Review Id is not found";
                        logger_1.default.error(e_8.message);
                        next(new http_errors_1.NotFound(e_8.message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.prototype.getBookReview = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var bookReview, e_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logger_1.default.debug("Get book review Api invoked");
                        return [4 /*yield*/, this.booksService.getBookReview(req.params.review_id)];
                    case 1:
                        bookReview = _a.sent();
                        if (!bookReview) {
                            throw new Error();
                        }
                        logger_1.default.debug("Get book review response is given");
                        return [2 /*return*/, res.json(bookReview).status(200)];
                    case 2:
                        e_9 = _a.sent();
                        e_9.message = "Either BookId or Review Id is not found";
                        logger_1.default.error(e_9.message);
                        next(new http_errors_1.NotFound(e_9.message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.prototype.deleteBookReview = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteBookReview, e_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.debug("Delete book review Api invoked");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.booksService.deleteBookReview(req.params.book_id, req.params.review_id)];
                    case 2:
                        deleteBookReview = _a.sent();
                        if (!deleteBookReview) {
                            throw new Error();
                        }
                        logger_1.default.debug("Delete book review response is given");
                        return [2 /*return*/, res
                                .json({
                                statusCode: 200,
                                message: "Successfully deleted the book review",
                            })
                                .status(200)];
                    case 3:
                        e_10 = _a.sent();
                        e_10.message = "Either BookId or Review Id is not found";
                        logger_1.default.error(e_10.message);
                        next(new http_errors_1.NotFound(e_10.message));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return BooksController;
}());
exports.BooksController = BooksController;
