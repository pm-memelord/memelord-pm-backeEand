import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/login.entity';
import { LogInService } from './login.services';
import { LogInDetailsController } from './login.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [LogInService],
  controllers: [LogInDetailsController]
})
export class LogInDetailsModule {}
