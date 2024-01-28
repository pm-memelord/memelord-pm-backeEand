import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './AuthUser.service';
import { SigninDto } from './signIn.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() logInDto: SigninDto) {
    return this.authService.signIn(logInDto.email, logInDto.password);
  }
}