import { Controller, Get, Post,Delete,Body,Param,Put} from '@nestjs/common';
import { ServiceEntity } from './service.entity';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
    constructor(private service:  ServiceService) { }

    @Get(':id')
    get( @Param() params) {
        return this.service.getservice(params.id);
    }

   
    @Post()
    create( @Body() employee: ServiceEntity) {
        return this.service.createservice(employee);
    }

    @Put()
    update( @Body() employee: ServiceEntity) {
        return this.service.updateservice(employee);
    }

    @Delete(':id')
    delete( @Param() params) {
        return this.service.deleteservice(params.id);
    }

}
