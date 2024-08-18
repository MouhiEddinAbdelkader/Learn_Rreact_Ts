

import mongoose from "mongoose";


const connectDB = async () => {
    
      try {
        const conn = await mongoose.connect("mongodb+srv://mouhamouha108:mouha@cluster0.byctrvg.mongodb.net/E-commerce typescrypt=Cluster0");
        console.log(`MongoDB Connected successfully to: ${conn.connection.host}`);
      } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
      }
   
};

export default connectDB;
