import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt,Strategy} from 'passport-jwt';
import { AuthUserService } from "./authStudent.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private userService: AuthUserService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET
            
        });
    }
    

    async validate(payload: any){
        
        const user = await this.userService.findByEmail(payload.password,payload.email)
        return {
            id: payload.email, ...user
        }
    }
}



