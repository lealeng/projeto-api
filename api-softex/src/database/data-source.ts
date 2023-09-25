import { DataSource } from 'typeorm';
import { User } from '../entities/user';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres', 
    password: '1234',
    database: 'aulao',

    entities: [User],
    synchronize: true,

})
