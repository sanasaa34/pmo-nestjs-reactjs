import { Injectable } from '@nestjs/common';
import { TypeProjetEntity } from './type-projet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjetsEntity } from 'src/projets/projets.entity';

@Injectable()
export class TypeProjetService {
    constructor( @InjectRepository(TypeProjetEntity) private typeprojetRepository: Repository<TypeProjetEntity>) { }

    async createtype(type: TypeProjetEntity) {
       /* console.log(type)*/
        return this.typeprojetRepository.save(type);
    }


    async gettype(_id: number): Promise<TypeProjetEntity[]> {
        return await this.typeprojetRepository.find({
            select: ["typeprojet"],
            where: [{ "id": _id }]
        });
    }

    async getProjectsByTypeProject(id: number): Promise<TypeProjetEntity> {
        return await this.typeprojetRepository.findOne(id,{
            relations: ["projets"]
        })
    }

    async updatetype(type: TypeProjetEntity) {
        this.typeprojetRepository.save(type)
    }

    async deletetype(type: TypeProjetEntity) {
        this.typeprojetRepository.delete(type);
    }

}
