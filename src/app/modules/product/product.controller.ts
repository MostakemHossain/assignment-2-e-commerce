import { Request, Response } from "express";
import { productService } from "./product.service";
import { productValidation } from "./product.validation";

const createAProduct = async (req: Request, res: Response) => {
  try {
    const validateData = productValidation.createProductSchema.parse(req.body);
    const result = await productService.createAProduct(validateData);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
export const productController = {
  createAProduct,
};
