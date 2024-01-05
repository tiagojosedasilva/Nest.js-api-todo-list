import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { DataBaseModule } from "../infraestrutura/typeorm/database.module";
import { userProvider } from "../infraestrutura/entities/users/user.provider";

@Module({
    imports: [ DataBaseModule ],
    controllers: [ UserController ],
    providers: [ 
        UserService,
        ...userProvider
    ],
    exports: [ UserService ]
})
export class UserModule{}