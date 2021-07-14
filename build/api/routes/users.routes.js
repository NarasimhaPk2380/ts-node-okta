"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
exports.default = (function (app) {
    app.use("/oktauser", router);
    router.get("/token", controllers_1.usersController.getAccessToken.bind(controllers_1.usersController));
});
