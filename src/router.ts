import { Router } from "express";
import { body } from 'express-validator'
import { createProduct, getProducts } from "./handlers/products";
import { handleInputErrors } from "./middleware";


export const router = Router()

router.get('/', getProducts)

router.post('/', 
    body( 'name').notEmpty().withMessage('El nombre del producto no puede ir vacío'),
    body( 'price').notEmpty().withMessage('El precio del producto no puede ir vacío').isNumeric().withMessage('valor no válido').custom(value => value > 0).withMessage('El Precio no puede ser negativo'),
    handleInputErrors,
    
    createProduct ) 