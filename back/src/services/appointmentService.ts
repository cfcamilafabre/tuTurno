import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import appointmentdDto from "../dtos/appointmentDto";
import { User } from "../entities/User";

const appointmentService = {

  getAllAppointments: async (): Promise<Appointment[]> => {
    const appointments = await AppDataSource.getRepository(Appointment).find();
    return appointments;
  },

  getAppointmentByUserId: async (id: number): Promise<Appointment[] | null> => {
    const appointments = await AppDataSource.getRepository(Appointment).find({
      where: {
        user: {
          id: id
        }
      },
      relations: ['user']
    });
    return appointments;
  },

  createAppointment: async ( appointment:appointmentdDto) => {
    const newAppointment = await AppDataSource.getRepository(Appointment).create(appointment)
    await AppDataSource.getRepository(Appointment).save(newAppointment);
    
     const user = await AppDataSource.getRepository(User).findOneBy({
        id: appointment.userId
     })

     if (user) {
      newAppointment.user = user;
      await AppDataSource.getRepository(Appointment).save(newAppointment)
     }

     return newAppointment;
  },


  cancelAppointment: async (id: number): Promise<Appointment | null> => {
    // Buscar el turno por su ID
    const appointment = await AppDataSource.getRepository(Appointment).findOneBy({id});
    console.log(appointment)
    console.log(id)
    // Verificar si el turno existe
    if (!appointment) {
      throw new Error("Turno no encontrado");
    }

    // Cambiar el estado del turno a "cancelled"
    appointment.status = "cancelled";

    // Guardar los cambios en la base de datos
    await AppDataSource.getRepository(Appointment).update(id, { status: "cancelled" });

    return appointment;
  }
};

export { appointmentService }

