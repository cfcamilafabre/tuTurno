import { Request, Response } from "express";
import { appointmentService } from '../services/appointmentService';

export const createAppointment = async (req: Request, res: Response) => {
    const { date, time, userId } = req.body;
    const newAppointment = appointmentService.createAppointment(date, time, userId);
    res.status(201).json(newAppointment);
  };
  
  export const getAppointments = async (req: Request, res: Response) => {
    const appointments = appointmentService.getAllAppointments();
    res.json(appointments);
  };
  
  export const cancelAppointment = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    appointmentService.cancelAppointment(id);
    res.status(204).send();
  };
  
  export const getAppointmentById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const appointment = appointmentService.getAppointmentById(id);
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  };