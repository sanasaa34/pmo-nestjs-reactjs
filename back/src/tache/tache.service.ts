import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TacheEntity } from './tache.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TacheService {

    constructor( @InjectRepository(TacheEntity) private tacheRepository: Repository<TacheEntity>) { }

    async createtache(tache: TacheEntity) {
        console.log(tache)
        return this.tacheRepository.save(tache);
    }

    async gettaches(): Promise<TacheEntity[]> {
        return await this.tacheRepository.find({
            select: ["titretache"],
        });
    }


    async updatetache(tache: TacheEntity) {
        this.tacheRepository.save(tache)
    }

    async deleteTache(id: TacheEntity): Promise<any> {
        this.tacheRepository.delete(id)
        .then((t) =>{
            console.log('hani hnééé', t.affected);
            if(t.affected === 0){
                return false
            }else if(t.affected === 1){
                return true
            }
            
        })
    }

    
          /* get succ et preced de chaque tache */
    /* async getBytache(id: number): Promise< TacheEntity> {
        return await this.tacheRepository.findOne(id,{
            relations: ["dependance"]
        })
    } */



    async getemployees(_id: number): Promise<TacheEntity> {

     return await this.tacheRepository.findOne(_id, { relations: ["employee"] });


    }

}

