import type { Response, Request } from "express";
import { UserModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

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

    const hashPass = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      email,
      phone,
      username,
      password: hashPass,
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

export const loging=async(req:Request,res:Response)=>{
    const {email,password}=req.body;
    try {
        const user= await UserModel.findOne({email});

  const hash=await bcrypt.compare()

        const token=jwt.sign(email,'nost',{
            expiresIn:'1m'
        })

        return res.status(200).cookie('token',token).json({})

    } catch (error:any) {
        
    }
}
