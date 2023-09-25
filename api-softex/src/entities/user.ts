import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({default: true})
    isActive: boolean;
    
    @Column()
    password: string;

    @Column()
    cpf: string;
}