import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Pokemon extends BaseEntity{

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    name: string

    @Column('text')
    type: string

    @Column('text')
    health: number

    @Column('text')
    attacks: string[]

    @Column('text')
    imagePokemon: string
}