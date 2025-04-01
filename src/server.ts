import express from 'express'
import colors from 'colors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './config/swagger'
import router from './router'
import db from './config/db'


export const connectDB = async()=>{
    try {
        await db.authenticate();
        db.sync()
        // console.log(colors.blue('Conexión exitosa a la base de datos'));
      } catch (error) {
        // console.log(error)
        console.error(colors.red.bold('Hubo un error al conectar a la base de datos'));
      }
}
connectDB()

const server= express()
server.use(express.json())
server.use('/api/products', router)

//Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec )

)
export default server