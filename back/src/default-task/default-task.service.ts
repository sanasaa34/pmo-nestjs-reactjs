import { Injectable } from '@nestjs/common';
import { DefaultTaskEntity } from './default-task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DefaultTaskService {
    constructor( @InjectRepository(DefaultTaskEntity) private taskRepository: Repository<DefaultTaskEntity>) { }

    async createtask (platform: DefaultTaskEntity) {
        console.log(platform)
        return this.taskRepository.save(platform);
    }



    async gettask(_id: number): Promise<DefaultTaskEntity[]> {
        return await this.taskRepository.find({
            select: ["task"],
            where: [{ "id": _id }]
        });
    }

    async updatetask(platform: DefaultTaskEntity) {
        this.taskRepository.save(platform)
    }

    async deletetask(platform: DefaultTaskEntity) {
        this.taskRepository.delete(platform);
    }



}
