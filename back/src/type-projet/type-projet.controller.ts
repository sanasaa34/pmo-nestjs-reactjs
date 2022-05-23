import { Controller,Get,Post,Put,Delete,Res ,Param,Body } from '@nestjs/common';
import { TypeProjetService } from './type-projet.service';
import { TypeProjetEntity } from './type-projet.entity';
@Controller('type-projet')
export class TypeProjetController {
    constructor(private service: TypeProjetService) { }

    @Get('/')
    hello( @Res() res) {
        return res.send('tesssttttttt')
    }

    @Get(':id')
    get( @Param() params) {
        return this.service.gettype(params.id);
    }

    @Get('ByTP_P/:id')
    getProjects( @Param() params) {
        return this.service.getProjectsByTypeProject(params.id);
    }

    @Post()
    create( @Body() platform: TypeProjetEntity) {
        return this.service.createtype(platform);
    }

    @Put()
    update( @Body() platform: TypeProjetEntity) {
        return this.service.updatetype(platform);
    }

    @Delete(':id')
    delete( @Param() params) {
        return this.service.deletetype(params.id);
    }


}
