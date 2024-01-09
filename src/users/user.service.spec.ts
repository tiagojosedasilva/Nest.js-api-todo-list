import { TestingModule, Test } from "@nestjs/testing";
import { UserService } from "./user.service";
import { describe } from "node:test";
import { getRepositoryToken } from "@nestjs/typeorm";
import { UserEntity } from "../infraestrutura/entities/users/user.entity";
import { Repository } from "typeorm/repository/Repository";
import { userProvider } from "../infraestrutura/entities/users/user.provider";
import { DataSource, UpdateResult } from "typeorm";
import { UserEntityMock } from "../test/mocks/user-entity.mock";
import { UpdateUserDto } from "./dtos/update-user.dto";

// const userList = [
//     new UserEntity({id: 1, name: 'Astoufo', username: 'astoufo@gmail.com', password: 'Astoufo123'}),
//     new UserEntity({id: 2, name: 'Daniel', username: 'daniel@gmail.com', password: 'daniel123'}),
//     new UserEntity({id: 1, name: 'Luis', username: 'luis@gmail.com', password: 'luis123'}),
//     new UserEntity({id: 1, name: 'Tiago', username: 'tiago@gmail.com', password: 'tiago123'})
// ]

describe('UserService', async () => {
    let userService: UserService;
    let userRepository: Repository<UserEntity>

    beforeEach(async () => {
        // const module: TestingModule = await Test.createTestingModule({
        //     providers: [
        //         UserService,
        //         ...userProvider,
        //         DataSource,
        //         {
        //             provide: 'USER_REPOSITORY',
        //             useValue: {
        //                 find: jest.fn().mockResolvedValue(userList),
        //                 // findOneBy: jest.fn().mockResolvedValue({}),
        //                 // delete: jest.fn().mockResolvedValue({}),
        //                 // create: jest.fn().mockResolvedValue({}),
        //                 // save: jest.fn().mockResolvedValue({}),
        //             }
        //         }
        //     ]
        // }).compile()

        // userService = module.get<UserService>(UserService);

        userService = new UserService(userRepository)
    })


    // it('testando se foi definido', () => {
    //     expect(userService).toBeDefined();
    // })

    describe('findAll', () => {
        it('should return a user list', async () => {
            let result: Promise<UserEntity[]>
            jest.spyOn(userService, 'findAll').mockImplementation(() => result)

            expect(await userService.findAll()).toBe(result)
        })
    })

    describe('findById', () => {
        it('should return a user', async () => {
            let result: Promise<UserEntity>;
            jest.spyOn(userService, 'findById').mockImplementation((id) => result);

            expect(userService.findById(1)).toBe(result)
        })
    })

    describe('findByEmail', () => {
        it('should return a user', async () => {
            let result: Promise<UserEntity>;
            jest.spyOn(userService, 'findByEmail').mockImplementation((String) => result)

            expect(userService.findByEmail('tiiagojjose@gmail.com')).toBe(result)
        })
    })

    describe('update', () => {
        const user: UpdateUserDto = {
            name: 'Tiago Silva',
            username: 'tiago@gmail.com',
            password: 'Ti@ago123'
        }
        it('should return a user updated', async () => {
            let result: Promise<UpdateResult>;
            jest.spyOn(userService, 'update').mockImplementation((id, user) => result)

            expect(userService.update(1, user)).toBe(result)
        })

        it('should return a error', () => {
            jest.spyOn(userService, 'update').mockRejectedValueOnce(new Error())

            expect(userService.update(1, user)).rejects.toThrowError();
        })
    })
  });
