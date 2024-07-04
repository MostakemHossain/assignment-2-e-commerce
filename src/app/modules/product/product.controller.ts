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
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProduct();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getSingleProduct(req.params.productId);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.deleteProduct(req.params.productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.updateProduct(
      req.params.productId,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
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
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
