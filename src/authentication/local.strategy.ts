import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {Strategy} from "passport-local"
import { AuthStudentService } from './authStudent.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor ( private readonly authService: AuthStudentService){
      super({
        usernameField: 'Phone_Number',
        passwordField: 'Password'
      })
    }
    

    async validate(Phone_Number: string, Password: string): Promise<any>{
      const student = await this.authService.validateTeacher(Phone_Number,Password);
      
      if (!student){

        throw new UnauthorizedException();
      }
      return student;
    }
      
}
