import { Request, Response } from "express";
import { appointmentService } from '../services/appointmentService';

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { date, time, userId } = req.body;
    const newAppointment = await appointmentService.createAppointment(date, time, userId);
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await appointmentService.getAllAppointments();
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
    const id = parseInt(req.params.id);
    const appointment = await appointmentService.getAppointmentById(id);
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};