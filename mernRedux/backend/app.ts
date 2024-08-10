import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const connectDb = async () => {
    try {
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/employee",{
        useNewUrlParser: true,
      useUnifiedTopology: true, 
        });
        console.log(`mongodb connected${db.connection.host}`)
    } catch (err) {
        console.log(err);
    process.exit(1);
    }
}