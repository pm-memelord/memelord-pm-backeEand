import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { LogInDetail } from "src/login/entities/login.entity";
import { LogInService } from "src/login/login.services";
import { AuthUSerController } from "./authUser.controller";
import { AuthUserService } from "./authUser.service";

@Module({
    imports:[
        ConfigModule.forRoot(),
        LogInService,
        PassportModule,
        TypeOrmModule.forFeature([LogInDetail]),
        JwtModule.register({
            secret:process.env.SECRET,
            signOptions:{expiresIn:'300s'}
        })

    ],
    providers:[AuthUserService,LocalStrategy,AuthUserService,JwtStrategy],
    controllers: [AuthUSerController],
    exports : [AuthUserService]
})
export class AuthUserModule{}
