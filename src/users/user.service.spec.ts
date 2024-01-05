import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";

test('UserService', async () => {
    let userService: UserService;

    const module: TestingModule = await Test.createTestingModule({
        providers: [
            UserService,
        ]
    }).compile()

    userService = module.get<UserService>(UserService);

    it('testando se foi definido', () => {
        expect(userService).toBeDefined();
    })
  });

