import { TestingModule, Test } from "@nestjs/testing";
import { Repository } from "typeorm";
import { UserEntity } from "../infraestrutura/entities/users/user.entity";
import { UserService } from "./user.service";
import { getRepositoryToken } from "@nestjs/typeorm";




test('UserService', async () => {
    let userService: UserService;
    let userRepository: Repository<UserEntity>

    const module: TestingModule = await Test.createTestingModule({
        providers: [
            UserService,
            {
                provide: getRepositoryToken(UserEntity),
                useValue: {
                    find: jest.fn().mockResolvedValue({}),
                    findOneBy: jest.fn().mockResolvedValue({}),
                    delete: jest.fn().mockResolvedValue({}),
                    create: jest.fn().mockResolvedValue({}),
                    save: jest.fn().mockResolvedValue({}),
                }
            }
        ]
    }).compile()

    userService = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(getRepositoryToken(UserEntity))

    it('testando se foi definido', () => {
        expect(userService).toBeDefined();
    })
  });
