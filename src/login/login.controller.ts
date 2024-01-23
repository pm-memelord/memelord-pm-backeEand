import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LogInService } from './login.services';
import { LoginDto } from './entities/login.dto';
import { LogInDetail } from './entities/login.entity';

@ApiTags('User Details')
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

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.userService.delete(id);
  }

  @Get(':email')
  findByEmail(@Param('email') email: string): Promise<LogInDetail | undefined> {
    return this.userService.findByEmail(email);
  }
}