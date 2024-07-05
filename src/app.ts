import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import router from "./app/routes";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Product Inventory API........",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
export default app;
