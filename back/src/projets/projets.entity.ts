import { type } from 'os';
import { PlatformEntity } from 'src/platform/platform.entity';
import { TypeProjetEntity } from 'src/type-projet/type-projet.entity';
import { TacheEntity } from 'src/tache/tache.entity';
import { TypeProjetService } from 'src/type-projet/type-projet.service';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class ProjetsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    nomProjet:string;

   /* @Column()
    dateDeclanchemen:Date;*/


  /*------relation many to many avec platform -------*/
 
  @ManyToMany(type => PlatformEntity, { cascade: true })
    @JoinTable({
        name: 'projets_use_plat',
        joinColumn: { name: 'projet_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'plat_id', referencedColumnName: 'id'},
    })
    platforms: PlatformEntity[];

/*-------------relation many-to-One avec Type-projet----*/
@ManyToOne( type => TypeProjetEntity, (typeprojet) => typeprojet.projets)
typeprojets: TypeProjetService

/*---- relation with tache----*/
@OneToMany( () =>  TacheEntity, (taches) => taches.projet)
taches: TacheEntity[];


}




