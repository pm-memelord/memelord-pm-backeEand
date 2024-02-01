import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LogInService } from 'src/login/login.services';

@Injectable()
export class AuthService {
  constructor(
    private logInService: LogInService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.logInService.findOne({email});
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}