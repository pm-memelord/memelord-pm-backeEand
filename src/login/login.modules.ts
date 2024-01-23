import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogInDetail } from './entities/login.entity';
import { LogInService } from './login.services';
import { LogInDetailsController } from './login.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LogInDetail])],
  providers: [LogInService],
  controllers: [LogInDetailsController]
})
export class LogInDetailsModule {}
