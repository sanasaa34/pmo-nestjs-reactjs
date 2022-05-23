import { EmployeeEntity } from "src/employee/employee.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ServiceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    nomService:string;

  /* relation avec employee */
    @OneToMany( () =>  EmployeeEntity, (employee) => employee.service)
employee: EmployeeEntity[];



}
