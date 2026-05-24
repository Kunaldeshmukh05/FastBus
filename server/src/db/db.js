import mongoose from "mongoose";
import { DB_NAME } from "../constants/constants.js";

const connectToDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`  
    )
    console.log("MongoDB connection successful")
  } catch(error) {
    console.log(error, "Something wrong with database connection")
    process.exit(1)  // Moved inside catch block
  }
};

export default connectToDb;