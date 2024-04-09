import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import appointmentdDto from "../dtos/appointmentDto";
import { User } from "../entities/User";

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

  createAppointment: async ( appointment:appointmentdDto) => {
    const newAppointment = await AppDataSource.getRepository(Appointment).create(appointment)
    await AppDataSource.getRepository(Appointment).save(newAppointment);
    
     const user = await AppDataSource.getRepository(User).findOneBy({
        id: appointment.userId
     })

     if (user) {
      newAppointment.user = user;
      AppDataSource.getRepository(Appointment).save(newAppointment)
     }

     return newAppointment;
  },


  cancelAppointment: (id: number)=> {}
  
};

export { appointmentService }

