import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://ganeshh4419:Surya123@cluster0.z9nze1m.mongodb.net/food-delivery").then(()=>console.log("DB Connected"));
}