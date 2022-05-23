
import { Entity, Column, PrimaryGeneratedColumn , ManyToOne, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable} from 'typeorm';
import { ProjetsEntity } from 'src/projets/projets.entity';
import { ProjetsService } from 'src/projets/projets.service';
import { DependanceEntity } from 'src/dependance/dependance.entity';
import { EmployeeEntity } from 'src/employee/employee.entity';

@Entity()
export class TacheEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    titretache:string;

    @Column({ length: 25 })
    description:string;

    @Column({ length: 25 })
    type:string;

    @Column({ length: 25 })
    charge:string;

    @Column({ length: 25 })
    priorite:string;

    @Column({ length: 25 })
    etat:string;

    /*---- relation avec projet----*/
    @ManyToOne( type => ProjetsEntity, (projets) => projets.taches, {
        cascade: true,
    })
    projet: ProjetsService


    /*--- relation avec depandance --- */
    @OneToOne(() => DependanceEntity)
    @JoinColumn()
    dependance: DependanceEntity

    
    /*-----relation avec employee-------*/

     @ManyToMany(type => EmployeeEntity, { cascade: true })
    @JoinTable({
        name: 'affectation',
        joinColumn: { name: 'tache_id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'emp_id', referencedColumnName: 'id' },
    })
    employee: EmployeeEntity[]; 

}

