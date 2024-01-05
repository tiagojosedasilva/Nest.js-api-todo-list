import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { CreateUserDto } from "./dtos/create-user.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller('user')
export class UserController{

    constructor(private userService: UserService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(){
        return await this.userService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number){
        return await this.userService.findById(id);
    }

    @Delete(':id')
    async delele(@Param('id') id: number){
        return await this.userService.delete(id)
    }


    @Post()
    create(@Body() body: CreateUserDto){
        return this.userService.post(body)
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() body: UpdateUserDto){
        return this.userService.update(id, body)
    }
}