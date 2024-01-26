import { Injectable } from "@nestjs/common";
import { sign } from "jsonwebtoken";
import { LoginDto } from "./signIn.dto";
import { LogInService } from "src/login/login.services";


@Injectable()
export class AuthUserService{
    constructor(
                private userService: LogInService,
    ){}

    async validateUser(Email: string, pass : string): Promise<any>{
        const user = await this.userService.findByEmailAndPassword(Email, pass);
        
        if (user && user.password === pass){
            const { password, ...result} = user;
            return result;
        }

        return null;
    }

    async login(logindto: LoginDto){
        return {
            access_token:sign({
                passwprd: logindto.password, 
            },
            process.env.SECRET, 
            {
                expiresIn: '1000s'
            },   
            )
        };
    }


}