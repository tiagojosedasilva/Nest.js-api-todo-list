import { DataSource } from "typeorm/data-source/DataSource";
import { UserEntity } from "./user.entity";

export const userProvider = [{
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE']
}]