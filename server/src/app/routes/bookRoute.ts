import express from "express";
import { addBook, getBooks } from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.get("/get-all-books", getBooks);
bookRouter.post("/add-book", addBook);

export default bookRouter;
