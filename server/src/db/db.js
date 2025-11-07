import mongoose from "mongoose";

const connectToDB = async () =>{
   try{

    const connectionInstance = await mongoose.connect(
    `${process.env.MONGODB_URI}\/${process.env.DB_NAME}`);
    console.log(`DB CONNECTED SUCCESSFULLY AT HOST: ${connectionInstance.connection.host}`);

   }catch(error){
    console.log("DB CONNECTION ERROR:", error)
    process.exit(1);
   }
    
}

export default connectToDB;


// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log(`✅ MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
//   } catch (error) {
//     console.log("❌ MONGODB CONNECTION Failed:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
