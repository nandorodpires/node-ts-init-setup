module.exports = {
    type: process.env.DB_CONNECTION || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'node-ts',
    entities: [
       'src/app/models/*.ts'
    ],
    migrations: [
       'src/app/database/migrations/*.ts'
    ],
    cli: {
        migrationsDir: 'src/app/database/migrations'
    }
 }
