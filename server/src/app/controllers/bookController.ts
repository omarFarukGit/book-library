import type { Request, Response } from "express";
import { bookModel } from "../models/bookModel.js";

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookModel.find();

    return res.status(201).json({
      success: true,
      message: "book added successfully",
      data: books,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const {
      title,
      author,
      description,
      category,
      available_quantity,
      discount,
      image_url,
    } = req.body;

    const book = await bookModel.create({
      title,
      author,
      description,
      category,
      available_quantity,
      discount,
      image_url,
    });
    res.status(201).json({
      success: true,
      message: "book added successfully",
      data: book,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const books = req.body;
    const updateBook = await bookModel.findByIdAndUpdate(id, { ...books });
    // const {
    //   title,
    //   author,
    //   description,
    //   category,
    //   available_quantity,
    //   discount,
    //   image_url,
    // } = req.body;

    res.status(201).json({
      success: true,
      message: "book added successfully",
      data: await updateBook,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
