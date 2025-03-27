import express from 'express'
import { router } from './router'
import colors from 'colors'
import db from './config/db'


const connectDB = async()=>{
    try {
        await db.authenticate();
        db.sync()
        console.log(colors.blue('Conexión exitosa a la base de datos'));
      } catch (error) {
        console.log(error)
        console.error(colors.red.bold('Hubo un error al conectar a la base de datos'));
      }
}
connectDB()

const server= express()
server.use(express.json())
server.use('/api/products', router)

export default server