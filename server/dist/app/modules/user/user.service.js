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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("./user.model");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = user;
    const salt = yield bcrypt_1.default.genSalt();
    const passwordHash = yield bcrypt_1.default.hash(password, salt);
    user.password = passwordHash;
    const createdUser = yield user_model_1.User.create(user);
    if (!createUser) {
        throw new ApiError_1.default(400, 'Failed to create user');
    }
    return createdUser;
});
exports.UserService = { createUser };
