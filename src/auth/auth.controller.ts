import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { AuthService } from "./auth.service";
import { get } from "http";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Controller('auth')
export class AuthController{

    constructor( private authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Req() req){
        console.log(req.body)
        return this.authService.login(req.body)
    }
    @UseGuards(JwtAuthGuard)
    @Get('login')
    funfou(@Req() req){
        console.log(req.body)
        return 'aqui funfou'
    }
}