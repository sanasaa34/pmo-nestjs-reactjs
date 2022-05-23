import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { ProjetsEntity } from './projets.entity';

@Injectable()
export class ProjetsService {

    constructor( @InjectRepository(ProjetsEntity) private projetsRepository: Repository<ProjetsEntity>) { }

    async createProjets(projets: ProjetsEntity) {
        console.log(projets)
        return this.projetsRepository.save(projets);
    }

    async getProjets(): Promise<ProjetsEntity[]> {
        return await this.projetsRepository.find({
            select: ["nomProjet"],
        });
    }

    
    async gettachesByProject(id: number): Promise< ProjetsEntity> {
        return await this.projetsRepository.findOne(id,{
            relations: ["taches"]
        })
    }

    


    async getprojet(_id: number): Promise<ProjetsEntity[]> {
        /* return await this.projetsRepository.find({
            select: ["nomProjet", "platforms"],
            
            where: [{ "id": _id }]
        }); */
        return this.projetsRepository.find({
            select: ['nomProjet','platforms'],
        })
    }

    async updateProjet(user: ProjetsEntity) {
        this.projetsRepository.save(user)
    }

    async deleteProjet(user: ProjetsEntity) {
        this.projetsRepository.delete(user);
    }



    async getplatforms(_id: number): Promise<ProjetsEntity> {

     return await this.projetsRepository.findOne(_id, { relations: ["platforms"] });


    }

    


}
