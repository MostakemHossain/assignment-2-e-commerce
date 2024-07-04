import { Document, Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder & Document>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product ID is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
  },
  { timestamps: true }
);

export const Order = model("Order", orderSchema);
