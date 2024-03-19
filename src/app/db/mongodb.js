import mongoose from "mongoose";

const dbConnection = () => {
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connected")
    } catch(error) {
        console.log(error);
    }
}

export default dbConnection;