const { z } = require("zod");

const userRegistrationSchema = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(6),
});

const userSignInSchema = z.object({
    username: z.string().email(),
    password: z.string(),
});

const userDataUpdateSchema = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});

module.exports = {
    userRegistrationSchema,
    userSignInSchema,
    userDataUpdateSchema,
}