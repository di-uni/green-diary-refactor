import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("zero_waste")
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    writer: string
    
    @Column()
    contents: string

    @Column()
    images: string[]

    @Column()
    createdAt: string

    @Column()
    updatedAt: null | string

}