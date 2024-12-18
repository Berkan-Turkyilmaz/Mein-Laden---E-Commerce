import {Category} from "../models/categoryModel.js";


export const createCategory = async (req, res) => {
    const { name } = req.body
    console.log(req.body)
    try {
        const newCategory = await Category.create({ name })
        if (!newCategory) {
            return res.status(400).json({ message: "Category not created" })
        }
        return res.status(201).json({ message: "Category created", newCategory })
    } catch (error) {
        console.log("error creating category", error)
        return res.status(500).json({ message: "Error creating category", error })
    }
}
export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCategory = await Category.findByIdAndDelete(id)
        if (!deletedCategory) {
            return res.status(400).json({ message: "Category not deleted" })
        }
        return res.status(200).json({ message: "Category deleted", deletedCategory })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({ message: "Error deleting category", error })
    }
}

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        if (!categories) {
            return res.status(400).json({ message: "Categories not found" })
        }
        return res.status(200).json({ categories })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({ message: "Error getting categories", error })
    }
}