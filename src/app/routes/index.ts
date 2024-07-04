import express from "express";
import { productRoutes } from "../modules/product/product.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoutes,
  },
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
