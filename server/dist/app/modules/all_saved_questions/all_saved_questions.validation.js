"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllSavedQuestionsValidation = void 0;
const zod_1 = require("zod");
const createSavedQuestionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.object({
            how_many_questions: zod_1.z.string({
                required_error: 'How many question is required',
            }),
            paste_text: zod_1.z.string({
                required_error: 'Text is required',
            }),
            language: zod_1.z.string({
                required_error: 'Language is required',
            }),
            difficulty: zod_1.z.string({
                required_error: 'Difficulty is required',
            }),
            number_of_sets: zod_1.z.string({
                required_error: 'Number of sets is required',
            }),
            title: zod_1.z.string({
                required_error: 'Title is required',
            }),
            generatedText: zod_1.z.string({
                required_error: 'Generated text is required',
            }),
        }),
    }),
});
exports.AllSavedQuestionsValidation = { createSavedQuestionZodSchema };
