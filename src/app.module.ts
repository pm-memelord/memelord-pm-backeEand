import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LogInDetail } from './login/entities/login.entity';
import { LogInDetailsModule } from './login/login.modules';
import { LogInDetailsController } from './login/login.controller';
import { LogInService } from './login/login.services';
import { typeOrmConfig } from './login/database/typorm.config';
import { AuthController } from './Authetication/AuthUser.controller';
import { AuthService } from './Authetication/AuthUser.service';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([LogInDetail]),
    LogInDetailsModule,

    
  ],
  controllers:[LogInDetailsController,AuthController],
  providers:[LogInService,AuthService,JwtService]
})
export class AppModule{}
