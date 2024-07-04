import cors from "cors";
import express, { Request, Response } from "express";
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

export default app;
