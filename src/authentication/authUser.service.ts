import { Injectable } from "@nestjs/common";
import { sign } from "jsonwebtoken";
import { LoginDto } from "./signIn.dto";


@Injectable()
export class AuthUserService{
    constructor(
                private userService: AuthUserService,
    ){}

    async validateTeacher(Email: string, pass : string): Promise<any>{
        const user = await this.userService.findByEmail(Email);
        
        if (user && user.Password === pass){
            const { Password, ...result} = user;
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