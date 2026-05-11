import type { Response } from "express";

type sendResponseType<T> = {
  res: Response;
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;
};

export const sendResponse = <T>({
  res,
  statusCode,
  success,
  message,
  data,
}: sendResponseType<T>) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
  });
};
