import { Request, Response } from "express";
import { appointmentService } from '../services/appointmentService';
import { Appointment } from "../entities/Appointment";
import appointmentDto from "../dtos/appointmentDto";

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { description, date, time, status, userId } = req.body;
    const newAppointment: Appointment = await appointmentService.createAppointment({ description, date, time, status, userId });
    res.status(200).json({newAppointment, message: 'Turno agendado correctamente.', success:true});
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments: Appointment[] = await appointmentService.getAllAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await appointmentService.cancelAppointment(id);
    res.status(200).send({success:true});
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAppointmentByUserId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const appointments: Appointment[] | null  = await appointmentService.getAppointmentByUserId(Number(id));
    if (appointments) {
      res.status(200).json({ appointments, success:true });
    } else {
      res.status(404).json({ message: 'User does not have any appoinment' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
