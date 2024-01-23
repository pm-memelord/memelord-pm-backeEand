import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthStudentService } from './authStudent.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './signIn.dto';

@ApiTags("LogIn")
@Controller('authStudent')
export class AuthStudentController {
    constructor( private readonly authStudentService: AuthStudentService){}



    @UseGuards(AuthGuard('local'))
    @Post('signIn')
    async login(@Body() logindto:LoginDto){
        return this.authStudentService.login(logindto)
        
    }
}
