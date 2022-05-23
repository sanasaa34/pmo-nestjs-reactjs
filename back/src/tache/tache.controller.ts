import { Controller, Get, Post, Param, Body, Put, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { TacheService } from './tache.service';
import { TacheEntity } from './tache.entity';


@Controller('tache')
export class TacheController {
    
    constructor(private service: TacheService) { }

    @Get('/')
    hello( @Res() res) {
        return res.send('Hello World')
    }

    /* @Get(':id')
    get( @Param() params) {
        return this.service.gettache(params.id);
    } */

    /* @Get('/succ-et-prec/:id')
    gettaches( @Param() params) {
        return this.service.getBytache(params.id);
    } */


    @Get('/all')
    getall() {
        return this.service.gettaches();
    }

    @Post()
    create( @Body() tache: TacheEntity) {
        return this.service.createtache(tache);
    }

    @Put()
    updateprojet( @Body() tache: TacheEntity) {
        return this.service.updatetache(tache);
    }

    @Delete(':id')
    deleteprojet( @Param() params, @Res() res) {
        
        this.service.deleteTache(params.id).then((tache) => {
            console.log(tache);
            
            if(!tache) return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: true,
                message: 'tache inexistant'
            })
            else return res.status(HttpStatus.OK).json({
                error: false,
                message: 'Tache supprimer avec succès'
            })
        })

        
    }



}
