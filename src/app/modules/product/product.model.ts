import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const VariantSchema: Schema = new Schema<TVariant>({
  type: { type: String, required: [true, "Variant type is required"] },
  value: { type: String, required: [true, "Variant value is required"] },
});

const InventorySchema: Schema = new Schema<TInventory>({
  quantity: { type: Number, required: [true, "Quantity is required"] },
  inStock: { type: Boolean, required: [true, "InStock status is required"] },
});

const ProductSchema: Schema = new Schema<TProduct>(
  {
    name: { type: String, required: [true, "Product name is required"] },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: { type: Number, required: [true, "Product price is required"] },
    category: {
      type: String,
      required: [true, "Product category is required"],
    },
    tags: {
      type: [String],
      required: [true, "At least one product tag is required"],
    },
    variants: {
      type: [VariantSchema],
      required: [true, "Product variants are required"],
    },
    inventory: {
      type: InventorySchema,
      required: [true, "Product inventory details are required"],
    },
  },
  {
    timestamps: true,
  }
);
export const Product = model("Product", ProductSchema);
