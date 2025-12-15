import {app} from './app.js'
import dotenv from 'dotenv'
import {connectToDb} from './db/db.js'
import app from './app.js'
dotenv.config('/.env')

connectToDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!!", err);
})




