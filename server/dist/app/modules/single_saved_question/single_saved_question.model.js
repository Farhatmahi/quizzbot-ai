"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const single_saved_question_constant_1 = require("./single_saved_question.constant");
const SingleSavedQuestionSchema = new mongoose_1.Schema({
    how_many_questions: {
        type: String,
        required: true,
        enum: single_saved_question_constant_1.howManyQuestions,
    },
    paste_text: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        enum: single_saved_question_constant_1.languages,
    },
    difficulty: {
        type: String,
        required: true,
        enum: single_saved_question_constant_1.difficulty,
    },
    number_of_sets: {
        type: String,
        required: true,
        enum: single_saved_question_constant_1.numberOfSets,
    },
    title: { type: String },
    generatedText: {
        type: String,
    },
}, {
    timestamps: true,
});
const SingleSavedQuestion = (0, mongoose_1.model)('SingleSavedQuestion', SingleSavedQuestionSchema);
exports.default = SingleSavedQuestion;
