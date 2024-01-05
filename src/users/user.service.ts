import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "../infraestrutura/entities/users/user.entity";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Injectable()
export class UserService{

    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<UserEntity>
        ){}


    findAll(){
        return this.userRepository.find();
    }

    findById(id: number){
        return this.userRepository.findOneBy({id})
    }

    findByEmail(username: string){
        return this.userRepository.findOneBy({username})
    }

    delete(id: number){
        return this.userRepository.delete(id)
    }

    post(user: CreateUserDto){
        this.userRepository.create(user)
        return this.userRepository.save(user)
    }

    update(id: number, user: UpdateUserDto){
        return this.userRepository.update(id, user)
    }
}