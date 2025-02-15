const { z } = require("zod");

export const userRegistrationSchema = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(6),
});