import { IsString, IsEmail, MinLength, Matches } from 'class-validator';
export class AuthSignUpDto {
    @IsEmail()
    Email: string;
    @IsString()
    @MinLength(8)
  
    password: string;
  @IsString()
    nomEpml: string;
  @IsString()
    prenomEpml: string;
  }

 