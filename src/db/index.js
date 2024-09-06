
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
      
    );
  } catch (error) {
    console.log("mongoDB connection errore", error);
    process.exit(1);
  }
};
 export default connectDB