import { Module } from '@nestjs/common';
import { jwtConstants } from './constants';
import { LogInDetailsModule } from 'src/login/login.modules';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './AuthUser.service';
import { AuthController } from './AuthUser.controller';

@Module({
  imports: [
    LogInDetailsModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}