import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt,Strategy} from 'passport-jwt';
import { LogInService } from "src/login/login.services";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private userService: LogInService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET,
        })

       
    }

    //the payload below is the one which was created from the
    async validate(payload: any){
        
        const user = await this.userService.findOneUserByEmail(payload.email,payload.password)
        return {
            id: payload.userId, ...user
        }
    }
}