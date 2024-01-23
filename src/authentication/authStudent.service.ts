import { Injectable } from "@nestjs/common";
import { sign } from "jsonwebtoken";
import { StudentService } from "src/users/students/student.service";
import { LoginDto } from "./signIn.dto";


@Injectable()
export class AuthStudentService{
    constructor(
                private studentService: StudentService,
    ){}

    async validateTeacher(Phone_Number: string, pass : string): Promise<any>{
        const student = await this.studentService.findOneByPhone_Number(Phone_Number,pass);
        
        if (student && student.Password === pass){
            const { Password, ...result} = student;
            return result;
        }

        return null;
    }

    async login(logindto: LoginDto){
        return {
            access_token:sign({
                passwprd: logindto.password, 
            },
            process.env.SECRET, 
            {
                expiresIn: '1000s'
            },   
            )
        };
    }


}