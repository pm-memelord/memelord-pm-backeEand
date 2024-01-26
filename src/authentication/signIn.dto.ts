import { ApiProperty } from "@nestjs/swagger";
// needs to be installed first to use class varidators

//dto is a schema of how our request payload will look like, things that our request will send to the server
export class LoginDto{
    
    @ApiProperty({
        description: 'Email',
        example:'example@gnail.com'
    })
    Phone_number: string

    @ApiProperty({
        description: 'Users Password',
        example:'jhgyugh887;'
    })
    password: string  
   
}

