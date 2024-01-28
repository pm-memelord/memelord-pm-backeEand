import { ApiProperty } from "@nestjs/swagger";
// needs to be installed first to use class varidators

//dto is a schema of how our request payload will look like, things that our request will send to the server
export class SigninDto{
    
    @ApiProperty({
        description: 'Email',
        example:'example@gnail.com'
    })
    email: string

    @ApiProperty({
        description: 'Users Password',
        example:'jhgyugh887;'
    })
    password: string  
   
}

