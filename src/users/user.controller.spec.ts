import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { UserController } from "./user.controller"
import { UserService } from "./user.service";
import { UserEntity } from "../infraestrutura/entities/users/user.entity";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { CreateUserDto } from "./dtos/create-user.dto";

describe('UserController', () => {
    let userController:  UserController;
    let userService: UserService;
    let userRepository: Repository<UserEntity>

    beforeEach(() => {
        userService = new UserService(userRepository);
        userController = new UserController(userService);
    })

    describe('findAll', () => {
        it('Should return an array of users', async () => {
            let result: Promise<UserEntity[]>
            jest.spyOn(userService, 'findAll').mockImplementation(() => result);

            expect(await userController.findAll()).toBe(result)
        })
    })

    describe('findById', () => {
        it('Should return a user', async () => {
            let result: Promise<UserEntity>;
            jest.spyOn(userService, 'findById').mockImplementation((id) => result)
          
            expect(await userController.findById(1)).toBe(result)
        })
    })

    describe('delete', () => {
        it('Should return a string', async () => {
            let result: Promise<DeleteResult>;
            jest.spyOn(userService, 'delete').mockImplementation((id) => result)

            expect(await userController.delele(1)).toBe(result)
        })
    })

    describe('update', () => {
        it('Should return a object type user',async () => {
            let result: Promise<UpdateResult>
            const user: UpdateUserDto = {
                name: 'Tiago Silva',
                username: 'tiago@silva.com.br',
                password: '123'
            }
            jest.spyOn(userService, 'update').mockImplementation((id, user) => result)

            expect(await userController.update(1, user)).toBe(result)
        })
    })

    describe('create', () => {
        it("Should return a object type user", async () => {
            let result: Promise<UserEntity>;
            const user: CreateUserDto = {
                name: 'Tiago Silva',
                username: 'tiago@silva.com.br',
                password: '123'
            }
            jest.spyOn(userService, 'post').mockImplementation((user) => result)

            expect(await userController.create(user)).toBe(result)
        })
    })
})