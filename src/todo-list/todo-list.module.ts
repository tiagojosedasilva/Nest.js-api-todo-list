import { Module } from "@nestjs/common";
import { TodoListController } from "./todo-list.controller";
import { TodoListService } from "./todo-list.service";
import { DataBaseModule } from "../infraestrutura/typeorm/database.module";
import { toDoListProvider } from "../infraestrutura/entities/to-do-list/todo-list-provider.provider";


@Module({
    imports:[ DataBaseModule],
    controllers:[ TodoListController ],
    providers: [ 
        TodoListService,
        ...toDoListProvider, 
    ],

})
export class TodoListModule{}