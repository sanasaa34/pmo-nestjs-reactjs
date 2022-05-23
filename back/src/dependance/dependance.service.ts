import { Injectable } from '@nestjs/common';
import { DependanceEntity } from './dependance.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DependanceService {
    constructor( @InjectRepository(DependanceEntity) private DependanceRepository: Repository<DependanceEntity>) { }

    async createdependance (dependance: DependanceEntity) {
        console.log(dependance)
        return this.DependanceRepository.save(dependance);
    }

    async getdependances(): Promise<DependanceEntity[]> {
        return await this.DependanceRepository.find({
            select: ["tacheSucc", "tachePrec"],
        });
    }

    async getdependance(_id: number): Promise<DependanceEntity[]> {
        return await this.DependanceRepository.find({
            select: ["tacheSucc"],
            where: [{ "id": _id }]
        });
    }

    async updatedependance(dependance: DependanceEntity) {
        this.DependanceRepository.save(dependance)
    }

    async deletedependance(dependance: DependanceEntity) {
        this.DependanceRepository.delete(dependance);
    }






}
