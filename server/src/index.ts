import express from "express";
import cors from "cors";

import type { Express, Request, Response } from "express";
import config from "./config/dotenv.js";
import connectDB from "./config/db.js";
import bookRouter from "./app/routes/bookRoute.js";
const app: Express = express();
app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("server runnig");
});

app.use("/api/books", bookRouter);

app.listen(config.prot, async () => {
  await connectDB();
  console.log(`server runnig this port ${config.prot}`);
});
