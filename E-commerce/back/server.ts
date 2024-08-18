import mongoose from "mongoose";
import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Routes
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import { getOrders } from "./controllers/orderController";

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
connectDB();
const app = express();

// Middleware to accept JSON in body
app.use(cors());
app.use(express.json());

// Morgan logging
app.use(morgan("dev"));

// Routes
app.use("/api/users/", userRoutes);
app.use("/api/products/", productRoutes);
app.use("/api/orders/", getOrders);

app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

app.listen(5000, () => {
  console.log(`Server running on port ${5000}`);
});
