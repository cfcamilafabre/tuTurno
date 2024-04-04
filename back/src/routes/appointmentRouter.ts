import { Router } from "express";
import { getAppointments, getAppointmentById, createAppointment, cancelAppointment } from "../controllers/appointmentController";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointments)

appointmentsRouter.get("/:id", getAppointmentById)

appointmentsRouter.post("/schedule", createAppointment)

appointmentsRouter.put("/cancel", cancelAppointment)

export default appointmentsRouter