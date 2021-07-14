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
Object.defineProperty(exports, "__esModule", { value: true });
var mocking_funtions_1 = require("../../helpers/tests/mocking-funtions");
var okta_client_service_1 = require("../../services/okta-client.service");
var users_controller_1 = require("./users.controller");
var dummyTokenData = {
    token_type: "Bearer",
    expires_in: 3600,
    access_token: "eyJraWQiOiJIekN2MWhPNUZwNzRqcWJPcEpTd0RldXJqdnI0aDM0bWpWNzNXeVI1dUFFIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjRrQ0EyYnRlWkxUcDFYVnJyZlFnS3dta1RFZFN0ODZvS1JQM3liNXVHU2MiLCJpc3MiOiJodHRwczovL2Rldi05MzE3NzgyMy5va3RhLmNvbS9vYXV0aDIvYXVzMThkaHU5dmZvRThueWU1ZDciLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjI2MjQ5OTAwLCJleHAiOjE2MjYyNTM1MDAsImNpZCI6IjBvYTE1YnJ3bndkZ2t4RG9XNWQ3Iiwic2NwIjpbImF1dGhvcmlzZSJdLCJzdWIiOiIwb2ExNWJyd253ZGdreERvVzVkNyJ9.GnSWl_OWid7GTlnRJxAWug3Fx73i8J7xIKhY2-1ZpU1InBGEyU4keNICjarcQ3BaTqWmAvsC2Qc3Vr4IVC60QJZzIqvVltX01ZTf6UShyLzf_F0mJ8LpOZj7wnCI45Hgo4OQYjCk_dGlMIiNpwAKIJE_I6NsNPxtaeBsrrNh53Cy61MeW9w0loyCFS_CjVaLhHcdPc3gKoQrxGjfM4k9WQFee0PQSrjKe39jR5NDlUX28nywNRPpfQotbel-mWeNOuJbn4vaxe3TqlCLcMP7uwpw3hDwbHUWFn8fzdDRaPBdItOXHAoMASpG1s-QPhwZGNFjJD8guZHlX41XxybmLA",
    scope: "authorise",
};
var availableMethodsInOktaClientSrvc = {
    getToken: dummyTokenData,
};
describe("UsersController", function () {
    var usersController;
    var OktaClientServiceMock = okta_client_service_1.OktaClientService;
    var instanceOfOktaClientServiceMock = new OktaClientServiceMock();
    mocking_funtions_1.createMocks(instanceOfOktaClientServiceMock, availableMethodsInOktaClientSrvc, false);
    beforeEach(function () {
        usersController = new users_controller_1.UsersController();
        usersController.oktaClientService = instanceOfOktaClientServiceMock;
    });
    it("Should create", function () {
        expect(usersController).toBeTruthy();
    });
    it("Should get the token data", function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = mocking_funtions_1.mockResponse();
                    return [4 /*yield*/, usersController.getAccessToken({}, res, mocking_funtions_1.mockNext)];
                case 1:
                    _a.sent();
                    expect(res.status).toHaveBeenCalledWith(200);
                    expect(res.json).toHaveBeenCalledWith(dummyTokenData);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("UsersController for failure case", function () {
    var usersController;
    var OktaClientServiceMock = okta_client_service_1.OktaClientService;
    var instanceOfOktaClientServiceMock = new OktaClientServiceMock();
    mocking_funtions_1.createMocks(instanceOfOktaClientServiceMock, availableMethodsInOktaClientSrvc, true);
    beforeEach(function () {
        usersController = new users_controller_1.UsersController();
        usersController.oktaClientService = instanceOfOktaClientServiceMock;
    });
    it("Should get failed the token data", function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = mocking_funtions_1.mockResponse();
                    return [4 /*yield*/, usersController.getAccessToken({}, res, mocking_funtions_1.mockNext)];
                case 1:
                    _a.sent();
                    expect(mocking_funtions_1.mockNext).toHaveBeenCalledWith("Failed");
                    return [2 /*return*/];
            }
        });
    }); });
});
