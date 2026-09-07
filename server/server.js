    import dotenv from "dotenv";

    dotenv.config();

    import {app} from "./src/app.js";
    //import connectToDb from "./src/db/db.js";

    // connectToDb()
    // .then(() => {
    //     console.log("\x1b[32m%s\x1b[0m", "✅ Database connection successful!"); // Green color
    // })
    // .catch((error) => {
    //     console.error("\x1b[31m%s\x1b[0m", "❌ Database connection failed:", error); // Red color
    // });
       
    app.get('/api', (req,res)=>{
        res.send('Success ✅ FastBus server is listening and you will be getting response')
    })

        app.listen(process.env.PORT, () => {
    console.log("\x1b[32m%s\x1b[0m", `✅ Server is running on port ${process.env.PORT}`);
    });