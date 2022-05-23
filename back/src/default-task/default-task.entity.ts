import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class DefaultTaskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    task:string;  
}
