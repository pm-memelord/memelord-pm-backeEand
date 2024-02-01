import { Module } from '@nestjs/common';
import { LogInDetailsModule } from 'src/login/login.modules';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './AuthUser.service';
import { AuthController } from './AuthUser.controller';

@Module({
  imports: [
    LogInDetailsModule,
    JwtModule.register({
      global: true,
      secret:process.env.SECRET,
      signOptions: { expiresIn: '1000s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}