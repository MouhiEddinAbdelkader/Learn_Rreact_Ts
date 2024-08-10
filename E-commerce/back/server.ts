import mongoose from "mongoose";
import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Routes
import userRoutes from "./config/routes/userRoutes";

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://mouhamouha108:mouha@cluster0.byctrvg.mongodb.net/E-commerce typescrypt=Cluster0");
    console.log(`MongoDB Connected successfully to: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares to accept JSON in body
app.use(cors());
app.use(express.json());

// Morgan logging
app.use(morgan("dev"));



connectDB();


app.use("/api/users/", userRoutes);

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
