import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config()
require('../src/config/db');
import express from 'express';
import routes from './routes/routes';
const app = express()
const port=process.env.SERVER_PORT || 3000

app.use(express.json())

app.use(cors());
app.use(routes);
app.listen(port,()=>{
   console.log(`server listening on port ${port}`)            
})