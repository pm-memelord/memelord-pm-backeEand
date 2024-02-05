import { Module } from '@nestjs/common';
import { LogInDetailsModule } from 'src/login/login.modules';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './AuthUser.service';
import { AuthController } from './AuthUser.controller';

@Module({
  imports: [
    LogInDetailsModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}