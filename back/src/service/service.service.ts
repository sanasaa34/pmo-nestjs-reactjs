import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {ServiceEntity} from './service.entity'

@Injectable()
export class ServiceService {
    constructor( @InjectRepository (ServiceEntity) private serviceRepository: Repository<ServiceEntity>) { }

    async createservice (service: ServiceEntity) {
        console.log(service)
        return this.serviceRepository.save(service)
        ;
    }

    

    async getservice(_id: number): Promise<ServiceEntity[]> {
        return await this.serviceRepository.find({
            select: ["nomService"],
            where: [{ "id": _id }]
        });
    }

    async updateservice(service: ServiceEntity) {
        this.serviceRepository.save(service)
    }

    async deleteservice(service: ServiceEntity) {
        this.serviceRepository.delete(service);
    }




}
