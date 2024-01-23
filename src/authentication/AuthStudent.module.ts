import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthStudentService } from "./authStudent.service";
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthStudentController } from './authStudent.controller';
import { ConfigModule } from "@nestjs/config";
import { StudentModule } from "src/users/students/student.module";
import { StudentService } from "src/users/students/student.service";
import { StudentEntity } from "src/typeorm/entities/student.entity";

@Module({
    imports:[
        ConfigModule.forRoot(),
        StudentModule,
        PassportModule,
        TypeOrmModule.forFeature([StudentEntity]),
        JwtModule.register({
            secret:process.env.SECRET,
            signOptions:{expiresIn:'300s'}
        })

    ],
    providers:[AuthStudentService,LocalStrategy,StudentService,JwtStrategy],
    controllers: [AuthStudentController],
    exports : [AuthStudentService]
})
export class AuthStudentModule{}
