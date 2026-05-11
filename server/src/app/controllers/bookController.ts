import type { Request, Response } from "express";
import { bookModel } from "../models/bookModel.js";

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookModel.find();

    return res.status(201).json({
      success: true,
      message: "all book get successfully",
      data: books,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);

    return res.status(200).json({
      success: true,
      message: "get book sucessfully",
      data: book,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: true,
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
      message: "book updated successfully",
      data: await updateBook,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const book = await bookModel.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "No book found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "delete book ",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};
