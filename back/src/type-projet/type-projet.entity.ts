import { ProjetsEntity} from  'src/projets/projets.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, BaseEntity, OneToMany} from 'typeorm';
@Entity()
export class TypeProjetEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    typeprojet:string;

    /* ---- relation with projets*/
    @OneToMany( () =>  ProjetsEntity, (projet) => projet.typeprojets)
    projets: ProjetsEntity[];

    


     
}
