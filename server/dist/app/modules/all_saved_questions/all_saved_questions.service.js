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
exports.AllSavedQuestionsService = void 0;
const all_saved_questions_model_1 = __importDefault(require("./all_saved_questions.model"));
const single_saved_question_model_1 = __importDefault(require("../single_saved_question/single_saved_question.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const addSavedQuestion = (singleSavedQuestionData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const singleSavedQuestion = new single_saved_question_model_1.default(singleSavedQuestionData);
    yield singleSavedQuestion.save();
    let allSavedQuestions = yield all_saved_questions_model_1.default.findOne({ user: userId })
        .populate('savedQuestions')
        .exec();
    if (!allSavedQuestions) {
        allSavedQuestions = new all_saved_questions_model_1.default({
            user: userId,
            saved_questions: [singleSavedQuestion],
        });
    }
    else {
        allSavedQuestions.saved_questions.push(singleSavedQuestion);
    }
    yield allSavedQuestions.save();
    allSavedQuestions = yield all_saved_questions_model_1.default.findById(allSavedQuestions._id).populate({
        path: 'saved_questions',
        model: 'SingleSavedQuestion',
        options: { sort: { createdAt: -1 } },
    });
    return allSavedQuestions;
});
const getAllSavedQuestions = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    let allSavedQuestions = yield all_saved_questions_model_1.default.findOne({ user: userId })
        .populate({
        path: 'saved_questions',
        model: 'SingleSavedQuestion',
        options: { sort: { createdAt: -1 } },
    })
        .exec();
    if (!allSavedQuestions) {
        return {
            _id: null,
            user: userId,
            saved_questions: [],
            __v: 0,
        };
    }
    allSavedQuestions = yield all_saved_questions_model_1.default.findById(allSavedQuestions._id)
        .populate({
        path: 'saved_questions',
        model: 'SingleSavedQuestion',
    })
        .exec();
    return allSavedQuestions;
});
const getSingleSavedQuestion = (questionId) => __awaiter(void 0, void 0, void 0, function* () {
    const question = yield single_saved_question_model_1.default.findById(questionId);
    // console.log(question)
    return question;
});
const updateSingleSavedQuestion = (userId, questionId, title, generatedText) => __awaiter(void 0, void 0, void 0, function* () {
    const allSavedQuestion = yield all_saved_questions_model_1.default.findOne({
        user: userId,
    }).populate('saved_questions');
    if (!allSavedQuestion) {
        throw new Error('Question not found');
    }
    const savedQuestion = allSavedQuestion.saved_questions.find((question) => question._id.equals(new mongoose_1.default.Types.ObjectId(questionId)));
    if (!savedQuestion) {
        throw new Error('Question not found');
    }
    savedQuestion.title = title;
    savedQuestion.generatedText = generatedText;
    yield savedQuestion.save();
    return savedQuestion;
});
const deleteSingleSavedQuestion = (userId, questionId) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(`userId : ${userId}, question id : ${questionId}`)
    const allSavedQuestion = yield all_saved_questions_model_1.default.findOne({
        user: userId,
    }).populate('saved_questions');
    if (!allSavedQuestion) {
        throw new Error('Question not found');
    }
    const savedQuestionIndex = allSavedQuestion.saved_questions.findIndex((question) => question._id.equals(new mongoose_1.default.Types.ObjectId(questionId)));
    if (savedQuestionIndex === -1) {
        throw new Error('Question not found');
    }
    // Remove the saved question from the array
    allSavedQuestion.saved_questions.splice(savedQuestionIndex, 1);
    yield allSavedQuestion.save();
    return 'Saved question deleted successfully';
});
exports.AllSavedQuestionsService = {
    addSavedQuestion,
    getAllSavedQuestions,
    getSingleSavedQuestion,
    updateSingleSavedQuestion,
    deleteSingleSavedQuestion,
};
