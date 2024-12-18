import { createCategory, deleteCategory, getAllCategories } from "../controllers/categoryController.js";
import express from "express"



export const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories  )
categoryRouter.post('/', createCategory  )
categoryRouter.delete('/:id', deleteCategory  )