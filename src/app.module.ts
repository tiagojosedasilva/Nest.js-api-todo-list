import { Module } from '@nestjs/common';
import { TodoListModule } from './todo-list/todo-list.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ TodoListModule, UserModule, AuthModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
