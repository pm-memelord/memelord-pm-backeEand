import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LogInService } from './login.services';
import { LoginDto } from './entities/login.dto';
import { LogInDetail } from './entities/login.entity';

@ApiTags('Register')
@Controller('users')
export class LogInDetailsController {
  constructor(private readonly userService: LogInService) {}

  @Post()
  create(@Body() userDto: LoginDto): Promise<LogInDetail> {
    return this.userService.create(userDto);
  }

  @Get()
  findAll(): Promise<LogInDetail[]> {
    return this.userService.findAll();
  }

  @Delete(':email')
  delete(@Param('email') email: string): Promise<void> {
    return this.userService.delete(email);
  }

  @Get(':email/:password') // Update the route to include password as a parameter
  findByEmailAndPassword(
    @Param('email') email: string,
    @Param('password') password: string,
  ): Promise<LogInDetail | undefined> {
    return this.userService.findByEmail(email);
  }
}