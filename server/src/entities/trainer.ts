import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Trainer extends BaseEntity{

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    firstName: string

    @Column('text')
    lastName: string

    @Column('text')
    items: string

    @Column('text')
    imageTrainer: string

    @Column('json')
    pokemon: string[]
}