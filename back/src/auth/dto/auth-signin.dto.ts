import { IsEmail, IsString } from 'class-validator';

export class AuthSignInDto {
  @IsEmail()
  Email: string;

  @IsString()
  password: string;
}