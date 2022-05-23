import { Injectable } from '@nestjs/common';
import { PlatformEntity } from './platform.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlatformService {
    constructor( @InjectRepository(PlatformEntity) private platformRepository: Repository<PlatformEntity>) { }

    async createplatform (platform: PlatformEntity) {
        console.log(platform)
        return this.platformRepository.save(platform);
    }

    async getplatforms(): Promise<PlatformEntity[]> {
        return await this.platformRepository.find({
            select: ["nomPlatform"],
        });
    }

    async getplatform(_id: number): Promise<PlatformEntity[]> {
        return await this.platformRepository.find({
            select: ["nomPlatform"],
            where: [{ "id": _id }]
        });
    }

    async updateplatform(platform: PlatformEntity) {
        this.platformRepository.save(platform)
    }

    async deleteplatform(platform: PlatformEntity) {
        this.platformRepository.delete(platform);
    }
}
