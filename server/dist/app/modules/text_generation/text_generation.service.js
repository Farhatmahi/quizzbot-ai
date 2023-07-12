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
exports.TextGenerationService = void 0;
const openai_1 = require("openai");
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const generateText = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const configuration = new openai_1.Configuration({
        apiKey: config_1.default.openai_api_key,
    });
    const openai = new openai_1.OpenAIApi(configuration);
    const generatedTextResponse = yield openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${prompt}`,
        temperature: 0,
        max_tokens: 300,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
    });
    const generatedText = ((_a = generatedTextResponse.data.choices) === null || _a === void 0 ? void 0 : _a[0].text) || '';
    if (!generatedText) {
        throw new ApiError_1.default(400, 'Failed to generate response');
    }
    //   // Create a new text generation document
    //   const textGeneration = new TextGeneration({
    //     prompt: prompt,
    //     generatedText,
    //   })
    // //   Save the generated text
    //   await textGeneration.save()
    return generatedText;
});
exports.TextGenerationService = { generateText };
