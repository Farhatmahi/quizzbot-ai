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
exports.AllSavedQuestionsController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const all_saved_questions_service_1 = require("./all_saved_questions.service");
const sendReponse_1 = __importDefault(require("../../../shared/sendReponse"));
const http_status_1 = __importDefault(require("http-status"));
const addSavedQuestion = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { how_many_questions, paste_text, language, difficulty, number_of_sets, title, generatedText, } = req.body.question;
    const userId = req.params.userId;
    const singleSavedQuestionData = {
        how_many_questions,
        paste_text,
        language,
        difficulty,
        number_of_sets,
        title,
        generatedText,
    };
    const result = yield all_saved_questions_service_1.AllSavedQuestionsService.addSavedQuestion(singleSavedQuestionData, userId);
    (0, sendReponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Question saved successfully',
        data: result,
    });
}));
const getAllSavedQuestions = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const result = yield all_saved_questions_service_1.AllSavedQuestionsService.getAllSavedQuestions(userId);
    (0, sendReponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All questions retrieved successfully',
        data: result,
    });
}));
const getSingleSavedQuestion = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questionId = req.params.questionId;
    // console.log(questionId)
    const result = yield all_saved_questions_service_1.AllSavedQuestionsService.getSingleSavedQuestion(questionId);
    (0, sendReponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Question retrieved successfully',
        data: result,
    });
}));
const updateSingleSavedQuestion = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questionId = req.params.questionId;
    const { userId, text } = req.body;
    const result = yield all_saved_questions_service_1.AllSavedQuestionsService.updateSingleSavedQuestion(userId, questionId, text);
    (0, sendReponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Question updated successfully',
        data: result,
    });
}));
const deleteSingleSavedQuestion = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questionId = req.params.questionId;
    const { userId } = req.body;
    const result = yield all_saved_questions_service_1.AllSavedQuestionsService.deleteSingleSavedQuestion(userId, questionId);
    (0, sendReponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Question deleted successfully',
        data: result,
    });
}));
exports.AllSavedQuestionsController = {
    getAllSavedQuestions,
    addSavedQuestion,
    getSingleSavedQuestion,
    updateSingleSavedQuestion,
    deleteSingleSavedQuestion,
};
