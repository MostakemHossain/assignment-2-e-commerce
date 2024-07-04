import { z } from "zod";

const createOrderSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email format"),
  productId: z.string({
    required_error: "Product ID is required",
  }),
  price: z
    .number({
      required_error: "Price is required",
    })
    .positive(),
  quantity: z
    .number({
      required_error: "Quantity is required",
    })
    .positive(),
});

export const orderValidation = {
  createOrderSchema,
};
