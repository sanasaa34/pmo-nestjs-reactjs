import { Controller,Get,Put,Post,Delete,Body,Param,Res } from '@nestjs/common';
import { EmployeeEntity } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(private service:  EmployeeService) { }

    @Get(':id')
    get( @Param() params) {
        return this.service.getemployee(params.id);
    }

    @Get('/all')
    getall() {
        return this.service.getemployees();
    }

    @Post()
    create( @Body() employee: EmployeeEntity) {
        return this.service.createemployee(employee);
    }

    @Put()
    update( @Body() employee: EmployeeEntity) {
        return this.service.updateemployee(employee);
    }

    @Delete(':id')
    delete( @Param() params) {
        return this.service.deleteemployee(params.id);
    }
}
