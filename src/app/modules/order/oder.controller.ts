import { Request, Response } from "express";
import { Types } from "mongoose";
import { orderService } from "./order.service";
import { orderValidation } from "./order.validation";

const createAOrder = async (req: Request, res: Response) => {
  try {
    const validateData = orderValidation.createOrderSchema.parse(req.body);
    const orderData = {
      ...validateData,
      productId: new Types.ObjectId(validateData.productId),
    };
    const result = await orderService.createAOrder(orderData);
    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    let result;
    let message;

    if (email) {
      result = await orderService.getOrderViaEmail(email as string);
      message = "Orders fetched successfully for user email!";
    } else {
      result = await orderService.getAllOrder();
      message = "Orders fetched successfully!";
    }

    res.status(201).json({
      success: true,
      message: message,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
export const orderController = {
  createAOrder,
  getAllOrder,
};
