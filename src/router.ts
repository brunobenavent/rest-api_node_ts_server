import { Router } from 'express'
import { body, param } from 'express-validator'
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from './handlers/products'
import { handleInputErrors } from './middleware'

const router = Router()
/**
*@swagger
*components:
*   schemas:
*       Product:
*           type: object
*           properties:
*               id:
*                   type: integer
*                   description: ID del producto
*                   example: 1
*               name:
*                  type: string
*                  description: Nombre del producto
*                  example: Monitor curvo de 49 Pulgadas
*               price:
*                 type: number
*                 description: Precio del producto
*                 example: 300  
*               availability:
*                 type: boolean
*                 description: Disponibilidad del producto
*                 example: true
*/

/**
*@swagger
* /api/products:
*   get:
*       summary: Obtener todos los productos
*       tags:
*          - Products
*       description: Retorna la lista de todos los productos
*       responses:
*          200:
*              description: Respuesta correcta
*              content:
*                 application/json:
*                    schema:
*                       type: array
*                       items:
*                           $ref: '#/components/schemas/Product'
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*                 
*                 
*                 
*/


// Routing
router.get('/', getProducts)
router.get('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getProductById
)

router.post('/', 
    // Validación
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),
    handleInputErrors,
    createProduct
)

router.put('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no válido'),
    handleInputErrors,
    updateProduct
)

router.patch('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    updateAvailability
)

router.delete('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteProduct
)

export default router