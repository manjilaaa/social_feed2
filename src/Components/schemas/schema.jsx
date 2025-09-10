import { z } from "zod";

 export const addSchema = z.object({
     title: z.string().min(1,"Title is required"),
     content: z.string().min(1, "Content is required"),
     url: z.url().optional(),
});


export const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(5, "Password must be at least 5 characters long"),
});
const schemas = {
  addSchema,loginSchema
};

export default schemas;