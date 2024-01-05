import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { TodoListEntity } from "../infraestrutura/entities/to-do-list/todo-list-entity.entity";
import { CreateItemDto } from "./dtos/create-item.dtos";
import { UpdateItemDto } from "./dtos/update-item.dtos";

@Injectable()
export class TodoListService{

    constructor(
        @Inject('TODOLIST_REPOSITORY')
        private toDoListRepository: Repository<TodoListEntity>
    ){}
    
    async findAll(){
        return await this.toDoListRepository.find();
    }

    async findById(id: number){
        try {
            const item = this.toDoListRepository.findOneBy({id})
            return await item
        } catch (error) {
            const item = error
            return await item
        }
    }

    async postItem( item: CreateItemDto){
        this.toDoListRepository.create(item);
        return await this.toDoListRepository.save(item);
    }

    async deleteItem(id: number){
        this.toDoListRepository.delete(id);
        return await 'deletado com sucesso!!'
    }

    async updatItem(id: number, item: UpdateItemDto){
        return await this.toDoListRepository.update(id,item)
    }
}