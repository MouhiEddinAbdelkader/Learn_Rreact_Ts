import mongoose from "mongoose";

const connectUserDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://user1:user1@cluster0.43vfbio.mongodb.net/?retryWrites=true&w=majority&auth=Cluster0");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectUserDB;