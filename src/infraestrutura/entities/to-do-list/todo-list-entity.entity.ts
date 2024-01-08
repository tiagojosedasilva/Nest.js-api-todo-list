import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class TodoListEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    IdUser: number

    emailUser

    @Column()
    name: string;

    // @Column()
    // status;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    constructor(todo?: Partial<TodoListEntity>){
        this.id = todo?.id;
        this.IdUser = todo?.IdUser;
        this.emailUser = todo?.emailUser;
        this.name = todo?.name;
        this.createdAt = todo?.createdAt;
        this.updatedAt = todo?.updatedAt;
    }
}