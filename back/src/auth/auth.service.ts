import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EmployeeRepository } from 'src/employee/employee.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import { AuthSignInDto } from './dto/auth-signin.dto';
import { EmpJwtResponse } from './interface/emp-jwt-response.interface';
//imported jwtservice
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(EmployeeRepository)
        private employeeRepository: EmployeeRepository,
        private jwtService: JwtService,
    ){}
    async signUp(authSignUpDto: AuthSignUpDto): Promise<string> {
        return this.employeeRepository.signUp(authSignUpDto);
      }

  async signIn(authSignInDto: AuthSignInDto): Promise<any> {
    try {
      const employeeResult = await this.employeeRepository.signIn(authSignInDto);
      console.log('jnlghjnfljhlfdjh', employeeResult)

      if (!employeeResult) {
        throw new UnauthorizedException('Invalid Credential!');
      }
  
      const payload = { employeeResult };
      const accessToken = await this.jwtService.sign(payload);
      
      const signInResponse = { accessToken: accessToken, expiresIn: 3600 };

      return signInResponse;
    } catch (error) {
      return {err: 'error'};
      }
    }
    
  
}


