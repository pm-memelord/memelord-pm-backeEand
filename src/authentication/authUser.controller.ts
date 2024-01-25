import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './signIn.dto';
import { AuthUserService } from './authUser.service';

@ApiTags("LogIn")
@Controller('authUser')
export class AuthUSerController {
    constructor( private readonly authUserService: AuthUserService){}



    @UseGuards(AuthGuard('local'))
    @Post('signIn')
    async login(@Body() logindto:LoginDto){
        return this.authUserService.login(logindto)
        
    }
}
