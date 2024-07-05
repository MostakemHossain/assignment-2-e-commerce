import { TProduct } from "../product/product.interface";
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createAOrder = async (payload: TOrder) => {
  const productDetails: TProduct | null = await Product.findById(
    payload.productId
  );

  if (!productDetails) {
    throw new Error("Product not found");
  }
  if (productDetails.inventory.quantity < payload.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  productDetails.inventory.quantity -= payload.quantity;

  productDetails.inventory.inStock = true;

  if (productDetails.inventory.quantity === 0) {
    productDetails.inventory.inStock = false;
  }

  await Product.findByIdAndUpdate(payload.productId, {
    inventory: productDetails.inventory,
  });
  const result = await Order.create(payload);

  return result;
};

const getAllOrder = async () => {
  const result = await Order.find({});
  return result;
};
const getOrderViaEmail = async (email: string) => {
  const result = await Order.find({ email });

  if (result.length === 0) {
    throw new Error("Order not found");
  }

  return result;
};

export const orderService = {
  createAOrder,
  getAllOrder,
  getOrderViaEmail,
};
