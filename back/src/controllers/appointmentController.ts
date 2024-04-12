import { Request, Response } from "express";
import { appointmentService } from '../services/appointmentService';
import { Appointment } from "../entities/Appointment";
import appointmentDto from "../dtos/appointmentDto";

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { description, date, time, userId } = req.body;
    const newAppointment: Appointment = await appointmentService.createAppointment({ description, date, time, userId });
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments: Appointment[] = await appointmentService.getAllAppointments();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await appointmentService.cancelAppointment(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const appointment: Appointment | null  = await appointmentService.getAppointmentById(Number(id));
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
