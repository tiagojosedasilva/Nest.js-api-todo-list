// import { TestingModule, Test } from "@nestjs/testing";
// import { UserService } from "./user.service";
// import { describe } from "node:test";
// import { getRepositoryToken } from "@nestjs/typeorm";
// import { UserEntity } from "../infraestrutura/entities/users/user.entity";
// import { Repository } from "typeorm/repository/Repository";
// import { userProvider } from "../infraestrutura/entities/users/user.provider";
// import { DataSource } from "typeorm";
// import { UserEntityMock } from "../test/mocks/user-entity.mock";

// describe('UserService', async () => {
//     let userService: UserService;
//     let userRepository: Repository<UserEntity>

//     beforeEach(async () => {
//         const module: TestingModule = await Test.createTestingModule({
//             providers: [
//                 UserService,
//                 ...userProvider,
//                 DataSource,
//                 {
//                     provide: getRepositoryToken(UserEntity),
//                     useValue: {
//                         find: jest.fn().mockResolvedValue(UserEntityMock),
//                         // findOneBy: jest.fn().mockResolvedValue({}),
//                         // delete: jest.fn().mockResolvedValue({}),
//                         // create: jest.fn().mockResolvedValue({}),
//                         // save: jest.fn().mockResolvedValue({}),
//                     }
//                 }
//             ]
//         }).compile()

//         userService = module.get<UserService>(UserService);
//         userRepository = module.get<Repository<UserEntity>>(getRepositoryToken(UserEntity))
//     })

    

//     it('testando se foi definido', () => {
//         expect(userService).toBeDefined();
//         expect(userRepository).toBeDefined();
//     })
//   });
