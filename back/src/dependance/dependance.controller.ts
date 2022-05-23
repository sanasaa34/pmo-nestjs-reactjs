import { Controller,Get,Put,Post,Delete,Param,Body, Res } from '@nestjs/common';
import { DependanceEntity } from './dependance.entity';
import { DependanceService } from './dependance.service';

@Controller('dependance')
export class DependanceController {
    constructor(private service: DependanceService) { }

    @Get('/')
    hello( @Res() res) {
        return res.send('ici dependance')
    }

    @Get(':id')
    get( @Param() params) {
        return this.service.getdependance(params.id);
    }

    @Get(':id')
    getall( @Param() params) {
        return this.service.getdependances();
    }

   

    @Post()
    create( @Body() platform: DependanceEntity) {
        return this.service.createdependance(platform);
    }

    @Put()
    update( @Body() platform: DependanceEntity) {
        return this.service.updatedependance(platform);
    }

    @Delete(':id')
    delettache( @Param() params) {
        return this.service.deletedependance(params.id);
    }

}
