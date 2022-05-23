import { EntityRepository, Repository  } from "typeorm";
import { EmployeeEntity } from "./employee.entity";
import { AuthSignUpDto } from "src/auth/dto/auth-signup.dto";
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { AuthSignInDto } from "src/auth/dto/auth-signin.dto";
import { SignInResponse } from "src/auth/dto/auth-signinresponse.dto"; 

@EntityRepository(EmployeeEntity)
export class EmployeeRepository extends Repository<EmployeeEntity> {
    async signUp(authSignUpDto: AuthSignUpDto): Promise<string> {
        const { Email, password, nomEpml, prenomEpml } = authSignUpDto;
    
        const employee = new EmployeeEntity();
        employee.Email = Email;
        employee.password = password;
        employee. nomEpml = nomEpml;
        employee.prenomEpml = prenomEpml;

        try {
            await employee.save();
            return 'User created successfully';
          } catch (error) {
            if (error.code === '23505') {
              throw new ConflictException('Email already exists');
            } else {
              throw new InternalServerErrorException();
            }
          }
        }
       
  //private method to encrypt password
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  //signIn method to validate user's email and password
  async signIn(authSignInDto: AuthSignInDto): Promise<SignInResponse> {
    const { Email, password } = authSignInDto;

    console.log('tergzgfz',authSignInDto)
    const employee = await this.findOne({ Email });
    console.log('tetstz', employee)
    if (employee && employee.validatePassword(password)) {
      const employeeResponse = new SignInResponse();

      employeeResponse.nomEpml = employee.nomEpml;
      employeeResponse.prenomEpml = employee.prenomEpml;
      employeeResponse.email = employee.Email;
      

      return employeeResponse;
    } else {
      return null;
    }
  }
}







