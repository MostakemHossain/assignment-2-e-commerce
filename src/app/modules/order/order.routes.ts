import express from "express";
import { orderController } from "./oder.controller";
const router = express.Router();

router.post("/", orderController.createAOrder);
router.get("/", orderController.getAllOrder);

export const orderRoutes = router;
