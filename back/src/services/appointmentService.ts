import IAppointment from "../interfaces/IAppointment";

const appointments: IAppointment[] = [
    {
        id: 1,
        date: new Date(2024, 3, 5),
        time: '10:00',
        userId: 1,
        status: 'active',
    }
]

const appointmentService = {

    getAllAppointments: (): IAppointment[] => {
        return appointments;
    },

    getAppointmentById: (id: number): IAppointment | undefined => {
        return appointments.find(appointment => appointment.id === id);
      },

      createAppointment: (date: Date, time: string, userId: number): IAppointment => {
        const newAppointment: IAppointment = {
          id: appointments.length + 1,
          date: date,
          time: time,
          userId: userId,
          status: 'active',
        };
    
        appointments.push(newAppointment);
    
        return newAppointment;
      },

      
  cancelAppointment: (id: number): void => {
    const appointment = appointments.find(appointment => appointment.id === id);

    if (appointment) {
      appointment.status = 'cancelled';
    }
  },
};

export { appointmentService }