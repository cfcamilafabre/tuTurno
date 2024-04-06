import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import IAppointment from "../interfaces/IAppointment";

const appointmentService = {

  getAllAppointments: async (): Promise<Appointment[]> => {
    const appointments = await AppDataSource.getRepository(Appointment).find();
    return appointments;
  },

  getAppointmentById: async (id: number): Promise<Appointment | null> => {
    const appointment = await AppDataSource.getRepository(Appointment).findOneBy({
      id
    })
    return appointment
  },

  createAppointment: async (date: Date, time: string, userId: number) => {
    const appointment = await AppDataSource.getRepository(Appointment).create({ date,time,userId })
    const result = await AppDataSource.getRepository(Appointment).save(appointment);
    return appointment
  },


  cancelAppointment: (id: number)=> {}
  
};

export { appointmentService }

