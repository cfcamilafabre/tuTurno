import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: "appointments"
})

export class Appointment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column({ default : "active"})
    status: "active" | "cancelled";

    @ManyToOne (() => User , (user) => user.appointments)
    @JoinColumn({ name: 'userId' })
    user: User;
}

