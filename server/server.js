    import dotenv from "dotenv";
    dotenv.config();
    import express from "express";
    import connectToDb from "./src/db/db.js";

    import {app} from "./src/app.js";

    connectToDb()
    .then(() => {
        console.log("\x1b[32m%s\x1b[0m", "✅ Database connection successful!"); // Green color
    })
    .catch((error) => {
        console.error("\x1b[31m%s\x1b[0m", "❌ Database connection failed:", error); // Red color
    });
   

        app.listen(process.env.PORT, () => {
    console.log("\x1b[32m%s\x1b[0m", `✅ Server is running on port ${process.env.PORT}`);
    }); 