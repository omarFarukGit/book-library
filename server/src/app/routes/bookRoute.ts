import express from "express";
import {
  addBook,
  deleteBook,
  getBooks,
  updateBook,
} from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.get("/get-all-books", getBooks);
bookRouter.post("/add-book", addBook);
bookRouter.patch("/update-book/:id", updateBook);
bookRouter.delete("/delete-book/:id", deleteBook);

export default bookRouter;
