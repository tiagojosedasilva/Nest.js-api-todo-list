import { Test, TestingModule } from "@nestjs/testing";
import { TodoListController } from "./todo-list.controller"
import { TodoListService } from "./todo-list.service";
import { TodoListEntity } from "../infraestrutura/entities/to-do-list/todo-list-entity.entity";

const todoEntityList: TodoListEntity[] = [
    new TodoListEntity({id: 1, IdUser: 1, emailUser: 'tiiago@jjose.com.br', name: 'Tiago Silva'}),
    new TodoListEntity({id: 2, IdUser: 2, emailUser: 'daniel@jjose.com.br', name: 'Daniel Silva'}),
    new TodoListEntity({id: 3, IdUser: 3, emailUser: 'miguel@jjose.com.br', name: 'Miguel Silva'}),
    new TodoListEntity({id: 4, IdUser: 4, emailUser: 'luis@jjose.com.br', name: 'Luis Silva'})
]


describe('TodoController', () => {
    let todoController: TodoListController;
    let todoService: TodoListService

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TodoListController],
            providers: [{
                provide: TodoListService,
                useValue: {
                    find: jest.fn().mockResolvedValue(todoEntityList),
                    findOneBy: jest.fn(),
                    create: jest.fn(),
                    save: jest.fn(),
                    delete: jest.fn(),
                    update: jest.fn(),
                }
            }]
        }).compile()

        todoController = module.get<TodoListController>(TodoListController);
        todoService = module.get<TodoListService>(TodoListService);
    })

    it('Should be defined', () => {
        expect(todoController).toBeDefined();
        expect(todoService).toBeDefined();
    })

    describe('find', () => {
        it('Should return a list', async () => {
            const result = await todoController.findAll()

            expect(result).toEqual(todoEntityList);
        })
    })
})