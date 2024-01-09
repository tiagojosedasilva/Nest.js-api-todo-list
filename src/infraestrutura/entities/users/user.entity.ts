import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;
    
    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    constructor(user?: Partial<UserEntity>){
        this.id = user?.id,
        this.name = user?.name,
        this.username = user?.username,
        this.password = user?.password,
        this.createdAt = user?.createdAt,
        this.updatedAt = user?.updatedAt
    }
}