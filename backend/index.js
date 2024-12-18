import express from 'express'
import dotenv from 'dotenv'
import productRouter from './router/productRouter.js';
import connectDB from './db/db.js';
import { categoryRouter } from './router/categoryRouter.js';
import cors from 'cors'

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use("/products", productRouter)
app.use("/categories", categoryRouter)



app.listen(3000, () => {
    console.log(`Server runs on port ${PORT}`);
    connectDB()
});