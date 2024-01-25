import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {Strategy} from "passport-local"
import { AuthUserService } from './authUser.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor ( private readonly authService: AuthUserService){
      super({
        usernameField: 'email',
        passwordField: 'Password'
      })
    }
    

    async validate(Email: string, Password: string): Promise<any>{
      const user = await this.authService.validateTeacher(Email,Password);
      
      if (!user){

        throw new UnauthorizedException();
      }
      return user;
    }
      
}
