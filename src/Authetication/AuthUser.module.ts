import { Module } from '@nestjs/common';
import { LogInDetailsModule } from 'src/login/login.modules';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './AuthUser.service';
import { AuthController } from './AuthUser.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { LoginDto } from 'src/login/entities/login.dto';
import { LogInService } from 'src/login/login.services';
import { LogInDetailsController } from 'src/login/login.controller';

@Module({
  imports:[
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([LoginDto]),
    LoginDto, PassportModule, 
    JwtModule.register({
        secret:process.env.SECRET,
        signOptions:{expiresIn:'300s'}
    })
],
  providers: [LogInService, AuthService],
  controllers: [AuthController, LogInDetailsController],
  exports : [AuthService]
})
export class AuthModule {}