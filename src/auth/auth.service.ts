import { Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { UserService } from "../users/user.service"

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ){}
    
    async validateUser(username: string, password: string){
        console.log('==== validateUser aqui ====')
        let user
        try {
            user = await this.userService.findByEmail(username)
            console.log(user)
        } catch (error) {
            return error
        }
        
        if(user && user.password === password){
            //const { password, ...result} = user;
            console.log(password)
            //return result
            return user
        }
        return null;
    }

    async login(user: any){
        console.log({user})
        const payload = { username: user.username, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
