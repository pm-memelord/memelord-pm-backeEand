import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LogInDetail } from './login/entities/login.entity';
import { LogInDetailsModule } from './login/login.modules';
import { LogInDetailsController } from './login/login.controller';
import { LogInService } from './login/login.services';
import { typeOrmConfig } from './login/database/typorm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([LogInDetail]),
    LogInDetailsModule,

    
  ],
  controllers:[LogInDetailsController,],
  providers:[LogInService,]
})
export class AppModule{}
