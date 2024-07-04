import express from "express";
import { orderController } from "./oder.controller";
const router = express.Router();

router.post("/", orderController.createAOrder);

export const orderRoutes = router;
