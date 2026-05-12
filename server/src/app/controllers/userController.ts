import type { Response, Request } from "express";
import { UserModel } from "../models/userModel.js";

export const signup = async (req: Request, res: Response) => {
  const { name, email, phone, username, password, role } = req.body;

  try {
    if (!name || !email || phone || username || password || role) {
      return res.status(404).json({
        success: false,
        message: "pleasse fill all field",
      });
    }
    const userExit = await UserModel.find({ email: email });

    if (userExit) {
      return res.status(404).json({
        success: false,
        message: "user all ready exits",
      });
    }

    const user = await UserModel.create({
      name,
      email,
      phone,
      username,
      password,
      role,
    });

    console.log(user);

    return res.status(404).json({
      success: true,
      message: "user created succesfully",
      user: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
