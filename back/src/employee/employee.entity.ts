import { ServiceEntity } from "src/service/service.entity";
import { TacheEntity } from "src/tache/tache.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';


@Entity()
@Unique(['Email'])
export class EmployeeEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    nomEpml:string;

   
    @Column({ length: 25 })
    prenomEpml:string;
    @Column({ length: 25 })
    Email:string;
    @Column({length:25})
    password:string;
    @Column()
    salt: string;
      //validating incoming password with password in the database
  async validatePassword(password: string):Promise<boolean> {
        
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }

      

    /* relation avec service */ 
    @ManyToOne( type => ServiceEntity, (service) => service.employee)
    service: ServiceEntity


    /*----- relation avec tache*/
    
    @ManyToMany(type => TacheEntity, { cascade: true })
    tache: TacheEntity[]; 
}
