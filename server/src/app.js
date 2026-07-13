import express from 'express';
import userRoutes from  './routes/user.routes.js'

const app = express();

app.use(express.json());    

app.use('/api/v1/user',userRoutes)

export  {app};


