import { TApiResponse, TBook } from "@/types/bookType";
import { json } from "stream/consumers";

export const getAllbooks: () => Promise<TApiResponse<TBook[]>> = async () => {
  const res = await fetch("http://localhost:3001/api/books/get-all-books/");

  return res.json();
};
export const updateBook: () => Promise<TApiResponse<TBook[]>> = async () => {
  const res = await fetch("http://localhost:3001/api/books/get-all-books/");

  return res.json();
};



export const deleteBook = async (id: string) => {
  const res = await fetch(`http://localhost:3001/api/books/delete-book/${id}`);
  const data = await res.json();
};
