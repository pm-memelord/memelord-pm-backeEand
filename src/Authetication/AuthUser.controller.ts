import { Controller, Request,Post, UseGuards, Get, Body } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './AuthUser.service';
import { SigninDto } from './signIn.dto';

@ApiTags('Authenticate')
@Controller('auth')
export class AuthController {
    constructor(private  authService:AuthService){}

    @ApiCreatedResponse({ description: 'logged in Succesfully' })
    @ApiBadRequestResponse({
        description:'unauthorized user'
    })

    @Post('login')    
    async login(@Body() logindto: SigninDto){
        return this.authService.login(logindto)
        
    }


}
