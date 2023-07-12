"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AllSavedQuestionsSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    saved_questions: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'SingleSavedQuestion',
            required: true,
        },
    ],
}, { timestamps: true });
AllSavedQuestionsSchema.virtual('savedQuestions', {
    ref: 'SingleSavedQuestion',
    localField: 'saved_questions',
    foreignField: '_id',
    justOne: false,
});
AllSavedQuestionsSchema.set('toObject', { virtuals: true });
AllSavedQuestionsSchema.set('toJSON', { virtuals: true });
const AllSavedQuestions = (0, mongoose_1.model)('AllSavedQuestions', AllSavedQuestionsSchema);
exports.default = AllSavedQuestions;
