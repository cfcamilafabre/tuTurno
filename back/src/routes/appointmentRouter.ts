import { Router } from "express";
import { getAppointments, getAppointmentByUserId, createAppointment, cancelAppointment } from "../controllers/appointmentController";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointments)

appointmentsRouter.get("/:id", getAppointmentByUserId)

appointmentsRouter.post("/schedule", createAppointment)

appointmentsRouter.put("/cancel/:id", cancelAppointment)

export default appointmentsRouter