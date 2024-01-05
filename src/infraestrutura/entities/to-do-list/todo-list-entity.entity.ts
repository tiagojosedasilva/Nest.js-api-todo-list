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
}