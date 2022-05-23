import { Controller, Get, Post, Param, Body, Put, Delete, Res } from '@nestjs/common';
import { ProjetsService } from './projets.service';
import { ProjetsEntity } from './projets.entity';

@Controller('projets')
export class ProjetsController {

    constructor(private service: ProjetsService) { }

    @Get('/')
    hello( @Res() res) {
        return res.send('Hello World')
    }

    @Get(':id')
    get( @Param() params) {
        return this.service.getprojet(params.id);
    }

    @Get('/platforms/:id')
    getplatforms( @Param() params) {
        return this.service.getplatforms(params.id);
    }
        
    @Get('/tch-by-pr/:id')
    gettaches( @Param() params) {
        return this.service.gettachesByProject(params.id);
    }


    @Get('/all')
    getall() {
        return this.service.getProjets();
    }

    @Post()
    create( @Body() user: ProjetsEntity) {
        return this.service.createProjets(user);
    }

    @Put()
    update( @Body() user: ProjetsEntity) {
        return this.service.updateProjet(user);
    }

    @Delete(':id')
    deleteUser( @Param() params) {
        return this.service.deleteProjet(params.id);
    }


    


}
