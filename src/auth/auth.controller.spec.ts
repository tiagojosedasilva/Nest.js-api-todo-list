import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';

describe('AuthService', () => {
  let authService: AuthService;
  let authController: AuthController;
  let jwtService: JwtService
  let userService: UserService

  beforeEach(async () => {
    authService = new AuthService(userService, jwtService);
    authController = new AuthController(authService)
  })    

  describe('login', () => {
    it('Should return a string with a JWT Token', async () => {
      let result: Promise<{access_token: string;}>;
      jest.spyOn(authService, 'login').mockImplementation(() => result)
    })
  })

  describe('validateUser', ()=>{
    it('Shold return any or error', async () => {
      let result: any;
      jest.spyOn(authService, 'validateUser').mockImplementation(() => result)
    })
  })
});
