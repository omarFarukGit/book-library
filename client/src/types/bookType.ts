export type TBook = {
  _id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  available_quantity: number;
  discount: number;
  image_url: string;
};

export type TApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type TParams = {
  params: {
    id: string;
  };
};
