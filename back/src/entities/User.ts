import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({
    name: "users"
})

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: Date;

    @Column()
    nDni: string;


    @OneToOne(() => Credential)
    @JoinColumn({ name: 'credentialsId' })
    credentials: Credential;

    @OneToMany  (() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}

