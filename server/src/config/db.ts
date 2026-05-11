import mongoose from "mongoose";
import config from "./dotenv.js";

const connectDB: () => Promise<void> = async () => {
  try {
    await mongoose.connect(config.uri as string);
    console.log("Conntection succesfully");
  } catch (error) {
    console.log("connection fiald");
  }
};
export default connectDB;
