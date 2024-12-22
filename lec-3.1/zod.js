const z = require("zod");

// const mySchema = z.string();

// const resultString = mySchema.safeParse("name");

// console.log(resultString.success ? true : false);

// const resultInteger = mySchema.safeParse(12);

// if(!resultInteger.success) {
//     console.log("Something's wrong with the inputs!");
// }

/**
 * If you need something specific such as:
 * email: string, should be an email;
 * password: atleast 6 characters;
 * country: "IN"/"US"
 */

const customSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    country: z.enum(["IN", "US"]),
});