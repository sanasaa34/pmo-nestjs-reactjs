import { ProjetsService } from "src/projets/projets.service";
import { TacheEntity } from "src/tache/tache.entity";
import { TacheService } from "src/tache/tache.service";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class DependanceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    tacheSucc:string;

    @Column({ length: 25 })
    tachePrec:string;

    

}
