import { Request, Response } from "express";
import IUser from "../interfaces/IUser"

export const createAppointment = async (req:Request ,res:Response) => {
    res.send("Crear un nuevo turno")
}

export const getAppointments = async (req: Request, res: Response) => {
    res.send("Obtener el listado de todos los turnos de todos los usuarios")
}

export const cancelAppointment = async (req: Request, res:Response) => {
    res.send("Cambiar el estatus de un turno a “cancelled”.")
}

export const getAppointmentById = async (req:Request, res:Response) => {
    res.send("Obtener el detalle de un turno específico.")
}

