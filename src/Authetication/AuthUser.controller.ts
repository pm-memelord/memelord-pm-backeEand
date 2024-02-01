import { Body, Controller, Post, HttpCode, HttpStatus,Request, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './AuthUser.service';
import { SigninDto } from './signIn.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './auth/auth.guard';
@Controller('auth')
@ApiTags('LogIn')
export class AuthController {
  constructor(private authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signIn: SigninDto) {
    return this.authService.signIn(signIn.email, signIn.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}