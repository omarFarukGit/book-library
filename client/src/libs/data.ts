import { TApiResponse, TBook } from "@/types/bookType";

export const createBook = async () => {
  const res = await fetch(`http://localhost:3001/api/books/add-book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(""),
  });
};

export const getAllbooks: () => Promise<TApiResponse<TBook[]>> = async () => {
  const res = await fetch("http://localhost:3001/api/books/get-all-books/");

  return res.json();
};

export const getBookById = async (id: string) => {
  const res = await fetch(
    `http://localhost:3001/api/books/get-all-books/${id}`,
  );
  const book = await res.json();
  return book.data;
};

export const updateBook = async (id: string) => {
  const res = await fetch(
    `http://localhost:3001/api/books/update-book/${id}`,
    {},
  );

  return res.json();
};

export const deleteBook = async (id: string) => {
  const res = await fetch(`http://localhost:3001/api/books/delete-book/${id}`);
  const data = await res.json();
};
