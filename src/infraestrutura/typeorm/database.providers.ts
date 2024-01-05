import { DataSource } from "typeorm";
import { TodoListEntity } from "../entities/to-do-list/todo-list-entity.entity";
import { UserEntity } from "../entities/users/user.entity";

export const databaseProvider = [{

    provide: 'DATA_SOURCE',
    useFactory:async () => {
        const dataSouce = new DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'root',
            password: '1234',
            database: 'nestjs_api_todolist',
            entities: [ TodoListEntity, UserEntity ],
            synchronize: true,
        });
        return dataSouce.initialize();
    }
}]