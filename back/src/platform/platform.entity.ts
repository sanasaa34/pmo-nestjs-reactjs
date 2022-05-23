import { BaseParameterObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, BaseEntity} from 'typeorm';
import { ProjetsEntity } from '../projets/projets.entity';
@Entity()
export class PlatformEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    nomPlatform:string;

    /* many to many avec le projet */
    @ManyToMany(type => ProjetsEntity, { cascade: true })
    projets: ProjetsEntity[];

}
