import request from 'supertest';
import server, {connectDB} from '../server';
import db from '../config/db';

jest.mock('../config/db')
describe('connectDB', () => {
    it('Should handle database connection errors', async () => {
        
        jest.spyOn(db, 'authenticate').mockRejectedValueOnce(new Error('Database connection error'))
        const consoleSpy = jest.spyOn(console, 'log')
        await connectDB()
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Hubo un error al conectar a la base de datos'))
    })
})

