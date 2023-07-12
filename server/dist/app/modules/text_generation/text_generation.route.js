"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateRoute = void 0;
const express_1 = __importDefault(require("express"));
const text_generation_controller_1 = require("./text_generation.controller");
const text_generation_validation_1 = require("./text_generation.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(text_generation_validation_1.TextGenerationValidation.createTextGenerationZodSchema), text_generation_controller_1.GenerateController.generateText);
exports.GenerateRoute = router;
