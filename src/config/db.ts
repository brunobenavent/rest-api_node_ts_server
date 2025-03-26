import { Sequelize } from 'sequelize'



const db = new Sequelize('postgresql://rest_api_node_typescript_ua6i_user:bZD06THevBJjS8bOgGLITRXm1YAs1Xh9@dpg-cvhk5l9c1ekc738ce36g-a.frankfurt-postgres.render.com/rest_api_node_typescript_ua6i', {
    dialectOptions:{
        ssl: {
            require: false
        }
    }
})


export default db