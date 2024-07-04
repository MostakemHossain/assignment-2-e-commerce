import express from "express";
import { orderRoutes } from "../modules/order/order.routes";
import { productRoutes } from "../modules/product/product.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoutes,
  },
  {
    path: "/orders",
    route: orderRoutes,
  },
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
