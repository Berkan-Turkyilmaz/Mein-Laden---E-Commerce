import mongoose from "mongoose";

export const categorySchema = await mongoose.Schema({
    name: { type: String, required: true }}, { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);