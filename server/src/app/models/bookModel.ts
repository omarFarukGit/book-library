import { model, Schema } from "mongoose";

interface IBook {
  id?: number;
  title: string;
  author: string;
  description: string;
  category: string;
  available_quantity: number;
  discount: number;
  image_url: string;
}

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  available_quantity: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
  },
});

export const bookModel = model<IBook>("books", bookSchema);
