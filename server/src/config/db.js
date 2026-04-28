import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully".green);
    } catch (error) {
        console.error("Error connecting to MongoDB:".red, error);
        process.exit(1);
    }
}

export default connectDB;