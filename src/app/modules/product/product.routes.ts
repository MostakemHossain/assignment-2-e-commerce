import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

router.post("/", productController.createAProduct);
router.get("/", productController.getAllProduct);
router.get("/:productId", productController.getSingleProduct);
router.delete("/:productId", productController.deleteProduct);
router.put("/:productId", productController.updateProduct);

export const productRoutes = router;
