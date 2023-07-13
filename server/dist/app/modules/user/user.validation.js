"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.object({
            email: zod_1.z.string({
                required_error: 'Email is required',
            }),
            password: zod_1.z.string({
                required_error: 'Password is required',
            }),
            avatar: zod_1.z.string().nullable(),
            membership: zod_1.z.string().nullable(),
            transaction: zod_1.z.string().nullable(),
        }),
    }),
});
const getUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
    }),
});
exports.UserValidation = { createUserZodSchema, getUserZodSchema };
