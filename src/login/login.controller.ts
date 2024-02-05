import { Controller, Get, Post, Delete, Param, Body, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LogInService } from './login.services';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './entities/login.dto';
import { UserEntity } from './entities/login.entity'; 

@ApiTags('Register')
@Controller('users')
export class LogInDetailsController {
  constructor(private readonly userService: LogInService) { }

  @Post('register')
  async register(@Body() loginDto: LoginDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    return this.userService.register({
      first_name: loginDto.first_name,
      last_name: loginDto.last_name,
      user_name: loginDto.user_name,
      email: loginDto.email,
      password : loginDto.password,
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

  @Get('findByEmail') // Update the route to include password as a parameter
  findOne(
    @Param('email') email: string,
    @Param('email') password: string,
  ): Promise<any> {
    return this.userService.findOneUserByEmail(email,password);
  }

  @Post('login')
  async login(
    @Body("email") email: string,
    @Body("password") password: string,
  ) {
    const user = await this.userService.findOneUserByEmail(email,password);
    if (!user) {
      throw new BadRequestException('user not found');
    }
    if (!await bcrypt.compare(password, user.password)) {
      throw new BadRequestException('The password did not match');
    }
    return user;
  }


}