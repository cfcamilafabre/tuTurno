import { Router } from "express";
import { getAppointments, getAppointmentById, createAppointment, cancelAppointment } from "../controllers/appointmentController";
import { create } from "domain"; 

const router: Router = Router();

router.get("/appointments", getAppointments)

router.get("/appointments/:id", getAppointmentById)

router.post("/appointments/schedule", createAppointment)

router.put("/appointments/cancel", cancelAppointment)

export default router