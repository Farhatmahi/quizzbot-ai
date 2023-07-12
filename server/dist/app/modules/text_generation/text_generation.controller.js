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
exports.GenerateController = exports.generateText = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendReponse_1 = __importDefault(require("../../../shared/sendReponse"));
const http_status_1 = __importDefault(require("http-status"));
const text_generation_service_1 = require("./text_generation.service");
exports.generateText = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const prompt = req.body.prompt;
    const result = yield text_generation_service_1.TextGenerationService.generateText(prompt);
    (0, sendReponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Generated text successfully',
        data: result,
    });
}));
exports.GenerateController = { generateText: exports.generateText };
