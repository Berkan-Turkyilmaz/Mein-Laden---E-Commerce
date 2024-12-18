import { Product } from "../models/productModel.js";

export const createProduct = async (req, res) => {
    const { title, description, price, image, category, rating, soldCount } = req.body
    console.log(req.body)
    try {
        const newProduct = await Product.create({ title, description, price, image, category, rating, soldCount })
        if(!newProduct) {
            return res.status(400).json({ message: "Product not created" })
        }
        return res.status(201).json({ message: "Product created", newProduct })
    } catch (error) {
        console.log("error creating product", error)
        return res.status(500).json({ message: "Error creating product", error })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, image, category, rating, soldCount } = req.body
    try {
        const productWithSuchIdExist = await Product.findById(id)
        if(!productWithSuchIdExist) {
            return res.status(400).json({ message: "Product not found" })
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, { title, description, price, image, category, rating, soldCount }, { new: true })
        if(!updatedProduct) {
            return res.status(400).json({ message: "Product not updated" })
        }
        return res.status(200).json({ message: "Product updated", updatedProduct })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({ message: "Error updating product", error })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        if(!products) {
            return res.status(400).json({ message: "Products not found" })
        }
        return res.status(200).json({ products })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({ message: "Error getting products", error })
    }
}

export const getProductsByCategory = async (req, res) => {
    const {category} = req.params;
    try {
        const productsWithSuchCategory = await Product.find({category})
        if(!productsWithSuchCategory) {
            return res.status(400).json({ message: "Products with such category not found" })
        }
        return res.status(200).json({ productsWithSuchCategory , message: "Products with such category" })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({ message: "Error getting products with category", error })
    }
}

export const getProductById= async (req, res) => {
    const {id} = req.params;
    try {
        const productWithSuchId = await Product.find({id})
        if(!productWithSuchId) {
            return res.status(400).json({ message: "Products with such id not found" })
        }
        return res.status(200).json({ productWithSuchId })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({ message: "Error getting product with id", error })
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        if(!deletedProduct) {
            return res.status(400).json({ message: "Product not deleted" })
        }
        return res.status(200).json({ message: "Product deleted", deletedProduct })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({ message: "Error deleting product", error })
    }
}