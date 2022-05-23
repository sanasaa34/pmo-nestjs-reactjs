import { Controller,Get,Put,Post,Param,Body,Res, Delete} from '@nestjs/common';
import { DefaultTaskService } from './default-task.service';
import { DefaultTaskEntity } from './default-task.entity';


@Controller('default-task')
export class DefaultTaskController {

    constructor(private service: DefaultTaskService) { }

    @Get('/')
    hello( @Res() res) {
        return res.send('default task ici ')
    }

    @Get(':id')
    get( @Param() params) {
        return this.service.gettask(params.id);
    }

    

    @Post()
    create( @Body() platform: DefaultTaskEntity) {
        return this.service.createtask(platform);
    }

    @Put()
    update( @Body() platform: DefaultTaskEntity) {
        return this.service.updatetask(platform);
    }

    @Delete(':id')
    delettache( @Param() params) {
        return this.service.deletetask(params.id);
    }

}
