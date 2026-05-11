import express from "express";

import type { Express, Request, Response } from "express";
import config from "./config/dotenv.js";
import { sendResponse } from "./util/sendResponse.js";
import connectDB from "./config/db.js";
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  sendResponse({
    res: res,
    statusCode: 200,
    success: true,
    message: "hello express app",
  });
});

app.listen(config.prot, async () => {
  await connectDB();
  console.log(`server runnig this port ${config.prot}`);
});
