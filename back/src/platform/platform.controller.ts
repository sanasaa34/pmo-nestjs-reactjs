
import { Controller, Get, Post, Param, Body, Put, Delete, Res } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { PlatformEntity } from './platform.entity';

@Controller('platform')
export class PlatformController {
    constructor(private service: PlatformService) { }

    @Get('/')
    hello( @Res() res) {
        return res.send('tesssttttttt')
    }

    @Get(':id')
    get( @Param() params) {
        return this.service.getplatform(params.id);
    }

    @Get('/all')
    getall() {
        return this.service.getplatforms();
    }

    @Post()
    create( @Body() platform: PlatformEntity) {
        return this.service.createplatform(platform);
    }

    @Put()
    update( @Body() platform: PlatformEntity) {
        return this.service.updateplatform(platform);
    }

    @Delete(':id')
    delettache( @Param() params) {
        return this.service.deleteplatform(params.id);
    }
}
