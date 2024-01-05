import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategys/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constants/auth.constants';
import { JwtStrategy } from './strategys/jwt.strategy';

@Module({
  imports: [ 
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: {expiresIn: '7 days'}
    })
  ],
  providers: [ AuthService, LocalStrategy, JwtStrategy ],
  controllers: [ AuthController ]
})

export class AuthModule {}
