import { DataSource } from "typeorm/data-source/DataSource";
import { TodoListEntity } from "./todo-list-entity.entity";

export const toDoListProvider = [{
    provide: 'TODOLIST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TodoListEntity),
    inject: ['DATA_SOURCE']
}]