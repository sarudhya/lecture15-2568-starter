import { z } from "zod"; //สำหรับเช็ค

// Zod Schema
export const marathonSchema = z.object({
  fname: z
    .string()
    .min(3, { message: "First name must have at least 3 letters" }),
  lname: z.string().min(5, "Last name must have at least 5 letters"),
  plan: z.enum(["funrun", "mini", "half", "full"], { 
    message: "Select a plan",
  }),
  gender: z.enum(["male", "female"], { message: "Select gender" }),
  buyBottle: z.boolean(),
  buyShoes: z.boolean(),
  buyCap: z.boolean(),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
  email: z.email(),
});
export type MarathonForm = z.infer<typeof marathonSchema>;