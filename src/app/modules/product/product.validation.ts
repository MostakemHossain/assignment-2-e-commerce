import { z } from "zod";

const VariantSchema = z.object({
  type: z.string({
    required_error: "Variant type is required",
  }),
  value: z.string({
    required_error: "Variant value is required",
  }),
});

const InventorySchema = z.object({
  quantity: z.number({
    required_error: "Quantity is required",
  }),
  inStock: z.boolean({
    required_error: "InStock status is required",
  }),
});

const createProductSchema = z.object({
  name: z.string({
    required_error: "Product name is required",
  }),
  description: z.string({
    required_error: "Product description is required",
  }),
  price: z.number({
    required_error: "Product price is required",
  }),
  category: z.string({
    required_error: "Product category is required",
  }),
  tags: z.array(z.string(), {
    required_error: "At least one product tag is required",
  }),
  variants: z.array(VariantSchema, {
    required_error: "Product variants are required",
  }),
  inventory: InventorySchema,
});

export const productValidation = {
  createProductSchema,
};
