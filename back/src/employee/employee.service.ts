import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Injectable()
export class EmployeeService {
    constructor( @InjectRepository (EmployeeEntity) private employeeRepository: Repository<EmployeeEntity>) { }

    async createemployee (employee: EmployeeEntity) {
        console.log(employee)
        return this.employeeRepository.save(employee);
    }

    async getemployees(): Promise<EmployeeEntity[]> {
        return await this.employeeRepository.find({
            select: ["nomEpml"],
        });
    }

    async getemployee(_id: number): Promise<EmployeeEntity[]> {
        return await this.employeeRepository.find({
            select: ["nomEpml"],
            where: [{ "id": _id }]
        });
    }

    async updateemployee(employee: EmployeeEntity) {
        this.employeeRepository.save(employee)
    }

    async deleteemployee(employee: EmployeeEntity) {
        this.employeeRepository.delete(employee);
    }


}
