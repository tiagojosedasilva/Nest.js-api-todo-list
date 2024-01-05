import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TodoListService } from "./todo-list.service";
import { CreateItemDto } from "./dtos/create-item.dtos";
import { UpdateItemDto } from "./dtos/update-item.dtos";

@Controller('todo')
export class TodoListController{
    
    constructor(private todolistService: TodoListService){}

    @Get()
    findAll(){
        return this.todolistService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number){
        return this.todolistService.findById(id);
    }

    @Post()
    postItem(@Body() body: CreateItemDto){
        return this.todolistService.postItem(body)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.todolistService.deleteItem(id)
    }

    @Patch(':id')
    updateItem(@Param('id') id: number, @Body() body: UpdateItemDto){
        return this.todolistService.updatItem(id, body)
    }
}