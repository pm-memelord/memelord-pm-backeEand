import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { UserEntity } from "../entities/login.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type : 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'memelord_db',
    entities: [UserEntity, ],
    synchronize: true,
}