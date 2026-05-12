import mongoose, { model, Schema } from "mongoose";

interface IUser {
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["creator", "viwer", "addmin"],
  },
});

export const UserModel = model<IUser>("users", userSchema);
