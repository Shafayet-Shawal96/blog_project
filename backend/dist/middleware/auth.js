"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresAuth = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const requiresAuth = (req, res, next) => {
    console.log(`Check session ${req.session}`);
    console.log(`Check cookies ${req.cookies}`);
    if (req.session.userId) {
        next();
    }
    else if (req.cookies.userId) {
        req.session.userId = req.cookies.userId;
    }
    else {
        next((0, http_errors_1.default)(401, "User not authenticated"));
    }
};
exports.requiresAuth = requiresAuth;
