import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

router.post("/", productController.createAProduct);

export const productRoutes = router;
