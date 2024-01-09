import { UserEntity } from "../../infraestrutura/entities/users/user.entity";

export const UserEntityMock: Partial<UserEntity> = {
    id: 1,
    name: "Fulano Teste",
    username: "teste@teste.com.br",
    password: "123456879",
    createdAt : new Date(),
    updatedAt: new Date(),
}