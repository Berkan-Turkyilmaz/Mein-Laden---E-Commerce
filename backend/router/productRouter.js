import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, getProductsByCategory, updateProduct } from '../controllers/productControllers.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts  )
productRouter.get('/:id', getProductById  )
productRouter.get('/categories/:category', getProductsByCategory  )
productRouter.post('/', createProduct  )
productRouter.put('/:id', updateProduct  )
productRouter.delete('/:id', deleteProduct  )


export default productRouter