import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from 'src/employee/employee.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PassportModule.register({defaultStrategy: 'jwt'}),
  JwtModule.register({
    secret: 'hjhdgduejghgshgss',
    signOptions: {
      expiresIn: 3600,
    }
  }),
    TypeOrmModule.forFeature([EmployeeRepository])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

