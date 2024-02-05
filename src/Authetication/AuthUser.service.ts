// require('dotenv').config()

import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { LogInService } from 'src/login/login.services';
import { SigninDto } from './signIn.dto';

@Injectable()
export class AuthService {
  constructor(private userService: LogInService) {}

  async validateEmployer(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneUserByEmail(email,pass);


    if (user && user.password === pass && user.email === email) {
        const { password, email, ...result } = user;
        return result;
    }
    
    return null;
  }

  async login(logindto:SigninDto){
    return{
      access_token:sign({
          userEmail: logindto.email,
        },
        process.env.SECRET,
        {
          expiresIn: '300s'
        },
        )
    }
  }


}
