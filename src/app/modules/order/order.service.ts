import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createAOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};
const getAllOrder = async () => {
  const result = await Order.find({});
  return result;
};

export const orderService = {
  createAOrder,
  getAllOrder,
};
