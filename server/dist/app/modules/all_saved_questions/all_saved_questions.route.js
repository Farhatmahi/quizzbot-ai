"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllSavedQuestionsRoute = void 0;
const express_1 = __importDefault(require("express"));
const all_saved_questions_controller_1 = require("./all_saved_questions.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const all_saved_questions_validation_1 = require("./all_saved_questions.validation");
const router = express_1.default.Router();
router.get('/:userId', all_saved_questions_controller_1.AllSavedQuestionsController.getAllSavedQuestions);
router.get('/single-question/:questionId', all_saved_questions_controller_1.AllSavedQuestionsController.getSingleSavedQuestion);
router.post('/:userId', (0, validateRequest_1.default)(all_saved_questions_validation_1.AllSavedQuestionsValidation.createSavedQuestionZodSchema), all_saved_questions_controller_1.AllSavedQuestionsController.addSavedQuestion);
router.patch('/:questionId', all_saved_questions_controller_1.AllSavedQuestionsController.updateSingleSavedQuestion);
router.delete('/:questionId', all_saved_questions_controller_1.AllSavedQuestionsController.deleteSingleSavedQuestion);
exports.AllSavedQuestionsRoute = router;
