import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createAProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};
export const productService = {
  createAProduct,
  getAllProduct,
};
