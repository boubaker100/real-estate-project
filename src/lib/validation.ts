import * as z from "zod"

export const profileSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone must be at least 10 digits."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  confirmPassword: z.string(),
  image: z
  .any()
  .refine((file) => file instanceof File, {
    message: "Please upload a valid image",
  })
  .optional()
  .nullable(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
})
