import { Controller, Get, Post, Delete, Param, Body, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LogInService } from './login.services';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './entities/login.dto';
import { UserEntity } from './entities/login.entity';
import path from 'path';

@ApiTags('Register')
@Controller('users')
export class LogInDetailsController {
  constructor(private readonly userService: LogInService) { }

  @Post('SignUp')
  async register(@Body() loginDto: LoginDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(loginDto.password, saltOrRounds);
    return this.userService.register({
      first_name: loginDto.first_name,
      last_name: loginDto.last_name,
      user_name: loginDto.UserName,
      email: loginDto.email,
      hashedPassword,
    });
  }

  @Get('GetAllUsers')
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Delete('delete')
  delete(@Param('email') email: string): Promise<void> {
    return this.userService.delete(email);
  }

  @Get(':email/:password') // Update the route to include password as a parameter
  findOne(
    @Param('email') email: string,
  ): Promise<any> {
    return this.userService.findOne(email);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.userService.findOne({ email });
    if (!user) {
      throw new BadRequestException('user not found');
    }
    if (!await bcrypt.compare(password, user.password)) {
      throw new BadRequestException('The password did not match');
    }
    return user;
  }


}