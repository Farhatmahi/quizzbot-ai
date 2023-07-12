"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const all_saved_questions_route_1 = require("../modules/all_saved_questions/all_saved_questions.route");
const text_generation_route_1 = require("../modules/text_generation/text_generation.route");
const router = express_1.default.Router();
const routes = [
    {
        path: '/users',
        route: user_route_1.UserRoute,
    },
    {
        path: '/all-saved-questions',
        route: all_saved_questions_route_1.AllSavedQuestionsRoute,
    },
    {
        path: '/generate',
        route: text_generation_route_1.GenerateRoute,
    },
];
routes.forEach(route => {
    router.use(route.path, route.route);
});
exports.default = router;
