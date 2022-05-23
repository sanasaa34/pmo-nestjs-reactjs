import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import { AuthSignInDto } from './dto/auth-signin.dto';
import { EmpJwtResponse } from './interface/emp-jwt-response.interface';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
//new signUp method
@Post('/signup')
async signUp(@Body() authSignUpDto: AuthSignUpDto): Promise<string> {
  return this.authService.signUp(authSignUpDto);
}
  //new sigIn method
  @Post('/signin')
  async signIn(@Body() authSignInDto: AuthSignInDto): Promise<EmpJwtResponse> {
    return this.authService.signIn(authSignInDto);
  }
}