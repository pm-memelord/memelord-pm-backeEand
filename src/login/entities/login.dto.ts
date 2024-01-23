import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from 'class-validator';
export class LoginDto {
    @ApiProperty({
        example: 'Peter',
        required: true
    })
    @IsNotEmpty()
    readonly first_name: string;

    @ApiProperty({
        example: 'Makaka',
        required: true
    })
    @IsNotEmpty()
    readonly last_name: string;


    @ApiProperty({
        example: 'example@gmail.com',
        required: true
    })
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty({
        example: 'password',
        required: true
    })
    @IsStrongPassword()
    @IsNotEmpty()
    readonly password: string;

}